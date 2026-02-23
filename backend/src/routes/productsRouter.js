const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
  getProducts,
  postProduct,
  putProduct,
} = require("../handlers/productsHandler");
const authorize = require("../middlewares/roleMiddleware.js");

const productsRouter = Router();

const productPostValidation = [
  body("productData").isString().withMessage("productData must be a JSON string"),
  validate,
];

const productPutValidation = [
  body("productData").isString().withMessage("productData must be a JSON string"),
  validate,
];

productsRouter.get("/product", authorize("admin", "seller"), getProducts);
productsRouter.post("/product", authorize("admin"), productPostValidation, postProduct);
productsRouter.put("/product", authorize("admin"), productPutValidation, putProduct);

module.exports = productsRouter;
