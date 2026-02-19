const prisma = require("../../prisma.js");
const getAllSalesman = require("../salesman/getAllSalesman.js");

module.exports = async (id) => {
  const tiempoTranscurrido = Date.now();
  const endDate = new Date(tiempoTranscurrido);
  const startDate = new Date(tiempoTranscurrido - 2592000000);

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
          salesman: true,
        },
      },
    },
  });

  const monthly_sales = {};

  sales.forEach((sale) => {
    const { quantity_sale, price_sale, activity } = sale;
    const salesman = activity.salesman;
    if (monthly_sales[salesman.id]) {
      monthly_sales[salesman.id] += quantity_sale * Number(price_sale);
    } else {
      monthly_sales[salesman.id] = quantity_sale * Number(price_sale);
    }
  });

  if (sales.length) {
    let thebest = Object.keys(monthly_sales)[0];
    let max = Object.values(monthly_sales)[0];
    Object.keys(monthly_sales).forEach((salesman) => {
      if (monthly_sales[salesman] > max) {
        max = monthly_sales[salesman];
        thebest = salesman;
      }
    });
    return await getAllSalesman({ id: thebest });
  }
  return {};
};
