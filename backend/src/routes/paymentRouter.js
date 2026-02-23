const { Router } = require("express");
const { createOrder, captureOrder, cancelOrder } = require("../handlers/paymentHandler.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const authorize = require("../middlewares/roleMiddleware.js");

const paymentRouter = Router();

paymentRouter.post("/create-order", authMiddleware, authorize("admin"), createOrder);
paymentRouter.get("/capture-order", captureOrder);
paymentRouter.get("/cancel-order", cancelOrder);

module.exports = paymentRouter;
