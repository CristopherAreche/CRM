const prisma = require("../../prisma.js");
const { sanitizeBoss } = require("../utils/sanitizeUser.js");

module.exports = async (id) => {
  if (!id) throw new Error("(id) Boss required");

  const boss = await prisma.boss.findUnique({ where: { id } });
  return sanitizeBoss(boss);
};
