const prisma = require("../../prisma.js");
const statusNegotiation = require("./statusNegotiation.js");
const ctotalPurchased = require("./totalPurchased.js");

module.exports = async (id) => {
  const client = await prisma.client.findUnique({ where: { id } });
  if (client === null) return client;

  let estado = await statusNegotiation({ id });
  const { totalPurchased, categories } = await ctotalPurchased({ id });

  if (estado == null) {
    estado = { state: "Pendiente" };
  }
  const resultado = {
    ...client,
    status: estado.state,
    totalPurchased,
    categories,
  };
  return resultado;
};
