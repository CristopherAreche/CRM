const prisma = require("../../prisma.js");
const getTasks = require("./getTasks.js");

module.exports = async (data) => {
  //data={id,method,state,from,to,message,subject,attached,saleman_id,***sale_id}
  let date;
  if (data.due_date) date = new Date(data.due_date);
  const dataAct = { ...data, due_date: date };
  const id = dataAct.id;
  delete dataAct.id;
  const resultado = await prisma.task.update({
    where: { id },
    data: dataAct,
  });

  console.log(resultado);
  if (resultado) {
    const task = await getTasks({ id });
    return task;
  } else throw new Error("Failed to update, missing information");
};
