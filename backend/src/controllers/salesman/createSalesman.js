const prisma = require("../../prisma.js");
const getBossById = require("../Bosses/getBossById.js");
const bcrypt = require("bcryptjs");
const getAllSalesman = require("./getAllSalesman.js");
const { sendMail } = require("../email/notifyNewSalesman.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

const createSalesman = async (data, path) => {
  const { password, bossId } = data;
  if (password === null) password = "12345";
  if (bossId != null) {
    let createData = {
      ...data,
      password: bcrypt.hashSync(password, 10),
    };
    if (path) {
      const img = fs.readFileSync(path).buffer;
      const image = await uploadFile(img, "salesman");
      createData.image = image;
    }
    const salesman = await prisma.salesman.create({ data: createData });

    const boss = await getBossById(bossId);

    sendMail(salesman, boss);

    return getAllSalesman({ id: salesman.id });
  } else {
    throw new Error("bossId is undefined");
  }
};
module.exports = createSalesman;
