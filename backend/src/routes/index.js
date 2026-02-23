const { Router } = require("express");
// Importar todos los routers;
const loginRouter = require("./loginRouter.js");
const bossRouter = require("./bossRouter.js");
const clientsRouter = require("./clientsRouter.js");
const activityRouter = require("./activityRouter.js");
const productsRouter = require("./productsRouter.js");
const salemans = require("./salemansRouter.js");
const feedbacks = require("./feedbacksRouter.js");
const sale_productsRouter = require("./sale_productsRouter.js");
const taskRouter = require("./TaskRouter.js");
const categoryRouter = require("./categoryRouter.js");
const dashboard_salesmanRouter = require("./dashboard_salesmanRouter.js");
const dashboard_bossRouter = require("./dashboard_bossRouter.js");
const paymentRouter = require("./paymentRouter.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Public routes
router.use("/", loginRouter);
router.use("/", bossRouter);
router.use("/", feedbacks);
router.use("/", paymentRouter);

// Protected routes
router.use("/", authMiddleware, salemans);
router.use("/", authMiddleware, clientsRouter);
router.use("/", authMiddleware, activityRouter);
router.use("/", authMiddleware, productsRouter);
router.use("/", authMiddleware, sale_productsRouter);
router.use("/", authMiddleware, taskRouter);
router.use("/", authMiddleware, categoryRouter);
router.use("/", authMiddleware, dashboard_salesmanRouter);
router.use("/", authMiddleware, dashboard_bossRouter);

module.exports = router;
