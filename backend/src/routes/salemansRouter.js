const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
  getSalemans,
  postSaleman,
  putSaleman,
} = require("../handlers/salemansHandler");
const authorize = require("../middlewares/roleMiddleware.js");

const salemansRouter = Router();

const salesmanPostValidation = [
  body("sellerData").isString().withMessage("sellerData must be a JSON string"),
  validate,
];

const salesmanPutValidation = [
  body("sellerData").isString().withMessage("sellerData must be a JSON string"),
  validate,
];

salemansRouter.get("/salesman", authorize("admin", "seller"), getSalemans);
salemansRouter.post("/salesman", authorize("admin"), salesmanPostValidation, postSaleman);
salemansRouter.put("/salesman", authorize("admin", "seller"), salesmanPutValidation, putSaleman);

module.exports = salemansRouter;
