const prisma = require("../../prisma.js");
const { sendMail } = require("../email/notifyActivityClient.js");
const { sendMailFeedback } = require("../email/notifyFeddbackClient.js");
const getAllSalesman = require("../salesman/getAllSalesman.js");
const getClientById = require("../clients/getClientById.js");
const { mapMethod, mapState, unmapMethod, unmapState } = require("../utils/enumMaps.js");

module.exports = async (data) => {
  //data={method,state,from,to,message,subject,attached,clientId,salesmanId,}
  if (data.salesmanId != null && data.clientId != null) {
    if (data.method) data.method = mapMethod(data.method);
    if (data.state) data.state = mapState(data.state);
    const newActivity = await prisma.activity.create({ data });

    const vendedor = await getAllSalesman({ id: data.salesmanId });

    const cliente = await getClientById(newActivity.clientId);
    if (data.state === "Concretado") {
      sendMailFeedback(vendedor, cliente, newActivity);
    }

    sendMail(vendedor, cliente, newActivity, "creacion");
    return { ...newActivity, method: unmapMethod(newActivity.method), state: unmapState(newActivity.state) };
  } else {
    throw new Error("salesmanId or clientId is undefined");
  }
};
