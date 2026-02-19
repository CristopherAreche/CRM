const prisma = require("../../prisma.js");
const getSaleProducts = require("./getSaleProducts.js");

module.exports = async (data) => {
  const dataAct = { ...data };
  const id = dataAct.id;
  delete dataAct.id;
  const resultado = await prisma.saleProduct.update({
    where: { id },
    data: dataAct,
  });

  if (resultado) {
    const sale_product = await getSaleProducts({ id });
    return sale_product;
  } else throw new Error("Failed to update, missing information");
};
