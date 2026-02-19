const prisma = require("../../prisma.js");
const getProductById = require("./getProductById.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

const updateProduct = async (data, path) => {
  const dataAct = { ...data };
  const id = dataAct.id;
  delete dataAct.id;

  if (path) {
    const img = fs.readFileSync(path).buffer;
    const image = await uploadFile(img, "products");
    dataAct.image = image;
  }

  const resultado = await prisma.product.update({
    where: { id },
    data: dataAct,
  });

  if (resultado) {
    const product = await getProductById(id);
    return product;
  } else throw new Error("Failed to update, missing information");
};

module.exports = updateProduct;
