const prisma = require("../../prisma.js");
const { unmapState } = require("../utils/enumMaps.js");

module.exports = async ({ id }) => {
  let stateNegotiation = await prisma.activity.findFirst({
    where: {
      clientId: id,
    },
    orderBy: { createdAt: "desc" },
    select: { state: true },
  });

  if (stateNegotiation) {
    stateNegotiation = { ...stateNegotiation, state: unmapState(stateNegotiation.state) };
  }

  return stateNegotiation;
};
