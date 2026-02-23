# CRM — Plan de Mejoras

Instrucciones detalladas para implementar cada mejora. Cada sección es independiente y puede ejecutarse por separado.

---

## FASE 1: Seguridad Critica

### 1.1 Middleware de Autenticacion JWT

Crear un middleware que verifique el token JWT en todas las rutas protegidas.

**Crear archivo:** `backend/src/middlewares/authMiddleware.js`

```js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalido o expirado" });
  }
};

module.exports = authMiddleware;
```

**Editar archivo:** `backend/src/routes/index.js`

Aplicar `authMiddleware` a TODAS las rutas excepto login:

```js
const authMiddleware = require("../middlewares/authMiddleware.js");

// Rutas publicas (sin auth)
router.use("/", loginRouter);

// Rutas protegidas (con auth)
router.use("/", authMiddleware, bossRouter);
router.use("/", authMiddleware, salemans);
router.use("/", authMiddleware, clientsRouter);
router.use("/", authMiddleware, activityRouter);
router.use("/", authMiddleware, productsRouter);
router.use("/", authMiddleware, feedbacks);
router.use("/", authMiddleware, sale_productsRouter);
router.use("/", authMiddleware, taskRouter);
router.use("/", authMiddleware, categoryRouter);
router.use("/", authMiddleware, dashboard_salesmanRouter);
router.use("/", authMiddleware, dashboard_bossRouter);
router.use("/", authMiddleware, paymentRouter);
```

**Editar frontend:** Todos los archivos en `client/src/services/` deben enviar el token en el header Authorization.

Crear un axios instance en `client/src/services/api.js`:

```js
import axios from "axios";
import Cookies from "universal-cookie";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

api.interceptors.request.use((config) => {
  const cookies = new Cookies();
  const token = cookies.get("myToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

Luego reemplazar todos los `axios.post/get/put/delete` en los services por `api.post/get/put/delete` importando desde `./api.js`.

Archivos a editar:
- `client/src/services/authServices.js` — solo las requests que NO son login
- `client/src/services/activityService.js`
- `client/src/services/clientsService.js`
- `client/src/services/productsService.js`
- `client/src/services/sellersService.js`
- Cualquier otro archivo en `client/src/services/`

---

### 1.2 Autorizacion por Roles

Crear middleware que chequee el rol del usuario (admin vs seller).

**Crear archivo:** `backend/src/middlewares/roleMiddleware.js`

```js
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "No tienes permiso para esta accion" });
    }
    next();
  };
};

module.exports = authorize;
```

**Aplicar en rutas que solo el Boss puede usar:**

```js
const authorize = require("../middlewares/roleMiddleware.js");

// Solo bosses pueden crear vendedores
salemansRouter.post("/salesman", authorize("admin"), salesmanPostValidation, postSaleman);

