const { Router } = require("express");
const { getDashboard_salesman } = require("../handlers/dashboard_salesmanHandler");
const authorize = require("../middlewares/roleMiddleware.js");

const dashboard_salesmanRouter = Router();

dashboard_salesmanRouter.get("/dashboard_salesman", authorize("admin", "seller"), getDashboard_salesman);

module.exports = dashboard_salesmanRouter;
