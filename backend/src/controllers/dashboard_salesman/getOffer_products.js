const prisma = require("../../prisma.js");

module.exports = async (id) => {
  const salesman = await prisma.salesman.findUnique({
    where: { id },
    include: {
      boss: {
        include: {
          products: {
            where: {
              discount: {
                gt: 0,
              },
            },
          },
        },
      },
    },
  });

  const products = salesman.boss.products;
  const offer_products = products.map((p) => {
    const { name, quantity, discount } = p;
    return { name, quantity, discount: Number(discount) };
  });

  return offer_products;
};
