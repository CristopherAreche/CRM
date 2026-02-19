const prisma = require("../../prisma.js");

module.exports = async (data) => {
  //data={ name, email, phone, vip, enable, salesmanId }
  if (data.salesmanId != null) {
    const nC = await prisma.client.create({ data });
    return nC;
  } else {
    throw new Error("salesmanId is undefined");
  }
};
