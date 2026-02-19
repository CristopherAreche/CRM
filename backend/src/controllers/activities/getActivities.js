const prisma = require("../../prisma.js");
const { unmapMethod, unmapState } = require("../utils/enumMaps.js");

const unmapActivity = (act) => {
  if (!act) return act;
  return { ...act, method: unmapMethod(act.method), state: unmapState(act.state) };
};

module.exports = async ({ id, clientId, salesmanId }) => {
  if (!id && !clientId && !salesmanId)
    throw new Error("id activity's, clientId or salesmanId required");

  if (clientId) {
    const activity = await prisma.activity.findMany({ where: { clientId } });
    return activity.map(unmapActivity);
  }

  if (id) {
    const activity = await prisma.activity.findUnique({ where: { id } });
    return unmapActivity(activity);
  }

  if (salesmanId) {
    const activity = await prisma.activity.findMany({ where: { salesmanId } });
    return activity.map(unmapActivity);
  }
};
