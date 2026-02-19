const prisma = require("../../prisma.js");

module.exports = async (id) => {
  if (!id) throw new Error("(id) Boss required");

  const boss = await prisma.boss.findUnique({ where: { id } });
  return {
    ...boss,
    role: "admin",
  };
};