// Solo bosses pueden ver dashboards de boss
router.use("/", authMiddleware, authorize("admin"), dashboard_bossRouter);
```

---

### 1.3 Fix Password Comparison en validacion.js

**Editar archivo:** `backend/src/controllers/auth/validacion.js`

Actualmente en las lineas 40-44 y 47-50 compara passwords en texto plano:

```js
// MALO - comparacion en texto plano
if (password === salesman.password) {
```

Cambiar a:

```js
const bcrypt = require("bcryptjs");

// BUENO - comparacion con hash
if (await bcrypt.compare(password, salesman.password)) {
```

Hacer lo mismo para la comparacion de boss password en el mismo archivo.

---

### 1.4 Fix JWT en ProtectedRoutes.jsx

**Editar archivo:** `client/src/layouts/ProtectedRoutes.jsx`

Buscar la linea que usa `jwtVerify` con el secret hardcodeado `"secret"` y cambiar a `decodeJwt` (igual que se hizo en authServices.js):

```js
// ANTES
import { jwtVerify } from "jose";
const { payload } = await jwtVerify(myToken, new TextEncoder().encode("secret"));

// DESPUES
import { decodeJwt } from "jose";
const payload = decodeJwt(myToken);
```

---

### 1.5 Mover Firebase Credentials a .env

**Editar archivo:** `backend/src/firebase.js`

Reemplazar las credentials hardcodeadas:

```js
// ANTES
const firebaseConfig = {
  apiKey: "AIzaSyD5PbMNa9Cq7HgFe-HvBU13HIvuckrxWJM",
  authDomain: "crmback-4b65e.firebaseapp.com",
  // ...etc
};

// DESPUES
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
```

**Agregar a `backend/.env`:**

```
FIREBASE_API_KEY=AIzaSyD5PbMNa9Cq7HgFe-HvBU13HIvuckrxWJM
FIREBASE_AUTH_DOMAIN=crmback-4b65e.firebaseapp.com
FIREBASE_PROJECT_ID=crmback-4b65e
FIREBASE_STORAGE_BUCKET=crmback-4b65e.appspot.com
FIREBASE_MESSAGING_SENDER_ID=292978055447
FIREBASE_APP_ID=1:292978055447:web:95e64b6e5a9a78fe8cbf52
```

---

### 1.6 Mover Email Credentials en email.js

**Editar archivo:** `backend/src/controllers/email/email.js`

Hay un tercer archivo de email que todavia tiene credentials hardcodeadas. Buscar:

```js
auth: {
  user: "jhohanjianpierre@gmail.com",
  pass: "ifhpwgudrixwaxxw",
},
```

Reemplazar por:

```js
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
},
```

---

### 1.7 CORS — Configurar Origin Especifico

**Editar archivo:** `backend/src/app.js`

Cambiar `origin: "*"` a una lista de origenes permitidos:

```js
const corsOptions = {
  origin: process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(",")
    : ["http://localhost:3000"],
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "Origin", "X-Requested-With", "Accept"],
  credentials: true,
  preflightContinue: false,
};
```

En `.env` poner multiples origenes separados por coma:

```
CORS_ORIGIN=https://crm-client-rose-six.vercel.app,http://localhost:3000
```

---

## FASE 2: Performance

### 2.1 Paginacion en Endpoints de Listas

Agregar paginacion a todos los endpoints GET que devuelven listas.

**Ejemplo para `backend/src/controllers/clients/getAllClients.js`:**

Los handlers deben extraer `page` y `limit` de query params:

```js
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 20;
const skip = (page - 1) * limit;
```

Y los controllers deben usar `skip` y `take` de Prisma:

```js
const clients = await prisma.client.findMany({
  where: { salesmanId },
  skip,
  take: limit,
  orderBy: { createdAt: "desc" },
});

const total = await prisma.client.count({ where: { salesmanId } });

return { data: clients, total, page, limit, totalPages: Math.ceil(total / limit) };
```

**Aplicar en estos controllers:**
- `backend/src/controllers/clients/getAllClients.js`
- `backend/src/controllers/products/getAllProducts.js`
- `backend/src/controllers/salesman/getAllSalesman.js`
- `backend/src/controllers/activities/getActivities.js`
- `backend/src/controllers/tasks/getTasks.js`
- `backend/src/controllers/sale_products/getSaleProducts.js`
- `backend/src/controllers/feedbacks/getFeedback.js`

---

### 2.2 Fix N+1 Queries en getAllClients

**Editar archivo:** `backend/src/controllers/clients/getAllClients.js`

Actualmente hace un loop con llamadas individuales a `statusNegotiation` y `totalPurchased` por cada cliente. Reemplazar con Prisma includes:

```js
const clients = await prisma.client.findMany({
  where: { salesmanId },
  include: {
    activities: {
      select: { state: true },
      orderBy: { createdAt: "desc" },
      take: 1,
    },
    Activity: {
      include: {
        saleProducts: {
          select: { price_sale: true, quantity_sale: true },
        },
      },
    },
  },
});
```

Calcular `statusNegotiation` y `totalPurchased` en memoria en lugar de queries separadas.

---

### 2.3 Emails Asincronos (Fire and Forget)

**Editar archivos:**
- `backend/src/controllers/activities/createActivities.js`
- `backend/src/controllers/activities/updateActivities.js`
- `backend/src/controllers/sale_products/createSaleProducts.js`

En estos archivos, buscar las llamadas `await sendMail(...)` y quitar el `await` para que no bloqueen la respuesta:

```js
// ANTES - bloquea la respuesta
await sendMail(salesman, client, activity, "creacion");

