const prisma = require("../../prisma.js");

module.exports = async ({ id, activityId }) => {
  if (!id && !activityId)
    throw new Error("(id) sale_product or activityId required");

  if (activityId) {
    const allSaleProducts = await prisma.saleProduct.findMany({
      where: { activityId },
    });
    return allSaleProducts;
  }

  if (id) {
    const sale_product = await prisma.saleProduct.findUnique({ where: { id } });
    return sale_product;
  }
};
