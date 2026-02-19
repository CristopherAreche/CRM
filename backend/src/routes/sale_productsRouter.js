const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
  getSaleProducts,
  postSaleProduct,
  putSaleProduct,
} = require("../handlers/sale_productsHandler");

const sale_productsRouter = Router();

const saleProductPostValidation = [
  body("activityId").isUUID().withMessage("activityId must be a valid UUID"),
  body("productId").isUUID().withMessage("productId must be a valid UUID"),
  body("quantity_sale").isInt({ min: 1 }).withMessage("quantity_sale must be a positive integer"),
  body("price_sale").isFloat({ min: 0 }).withMessage("price_sale must be a non-negative number"),
  validate,
];

const saleProductPutValidation = [
  body("id").isUUID().withMessage("id must be a valid UUID"),
  body("quantity_sale").optional().isInt({ min: 1 }).withMessage("quantity_sale must be a positive integer"),
  body("price_sale").optional().isFloat({ min: 0 }).withMessage("price_sale must be a non-negative number"),
  validate,
];

sale_productsRouter.get("/sale_product", getSaleProducts);
sale_productsRouter.post("/sale_product", saleProductPostValidation, postSaleProduct);
sale_productsRouter.put("/sale_product", saleProductPutValidation, putSaleProduct);

module.exports = sale_productsRouter;
