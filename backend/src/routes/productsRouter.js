const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
  getProducts,
  postProduct,
  putProduct,
} = require("../handlers/productsHandler");

const productsRouter = Router();

const productPostValidation = [
  body("productData").isString().withMessage("productData must be a JSON string"),
  validate,
];

const productPutValidation = [
  body("productData").isString().withMessage("productData must be a JSON string"),
  validate,
];

productsRouter.get("/product", getProducts);
productsRouter.post("/product", productPostValidation, postProduct);
productsRouter.put("/product", productPutValidation, putProduct);

module.exports = productsRouter;
