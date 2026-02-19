# CRM - Customer Relationship Management

A full-stack CRM application for managing clients, salesmen, products, activities, and sales tracking.

## Tech Stack

- **Backend:** Express.js (Node.js) on port 5444
- **Frontend:** React on port 3000
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma 7

## Getting Started

### Prerequisites

- Node.js >= 18.18.0
- npm >= 6.14.6

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm start
```

### Environment Variables

**`backend/.env`**
```
DATABASE_URL="postgresql://<user>:<password>@<host>:6543/postgres?pgbouncer=true&sslmode=no-verify"
DIRECT_URL="postgresql://<user>:<password>@<host>:5432/postgres?sslmode=no-verify"
PORT=5444
```

**`client/.env`**
```
REACT_APP_URL=http://localhost:5444/api
```

### Seeding the Database

```bash
cd backend
npx prisma db push
npx prisma db seed
```

## Database Schema

| Model | Table | Description |
|---|---|---|
| Boss | `bosses` | Company owners/admins |
| Salesman | `salesmen` | Sales representatives |
| Client | `clients` | Customers managed by salesmen |
| Product | `products` | Items available for sale |
| Activity | `activities` | Interactions between salesmen and clients |
| SaleProduct | `sale_products` | Products sold in completed activities |
| Feedback | `feedbacks` | Client feedback scores for salesmen |
| Task | `tasks` | Tasks assigned to salesmen |

## Login Credentials

All accounts use password: **`12345`**

### Bosses

| Name | Email |
|---|---|
| Leanne Graham | `Sincere@april.biz` |
| Robert Pickman | `robpick@gmail.com` |
| Raquel Montgomery | `raquelmont@gmail.com` |

### Salesmen

| Name | Email |
|---|---|
| Clementine Bauch | `Sincere@april.biz` |
| Patricia Lebsack | `patyleb@gmail.com` |
| Chelsey Dietrich | `chel@gmail.com` |
| Dennis Schulist | `dennischule@april.biz` |
| Kurtis Weissnat | `kurtis654@april.biz` |

## API Endpoints

Base URL: `http://localhost:5444/api`

| Method | Route | Description |
|---|---|---|
| POST | `/login` | Authenticate user |
| GET/POST/PUT | `/boss` | Boss CRUD |
| GET/POST/PUT | `/salesman` | Salesman CRUD |
| GET/POST/PUT | `/client` | Client CRUD |
| GET/POST/PUT | `/product` | Product CRUD |
| GET/POST/PUT | `/activity` | Activity CRUD |
| GET/POST | `/sale_product` | Sale products |
| GET/POST/PUT/DELETE | `/task` | Task CRUD |
| GET/POST | `/feedback` | Feedback |
| GET | `/category` | Product categories |
| GET | `/dashboard_boss` | Boss dashboard data |
| GET | `/dashboard_salesman` | Salesman dashboard data |

## Useful Commands

```bash
npm run dev          # Start backend with nodemon
npm run seed         # Seed the database
npm run db:studio    # Open Prisma Studio (visual DB browser)
```
