const prisma = require("../../prisma.js");

module.exports = async (data) => {
  //data={method,state,from,to,message,subject,attached,clientId,salesmanId,}
  if (data.salesmanId != null && data.clientId != null) {
    const date = new Date(data.due_date);
    const newTask = await prisma.task.create({ data: { ...data, due_date: date } });
    return newTask;
  } else {
    throw new Error("salesmanId or clientId is undefined");
  }
};
