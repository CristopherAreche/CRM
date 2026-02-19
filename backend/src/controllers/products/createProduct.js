const prisma = require("../../prisma.js");
const fs = require("fs");
const uploadFile = require("../../firebase.js");

module.exports = async (data, path) => {
  if (data["bossId"] != null) {
    if (path) {
      const img = fs.readFileSync(path).buffer;
      const image = await uploadFile(img, "products");
      var newProduct = await prisma.product.create({ data: { ...data, image } });
    } else {
      var newProduct = await prisma.product.create({ data });
    }
    return newProduct;
  } else {
    throw new Error("bossId is undefined");
  }
};
