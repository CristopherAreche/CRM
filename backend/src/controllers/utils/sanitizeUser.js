const sanitizeBoss = (boss) => {
  if (!boss) return boss;
  const { password, ...safeBoss } = boss;
  return { ...safeBoss, role: "admin" };
};

const sanitizeSalesman = (salesman) => {
  if (!salesman) return salesman;
  const { password, ...safeSalesman } = salesman;
  return { ...safeSalesman, role: "seller" };
};

const sanitizeByRole = (user, role) => {
  if (role === "admin") return sanitizeBoss(user);
  if (role === "seller") return sanitizeSalesman(user);
  return user;
};

module.exports = {
  sanitizeBoss,
  sanitizeSalesman,
  sanitizeByRole,
};
