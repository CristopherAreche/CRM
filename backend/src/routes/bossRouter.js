const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const { getBoss, postBoss, putBoss } = require("../handlers/bossHandler");
const validateBoss = require("../middlewares/validateBoss.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const authorize = require("../middlewares/roleMiddleware.js");

const bossRouter = Router();

const bossPostValidation = [
  body("formLogin").isString().withMessage("formLogin must be a JSON string"),
  validate,
];

const bossPutValidation = [
  body("formLogin").isString().withMessage("formLogin must be a JSON string"),
  validate,
];

bossRouter.get("/boss", authMiddleware, authorize("admin", "seller"), getBoss);
bossRouter.post("/boss", bossPostValidation, validateBoss, postBoss);
bossRouter.put("/boss", authMiddleware, authorize("admin", "seller"), bossPutValidation, putBoss);

module.exports = bossRouter;
