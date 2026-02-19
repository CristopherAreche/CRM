const prisma = require("../../prisma.js");
const { sendMail } = require("../email/notifyBuyClient.js");

module.exports = async (data) => {
  //data={ quantity_sale, price_sale, productId, activityId }
  const product = await prisma.product.findUnique({
    where: { id: data.productId },
  });
  if (product.quantity < data.quantity_sale)
    throw new Error(
      `Se excede de la cantidad disponible, (${product.quantity}), usted quiere vender (${data.quantity_sale})`
    );
  if (data["activityId"] && data["productId"]) {
    //Si el descuento de Product es mayor que cero, entonces al producto vendido le aplicamos el descuento
    if (Number(product.discount) > 0) {
      data["price_sale"] =
        data.price_sale - data.price_sale * (Number(product.discount) / 100);
    }

    const newSaleProduct = await prisma.saleProduct.create({ data });

    let act = await prisma.activity.findUnique({
      where: { id: data.activityId },
    });
    let client = await prisma.client.findUnique({
      where: { id: act.clientId },
    });
    let salesman = await prisma.salesman.findUnique({
      where: { id: act.salesmanId },
    });
    //Debe recibir (client, salesman, product, sale_product)

    sendMail(client, salesman, product, data);

    //Product ======> (id, name, quantity,cost_price, sale_price, discount)
    await prisma.product.update({
      where: { id: data.productId },
      data: {
        quantity: { decrement: Number(data.quantity_sale) },
      },
    });

    return newSaleProduct;
  } else {
    throw new Error("activityId and productId required");
  }
};
