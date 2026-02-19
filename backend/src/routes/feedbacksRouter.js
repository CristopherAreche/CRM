const { Router } = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
  getFeedbacks,
  postFeedback
} = require("../handlers/feedbackHandler");

const feedbacksRouter = Router();

const feedbackPostValidation = [
  body("salesmanId").isUUID().withMessage("salesmanId must be a valid UUID"),
  body("score").optional().isInt({ min: 1, max: 5 }).withMessage("score must be an integer between 1 and 5"),
  validate,
];

feedbacksRouter.get("/feedback", getFeedbacks);
feedbacksRouter.post("/feedback", feedbackPostValidation, postFeedback);

module.exports = feedbacksRouter;
