const { Router } = require("express");
const { body } = require("express-validator");
const rateLimit = require("express-rate-limit");
const validate = require("../middlewares/validate.js");

const { loginUser, validateUser } = require("../handlers/authHandler.js");

const loginRouter = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

const loginValidation = [
  body("email").isEmail().withMessage("Must be a valid email"),
  body("password").optional().isString().isLength({ min: 1 }).withMessage("Password is required"),
  validate,
];

//Rutas
loginRouter.post("/login", loginLimiter, loginValidation, loginUser);
loginRouter.post("/validation", validateUser);

module.exports = loginRouter;
