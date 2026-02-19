const prisma = require("../../prisma.js");
const getClientById = require("./getClientById.js");

module.exports = async (data) => {
  const dataAct = { ...data };
  const id = dataAct.id;
  delete dataAct.id;
  const resultado = await prisma.client.update({
    where: { id },
    data: dataAct,
  });

  if (resultado) {
    return await getClientById(id);
  } else throw new Error("Failed to update, missing information");
};
