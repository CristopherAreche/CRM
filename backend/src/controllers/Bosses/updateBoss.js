const prisma = require("../../prisma.js");
const getBossById = require("./getBossById.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

const updateBoss = async (data, path) => {
  const dataAct = { ...data };
  const id = dataAct.id;
  delete dataAct.id;

  if (path) {
    const img = fs.readFileSync(path).buffer;
    const logo = await uploadFile(img, "boss");
    dataAct.logo = logo;
  }

  const resultado = await prisma.boss.update({
    where: { id },
    data: dataAct,
  });

  if (resultado) {
    const boss = await getBossById(id);
    return {
      ...boss,
      role: "admin",
    };
  } else throw new Error("Failed to update, missing information");
};

module.exports = updateBoss;
