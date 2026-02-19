const prisma = require("../../prisma.js");

module.exports = async (id) => {
  const tiempoTranscurrido = Date.now();
  const endDate = new Date(tiempoTranscurrido);
  const startDate = new Date(tiempoTranscurrido - 2592000000);

  const sales = await prisma.saleProduct.findMany({
    where: {
      activity: {
        salesmanId: id,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    },
    select: {
      quantity_sale: true,
      price_sale: true,
      activity: {
        select: {
          createdAt: true,
        },
      },
    },
  });

  const monthly_sales = {};
  let total_monthly_sales = 0;
  sales.forEach((sale) => {
    const { quantity_sale, price_sale, activity } = sale;
    const date = activity.createdAt.toLocaleDateString();
    if (monthly_sales[date]) {
      monthly_sales[date] += quantity_sale * Number(price_sale);
    } else {
      monthly_sales[date] = quantity_sale * Number(price_sale);
    }
    total_monthly_sales += quantity_sale * Number(price_sale);
  });

  return { monthly_sales, total_monthly_sales };
};
