const prisma = require("../../prisma.js");

module.exports = async (id) => {
  const salesman = await prisma.salesman.findUnique({
    where: { id },
    include: {
      boss: {
        include: {
          products: true,
        },
      },
    },
  });

  const products = salesman.boss.products;
  let highest_stock = products.map((p) => {
    const { name, quantity, discount } = p;
    return { name, quantity, discount: Number(discount) };
  });

  highest_stock.sort((y, x) => x.quantity - y.quantity);
  highest_stock = highest_stock.slice(0, 10);

  return highest_stock;
};
