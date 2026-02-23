const { Router } = require("express");
const { getDashboard_boss } = require("../handlers/dashboard_bossHandler");
const authorize = require("../middlewares/roleMiddleware.js");

const dashboard_bossRouter = Router();

dashboard_bossRouter.get("/dashboard_boss", authorize("admin"), getDashboard_boss);

module.exports = dashboard_bossRouter;
