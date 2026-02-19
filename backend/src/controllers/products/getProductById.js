const prisma = require("../../prisma.js");

module.exports = async (id) => {
  if (!id) throw new Error("(id) Product required");

  const product = await prisma.product.findUnique({ where: { id } });
  return product;
};
