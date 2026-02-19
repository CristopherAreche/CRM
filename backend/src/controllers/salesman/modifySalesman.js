const prisma = require("../../prisma.js");
const getAllSalesman = require("./getAllSalesman.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

module.exports = async (data, path) => {
  const dataAct = { ...data };
  const id = dataAct.id;
  delete dataAct.id;

  if (path) {
    const img = fs.readFileSync(path).buffer;
    const image = await uploadFile(img, "salesman");
    dataAct.image = image;
  }

  const resultado = await prisma.salesman.update({
    where: { id },
    data: dataAct,
  });

  if (resultado) {
    return await getAllSalesman({ id });
  } else throw new Error("Failed to update, missing information");
};
