const prisma = require("../../prisma.js");
const jwt = require("jsonwebtoken");
const updateBoss = require("../Bosses/updateBoss.js");

module.exports = async (data) => {
  const { myToken } = data;
  if (!myToken) {
    return false;
  }
  try {
    var decodificacion = jwt.verify(myToken, process.env.JWT_SECRET);
  } catch (error) {
    return false;
  }
  const { id, email, password, pay_day, createdAt } = decodificacion;

  if (pay_day == null) {
    let endFree = new Date(createdAt);
    endFree.setDate(endFree.getDate() + 6);
    const now = new Date();
    if (now > endFree) {
      let data = { id: id, enable: false };
      await updateBoss(data);
      return false;
    }
  } else {
    let fecha = new Date(pay_day);
    console.log("fecha", fecha);
    const now = new Date();
    if (now > fecha) {
      let data = { id: id, enable: false };
      await updateBoss(data);
      return false;
    }
  }

  let salesman = await prisma.salesman.findFirst({ where: { email: email } });
  if (salesman !== null) {
    if (password !== null) {
      if (password === salesman.password) {
        return salesman;
      }
    }
  }
  let boss = await prisma.boss.findFirst({ where: { email: email } });
  if (boss !== null) {
    if (password !== null) {
      if (password === boss.password) {
        return boss;
      }
    }
  }
};