// DESPUES - fire and forget
sendMail(salesman, client, activity, "creacion").catch(err => console.error("Email error:", err));
```

---

### 2.4 Indices en la Base de Datos

**Editar archivo:** `backend/prisma/schema.prisma`

Agregar indices a campos frecuentemente consultados:

```prisma
model Boss {
  // ...campos existentes...
  @@index([email])
}

model Salesman {
  // ...campos existentes...
  @@index([email])
  @@index([bossId])
}

model Client {
  // ...campos existentes...
  @@index([email])
  @@index([salesmanId])
}

model Activity {
  // ...campos existentes...
  @@index([clientId])
  @@index([salesmanId])
}

model Product {
  // ...campos existentes...
  @@index([bossId])
}

model Task {
  // ...campos existentes...
  @@index([salesmanId])
  @@index([clientId])
}

model SaleProduct {
  // ...campos existentes...
  @@index([activityId])
  @@index([productId])
}

model Feedback {
  // ...campos existentes...
  @@index([salesmanId])
}
```

Despues ejecutar: `npx prisma db push`

---

## FASE 3: UX / Frontend

### 3.1 Validacion de Formularios Mejorada

**Editar archivo:** `client/src/utils/validation.js`

Actualmente solo chequea campos vacios. Agregar validaciones reales:

```js
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "El email es requerido";
  if (!re.test(email)) return "El email no es valido";
  return null;
};

export const validatePassword = (password) => {
  if (!password) return "La contrasena es requerida";
  if (password.length < 6) return "La contrasena debe tener al menos 6 caracteres";
  return null;
};

export const validatePhone = (phone) => {
  if (!phone) return "El telefono es requerido";
  if (phone.length < 7) return "El telefono no es valido";
  return null;
};

export const validateRequired = (value, fieldName) => {
  if (!value || !value.toString().trim()) return `${fieldName} es requerido`;
  return null;
};
```

Aplicar estas validaciones en los componentes de formulario antes de hacer dispatch.

---

### 3.2 Dialogo de Confirmacion para Acciones Destructivas

En cualquier componente que tenga un boton de eliminar (tasks, clients, etc.), agregar confirmacion con sweetalert antes de ejecutar:

```js
import swal from "sweetalert";

const handleDelete = async (id) => {
  const confirm = await swal({
    title: "Estas seguro?",
    text: "Esta accion no se puede deshacer",
    icon: "warning",
    buttons: ["Cancelar", "Eliminar"],
    dangerMode: true,
  });
  if (confirm) {
    dispatch(deleteItem(id));
  }
};
```

Buscar archivos que tengan funciones de delete y agregar esta confirmacion:
- Componentes que manejan Tasks
- Componentes que manejan Clients
- Componentes que manejan Products

---

### 3.3 Code Splitting con React.lazy

**Editar archivo:** `client/src/App.js`

Reemplazar imports directos por lazy imports:

```js
import React, { Suspense, lazy } from "react";

// ANTES
import Login from "./views/auth/Login";
import Dashboard from "./views/dashboard/Dashboard";

// DESPUES
const Login = lazy(() => import("./views/auth/Login"));
const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
// ...hacer lo mismo con todas las vistas

// Envolver las rutas en Suspense
<Suspense fallback={<div className="flex justify-center items-center h-screen">Cargando...</div>}>
  <Routes>
    {/* ...rutas... */}
  </Routes>
</Suspense>
```

---

## FASE 4: DevOps

### 4.1 Health Check Endpoint

**Editar archivo:** `backend/src/routes/index.js`

Agregar al inicio (antes de las rutas protegidas):

```js
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});
```

---

### 4.2 Eliminar console.log de Produccion

Buscar y eliminar TODOS los `console.log` en `backend/src/controllers/` y `backend/src/handlers/`.

Archivos con console.log conocidos:
- `backend/src/controllers/auth/findUser.js`
- `backend/src/controllers/auth/validacion.js`
- `backend/src/controllers/Bosses/CreateBoss.js`
- `backend/src/controllers/clients/getAllClients.js`
- `backend/src/controllers/activities/createActivities.js`
- `backend/src/controllers/activities/updateActivities.js`
- `backend/src/controllers/sale_products/createSaleProducts.js`
- `backend/src/controllers/email/notifyActivityClient.js`
- `backend/src/controllers/email/notifyFeddbackClient.js`
- `backend/src/controllers/email/email.js`
- Practicamente todos los handlers en `backend/src/handlers/`

---

### 4.3 Logging Estructurado (Opcional)

Instalar y configurar Winston para reemplazar console.log:

```bash
cd backend && npm install winston
```

**Crear archivo:** `backend/src/logger.js`

```js
const winston = require("winston");

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

