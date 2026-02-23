const prisma = require("../../prisma.js");
const { sanitizeBoss } = require("../utils/sanitizeUser.js");

const getAllBosses = async () => {
  const allBosses = await prisma.boss.findMany();
  const jefes = allBosses.map((b) => sanitizeBoss(b));
  return jefes;
};

module.exports = getAllBosses;
