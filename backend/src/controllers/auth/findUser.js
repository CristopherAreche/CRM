const prisma = require("../../prisma.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createBoss = require("../Bosses/CreateBoss.js");

const createToken = (user, role) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      ...user,
      role,
    },
    process.env.JWT_SECRET
  );
  return { success: true, token };
};

module.exports = async (data) => {
  const { email, password, name, nickname } = data;

  const [salesman, boss] = await Promise.all([
    prisma.salesman.findFirst({ where: { email } }),
    prisma.boss.findFirst({ where: { email } }),
  ]);

  if (salesman !== null) {
    if (password !== null) {
      if (await bcrypt.compare(password, salesman.password)) {
        if (salesman.enable !== false) {
          return createToken(salesman, "seller");
        } else {
          throw new Error("user blocked");
        }
      } else throw new Error("Salesman Password Incorrect");
    }
  }

  if (boss !== null) {
    if (password !== null) {
      if (await bcrypt.compare(password, boss.password))
        return createToken(boss, "admin");
      else throw new Error("Boss Password Incorrect");
    } else {
      return createToken(boss, "admin");
    }
  }

  if (nickname) {
    let boss = await createBoss({
      name,
      username: nickname,
      email,
    });
    return createToken(boss, "admin");
  }

  throw new Error("User Not Exist");
};
