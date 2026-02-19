const { Router } = require("express");
const { body, query } = require("express-validator");
const validate = require("../middlewares/validate.js");
const {
    getTask,
    postTask,
    putTask,
    deleteTask
} = require("../handlers/taskHandler");

const taskRouter = Router();

const taskPostValidation = [
  body("clientId").isUUID().withMessage("clientId must be a valid UUID"),
  body("salesmanId").isUUID().withMessage("salesmanId must be a valid UUID"),
  body("description").optional().isString(),
  body("state").optional().isString(),
  body("due_date").optional().isString(),
  validate,
];

const taskPutValidation = [
  body("id").isUUID().withMessage("id must be a valid UUID"),
  body("state").optional().isString(),
  body("description").optional().isString(),
  validate,
];

const taskDeleteValidation = [
  query("id").isUUID().withMessage("id query param must be a valid UUID"),
  validate,
];

taskRouter.get("/task", getTask);
taskRouter.post("/task", taskPostValidation, postTask);
taskRouter.put("/task", taskPutValidation, putTask);
taskRouter.delete("/task", taskDeleteValidation, deleteTask);

module.exports = taskRouter;
