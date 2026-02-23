const prisma = require("../../prisma.js");
const jwt = require("jsonwebtoken");
const updateBoss = require("../Bosses/updateBoss.js");
const { sanitizeBoss, sanitizeSalesman } = require("../utils/sanitizeUser.js");

const isBossSubscriptionExpired = (boss) => {
  const now = new Date();

  if (boss.pay_day) {
    return now > new Date(boss.pay_day);
  }

  const endFree = new Date(boss.createdAt);
  endFree.setDate(endFree.getDate() + 6);
  return now > endFree;
};

const findSalesman = ({ id, email }) => {
  if (id) return prisma.salesman.findUnique({ where: { id } });
  if (email) return prisma.salesman.findFirst({ where: { email } });
  return null;
};

const findBoss = ({ id, email }) => {
  if (id) return prisma.boss.findUnique({ where: { id } });
  if (email) return prisma.boss.findFirst({ where: { email } });
  return null;
};

module.exports = async (data) => {
  const { myToken } = data;
  if (!myToken) return false;

  let decoded;

  try {
    decoded = jwt.verify(myToken, process.env.JWT_SECRET);
  } catch (error) {
    return false;
  }

  const selector = { id: decoded.id, email: decoded.email };

  if (decoded.role === "seller") {
    const salesman = await findSalesman(selector);
    if (!salesman || salesman.enable === false) {
      return false;
    }
    return sanitizeSalesman(salesman);
  }

  if (decoded.role === "admin") {
    const boss = await findBoss(selector);
    if (!boss) return false;

    if (isBossSubscriptionExpired(boss)) {
      if (boss.enable !== false) {
        await updateBoss({ id: boss.id, enable: false });
      }
      return false;
    }

    return sanitizeBoss(boss);
  }

  const salesman = await findSalesman(selector);
  if (salesman && salesman.enable !== false) {
    return sanitizeSalesman(salesman);
  }

  const boss = await findBoss(selector);
  if (boss) {
    if (isBossSubscriptionExpired(boss)) {
      if (boss.enable !== false) {
        await updateBoss({ id: boss.id, enable: false });
      }
      return false;
    }

    return sanitizeBoss(boss);
  }

  return false;
};
