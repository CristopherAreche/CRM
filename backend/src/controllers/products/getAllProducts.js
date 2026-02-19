const prisma = require("../../prisma.js");

module.exports = async ({ bossId }) => {
  if (!bossId) throw new Error("bossId required");

  const products = await prisma.product.findMany({ where: { bossId } });

  const allProducts = products.map((b) => {
    const product = { ...b };
    let discount = (Number(product.sale_price) * Number(product.discount)) / 100;
    product.withDiscount = Number(product.sale_price) - discount;
    return product;
  });
  return allProducts;
};
