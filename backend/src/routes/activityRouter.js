const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
  getActivity,
  postActivity,
  putActivity,
} = require("../handlers/activityHandler");

const activityRouter = Router();

const activityPostValidation = [
  body("clientId").isUUID().withMessage("clientId must be a valid UUID"),
  body("salesmanId").isUUID().withMessage("salesmanId must be a valid UUID"),
  body("method").isString().trim().notEmpty().withMessage("method is required"),
  body("state").isString().trim().notEmpty().withMessage("state is required"),
  body("message").optional().isString(),
  body("subject").optional().isString(),
  validate,
];

const activityPutValidation = [
  body("id").isUUID().withMessage("id must be a valid UUID"),
  body("salesmanId").optional().isUUID().withMessage("salesmanId must be a valid UUID"),
  body("method").optional().isString(),
  body("state").optional().isString(),
  validate,
];

activityRouter.get("/activity", getActivity);
activityRouter.post("/activity", activityPostValidation, postActivity);
activityRouter.put("/activity", activityPutValidation, putActivity);

module.exports = activityRouter;
