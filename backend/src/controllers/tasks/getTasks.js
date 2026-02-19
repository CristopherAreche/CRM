const prisma = require("../../prisma.js");

module.exports = async ({ id, clientId, salesmanId }) => {
  if (!id && !clientId && !salesmanId)
    throw new Error("id task's, clientId or salesmanId required");

  if (clientId) {
    const task = await prisma.task.findMany({ where: { clientId } });
    return task;
  }

  if (id) {
    const task = await prisma.task.findUnique({ where: { id } });
    return task;
  }

  if (salesmanId) {
    const task = await prisma.task.findMany({ where: { salesmanId } });
    return task;
  }
};