module.exports = logger;
```

Luego reemplazar `console.log` por `logger.info()` y `console.error` por `logger.error()`.

---

### 4.4 Script de Start Seguro

**Editar archivo:** `backend/package.json`

El script actual es peligroso:

```json
"start": "npx prisma db push --accept-data-loss && node index.js"
```

`--accept-data-loss` puede borrar datos en produccion. Cambiar a:

```json
"start": "npx prisma db push && node index.js"
```

O mejor aun, usar migraciones:

```json
"start": "npx prisma migrate deploy && node index.js"
```

---

## FASE 5: Features Nuevas

### 5.1 Pipeline Visual de Ventas

Implementar un tablero Kanban con columnas para cada estado de negociacion (Pendiente, En Proceso, Concretado). Usar una libreria como `@hello-pangea/dnd` (fork mantenido de react-beautiful-dnd).

```bash
cd client && npm install @hello-pangea/dnd
```

Crear vista en `client/src/views/dashboard/Pipeline.jsx` que:
- Consulte todas las actividades del vendedor
- Las agrupe por estado
- Permita arrastrar entre columnas (lo cual actualiza el estado via PUT /activity)

---

### 5.2 Exportar Datos a CSV

**Backend:** Crear endpoint `GET /api/export/clients?format=csv`

```js
// backend/src/controllers/export/exportClients.js
const prisma = require("../../prisma.js");

module.exports = async (req, res) => {
  const clients = await prisma.client.findMany({
    where: { salesmanId: req.query.salesmanId },
  });

  const header = "Nombre,Email,Telefono,VIP\n";
  const rows = clients.map(c => `${c.name},${c.email},${c.phone},${c.vip}`).join("\n");

  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=clientes.csv");
  res.send(header + rows);
};
```

**Frontend:** Agregar boton de export en la lista de clientes que haga `window.open(url)`.

---

### 5.3 Notificaciones In-App

**Backend:** Crear modelo Notification en schema.prisma:

```prisma
model Notification {
  id        String   @id @default(uuid())
  message   String
  read      Boolean  @default(false)
  type      String   // "task", "activity", "sale"
  createdAt DateTime @default(now())
  userId    String
}
```

Crear endpoints:
- `GET /api/notifications?userId=xxx` — obtener notificaciones
- `PUT /api/notifications/:id/read` — marcar como leida

**Frontend:** Crear componente de campana con badge de notificaciones no leidas en el header.

---

### 5.4 Busqueda Server-Side

**Backend:** Agregar query param `search` a los endpoints de listas:

```js
// En getAllClients.js
const { search } = req.query;
const where = {
  salesmanId,
  ...(search && {
    OR: [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { phone: { contains: search } },
    ],
  }),
};

const clients = await prisma.client.findMany({ where });
```

Aplicar el mismo patron a productos, vendedores, actividades y tareas.

**Frontend:** Agregar input de busqueda con debounce (300ms) que pase el parametro `search` al endpoint.

---

## Orden de Implementacion Recomendado

1. **Fase 1.1** — Auth middleware (lo mas critico)
2. **Fase 1.3** — Fix bcrypt en validacion.js
3. **Fase 1.4** — Fix JWT en ProtectedRoutes
4. **Fase 1.5 + 1.6** — Mover credentials a .env
5. **Fase 1.7** — CORS configurado
6. **Fase 1.2** — Roles
7. **Fase 4.1** — Health check
8. **Fase 4.2** — Limpiar console.logs
9. **Fase 4.4** — Script de start seguro
10. **Fase 2.4** — Indices DB
11. **Fase 2.3** — Emails async
12. **Fase 2.1** — Paginacion
13. **Fase 2.2** — Fix N+1
14. **Fase 3.1** — Validacion formularios
15. **Fase 3.2** — Confirmacion delete
16. **Fase 3.3** — Code splitting
17. **Fase 5.x** — Features nuevas
