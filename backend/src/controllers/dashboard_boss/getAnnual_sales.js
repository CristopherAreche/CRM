const prisma = require("../../prisma.js");

module.exports = async (id) => {
  const tiempoTranscurrido = Date.now();
  const endDate = new Date(tiempoTranscurrido);
  const startDate = new Date(tiempoTranscurrido - 31536000000);
  console.log("ID EN LINEA 8 GETANUAL_SALES", id);

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
  console.log("ESTO ES SALES EN LINEA 34 GET ANUAL_SALES", sales);

  let annual_sales = {};
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
  sales.forEach((sale) => {
    const { quantity_sale, price_sale, activity } = sale;
    const m = activity.createdAt.getMonth();
    const year = activity.createdAt.getFullYear();
    const date = `${month[m]}/${year}`;
    if (annual_sales[date]) {
      annual_sales[date] += quantity_sale * Number(price_sale);
    } else {
      annual_sales[date] = quantity_sale * Number(price_sale);
    }
  });

  annual_sales = Object.entries(annual_sales).map(([month, value]) => {
    return { month, value };
  });

  return annual_sales;
};
