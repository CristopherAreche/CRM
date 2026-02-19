const prisma = require("../../prisma.js");
const statusNegotiation = require("./statusNegotiation.js");
const ctotalPurchased = require("./totalPurchased.js");

module.exports = async ({ salesmanId, bossId }) => {
  if (!salesmanId && !bossId) throw new Error("salesmanId or bossId required");

  let allClients;

  if (salesmanId) {
    allClients = await prisma.client.findMany({ where: { salesmanId } });
  } else if (bossId) {
    allClients = await prisma.client.findMany({
      where: {
        salesman: {
          bossId,
        },
      },
    });
  }

  console.log("allClients", allClients);
  const resultadoFinal = await Promise.all(
    allClients.map(async (c) => {
      let estado = await statusNegotiation({ id: c.id });
      if (estado == null) {
        estado = { state: "Pendiente" };
      }
      const { totalPurchased, categories } = await ctotalPurchased({
        id: c.id,
      });
      return {
        ...c,
        status: estado.state,
        totalPurchased,
        categories,
      };
    })
  );
  console.log(resultadoFinal);
  if (!resultadoFinal) {
    return [];
  }

  return resultadoFinal;
};
