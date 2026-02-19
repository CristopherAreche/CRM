const prisma = require("../../prisma.js");

const getAllBosses = async () => {
  const allBosses = await prisma.boss.findMany();
  const jefes = allBosses.map((b) => {
    return { ...b, role: "admin" };
  });
  return jefes;
};

module.exports = getAllBosses;
