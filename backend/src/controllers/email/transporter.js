const nodemailer = require("nodemailer");

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const resolveSender = () => {
  return process.env.EMAIL_FROM || process.env.EMAIL_USER || "no-reply@crm.local";
};

module.exports = {
  createTransporter,
  resolveSender,
};
