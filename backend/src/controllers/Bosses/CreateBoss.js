const prisma = require("../../prisma.js");
const { sendMail } = require("../email/email.js");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

const createBoss = async (data, path) => {
  if (data.password === null) data.password = "12345";
  let createData = {
    ...data,
    password: bcrypt.hashSync(data.password, 10),
  };
  if (path) {
    const img = fs.readFileSync(path).buffer;
    const logo = await uploadFile(img, "boss");
    createData.logo = logo;
  }
  const newBoss = await prisma.boss.create({ data: createData });
  sendMail(newBoss);
  return {
    ...newBoss,
    role: "admin",
  };
};

module.exports = createBoss;
