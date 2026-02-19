const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
  getSalemans,
  postSaleman,
  putSaleman,
} = require("../handlers/salemansHandler");

const salemansRouter = Router();

const salesmanPostValidation = [
  body("sellerData").isString().withMessage("sellerData must be a JSON string"),
  validate,
];

const salesmanPutValidation = [
  body("sellerData").isString().withMessage("sellerData must be a JSON string"),
  validate,
];

salemansRouter.get("/salesman", getSalemans);
salemansRouter.post("/salesman", salesmanPostValidation, postSaleman);
salemansRouter.put("/salesman", salesmanPutValidation, putSaleman);

module.exports = salemansRouter;
