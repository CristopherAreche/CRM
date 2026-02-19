const prisma = require("../../prisma.js");

module.exports = async ({ id }) => {
  const sales = await prisma.saleProduct.findMany({
    where: {
      activity: {
        clientId: id,
      },
    },
    select: {
      quantity_sale: true,
      price_sale: true,
      product: true,
    },
  });

  let totalPurchased = 0;
  let categories = {};
  sales.forEach((s) => {
    const { quantity_sale, price_sale, product } = s;
    const { category } = product;
    if (categories[category]) categories[category] += 1;
    else categories[category] = 1;

    totalPurchased += quantity_sale * Number(price_sale);
  });

  const values = Object.values(categories).sort().slice(0, 1);
  const arrayCategories = Object.keys(categories).filter((c) =>
    values.includes(categories[c])
  );
  categories = [...arrayCategories];

  return { totalPurchased, categories };
};
