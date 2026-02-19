const prisma = require("../../prisma.js");

module.exports = async (id) => {
  const task = await prisma.task.findMany({
    where: {
      salesmanId: id,
    },
  });
  return task;
};
