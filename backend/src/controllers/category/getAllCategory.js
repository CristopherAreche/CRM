const prisma = require("../../prisma.js");

module.exports = async ({ bossId }) => {
  if (!bossId) throw new Error("bossId required");

  const categories = await prisma.product.findMany({
    where: { bossId },
    select: { category: true },
  });

  const response = [];
  for (let i = 0; i < categories.length; i++) {
    const element = categories[i];
    if (!response.includes(element.category)) response.push(element.category);
  }

  return response;
};
