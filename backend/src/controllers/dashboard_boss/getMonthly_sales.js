const prisma = require("../../prisma.js");

module.exports = async (id) => {
  const tiempoTranscurrido = Date.now();
  const endDate = new Date(tiempoTranscurrido);
  const startDate = new Date(tiempoTranscurrido - 2629440000);

  const sales = await prisma.saleProduct.findMany({
    where: {
      activity: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
        salesman: {
          bossId: id,
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

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthly_sales = {};

  sales.forEach((sale) => {
    const { quantity_sale, price_sale, activity } = sale;
    const numberMonth = activity.createdAt.getMonth();
    const nameMonth = month[numberMonth];
    const date = activity.createdAt.toLocaleDateString();
    if (monthly_sales[nameMonth]) {
      monthly_sales[nameMonth][date] += quantity_sale * Number(price_sale);
    } else {
      monthly_sales[nameMonth] = { [date]: quantity_sale * Number(price_sale) };
    }
  });

  return monthly_sales;
};
