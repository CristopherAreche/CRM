const prisma = require("../../prisma.js");

module.exports = async (id) => {
  const boss = await prisma.boss.findUnique({
    where: { id },
    include: {
      products: true,
    },
  });

  if (boss !== null) {
    const products = boss.products;
    let lowest_stock = products.map((p) => {
      const { name, quantity, discount } = p;
      return { name, quantity, discount: Number(discount) };
    });

    lowest_stock.sort((x, y) => x.quantity - y.quantity);
    lowest_stock = lowest_stock.slice(0, 10);

    return lowest_stock;
  } else {
    return [];
  }
};
