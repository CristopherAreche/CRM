const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
  getClients,
  postClient,
  putClient,
} = require("../handlers/clientsHandler");

const clientsRouter = Router();

const clientPostValidation = [
  body("salesmanId").isUUID().withMessage("salesmanId must be a valid UUID"),
  body("email").isEmail().withMessage("Must be a valid email"),
  body("name").optional().isString().trim().notEmpty().withMessage("Name must be a non-empty string"),
  body("phone").optional().isString(),
  validate,
];

const clientPutValidation = [
  body("id").isUUID().withMessage("id must be a valid UUID"),
  body("email").optional().isEmail().withMessage("Must be a valid email"),
  body("name").optional().isString().trim(),
  validate,
];

clientsRouter.get("/client", getClients);
clientsRouter.post("/client", clientPostValidation, postClient);
clientsRouter.put("/client", clientPutValidation, putClient);

module.exports = clientsRouter;
