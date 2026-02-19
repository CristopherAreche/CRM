const prisma = require("../../prisma.js");
const customSalesman = require("./customSalesman.js");

const getAllSalesman = async (data) => {
  console.log(data);
  const { id, name, address, email, phone, enable, bossId } = data;
  if (id) {
    const salesman = await prisma.salesman.findUnique({
      where: { id },
      include: {
        feedbacks: {
          orderBy: { createdAt: "desc" },
          take: 50,
        },
      },
    });
    return await customSalesman(salesman);
  }

  if (name || address || email || phone || enable) {
    const variable = name || address || email || phone || enable;
    const [propiedad] = Object.keys(data);
    const allSalesman = await prisma.salesman.findMany({
      where: {
        bossId,
        [propiedad]: variable,
      },
      include: {
        feedbacks: {
          orderBy: { createdAt: "desc" },
          take: 50,
        },
      },
    });

    const result = await Promise.all(
      allSalesman.map(async (salesman) => await customSalesman(salesman))
    );
    return result[0];
  }

  const allSalesman = await prisma.salesman.findMany({
    where: {
      bossId,
    },
    include: {
      feedbacks: {
        orderBy: { createdAt: "desc" },
        take: 50,
      },
    },
  });
  console.log("este es conbsole.log() en linea 56 getallSalesman", allSalesman);
  const result = await Promise.all(
    allSalesman.map(async (salesman) => await customSalesman(salesman))
  );
  return result;
};

module.exports = getAllSalesman;
