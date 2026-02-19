const prisma = require("../../prisma.js");
const getActivities = require("./getActivities.js");
const getAllSalesman = require("../salesman/getAllSalesman.js");
const getClientById = require("../clients/getClientById.js");
const { sendMail } = require("../email/notifyActivityClient.js");
const { mapMethod, mapState } = require("../utils/enumMaps.js");

module.exports = async (data) => {
  //data={id,method,state,from,to,message,subject,attached,saleman_id,***sale_id}
  const dataAct = { ...data };
  let state = await prisma.activity.findUnique({ where: { id: data.id } });
  let statePrev = state.state;
  const id = dataAct.id;
  delete dataAct.id;
  if (dataAct.method) dataAct.method = mapMethod(dataAct.method);
  if (dataAct.state) dataAct.state = mapState(dataAct.state);
  const resultado = await prisma.activity.update({
    where: { id },
    data: dataAct,
  });

  if (resultado) {
    const activity = await getActivities({ id });

    const vendedor = await getAllSalesman({ id: data.salesmanId });

    const cliente = await getClientById(activity.clientId);

    //Solo cuando se modifica el estado de negociacion
    let infoActivity = { ...activity, statePrev };
    if (statePrev !== infoActivity.state) {
      sendMail(vendedor, cliente, infoActivity, "cambio");
    }

    return activity;
  } else throw new Error("Failed to update, missing information");
};
