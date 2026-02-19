const prisma = require("../../prisma.js");
const { sendMail } = require("../email/notifyActivityExpiration.js");

const fu = async () => {
  let tasks = await prisma.task.findMany();
  return tasks;
};

module.exports = async () => {
  try {
    let dateToday = new Date();
    let day = dateToday.getDate().toString().padStart(2, "0");
    let month = (dateToday.getMonth() + 1).toString().padStart(2, "0");
    let year = dateToday.getFullYear().toString();
    let dateArray = [year, month, day];
    let date = dateArray.join("-");

    let info = await fu();
    let data = info.map((i) => {
      return {
        id: i.id,
        state: i.state,
        description: i.description,
        due_date: new Date(i.due_date).toISOString().slice(0, 10),
        clientId: i.clientId,
        salesmanId: i.salesmanId,
      };
    });

    let task = [];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].state === "Pendiente" &&
        data[i].due_date.slice(0, 4) == date.slice(0, 4) &&
        data[i].due_date.slice(5, 7) == date.slice(5, 7) &&
        data[i].due_date.slice(8, 10) - date.slice(8, 10) >= 1 &&
        data[i].due_date.slice(8, 10) - date.slice(8, 10) <= 2
      ) {
        task.push(data[i]);
      }
    }

    let salesman = {};
    let client = {};
    for (let i = 0; i < task.length; i++) {
      if (
        task[i].due_date.slice(0, 4) == date.slice(0, 4) &&
        task[i].due_date.slice(5, 7) == date.slice(5, 7) &&
        data[i].due_date.slice(8, 10) - date.slice(8, 10) >= 1 &&
        data[i].due_date.slice(8, 10) - date.slice(8, 10) <= 2
      ) {
        salesman = await prisma.salesman.findUnique({
          where: { id: task[i].salesmanId },
        });
        client = await prisma.client.findUnique({
          where: { id: task[i].clientId },
        });

        sendMail(
          salesman,
          client,
          task[i],
          (time = task[i].due_date.slice(8, 10) - date.slice(8, 10))
        );
      }
      salesman = {};
      client = {};
    }
  } catch (error) {
    console.error(error);
  }
};
