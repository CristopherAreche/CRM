const prisma = require("../../prisma.js");

module.exports = async ({ id = null, salesmanId = null }) => {
  if (id !== null) {
    const feedback = await prisma.feedback.findUnique({ where: { id } });
    return feedback;
  }
  if (salesmanId !== null) {
    const feedback = await prisma.feedback.findMany({ where: { salesmanId } });
    return feedback;
  }
  throw new Error("FeedbackId(id) or salesmanId is undefined");
};
