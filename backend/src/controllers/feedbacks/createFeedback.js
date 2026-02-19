const prisma = require("../../prisma.js");

module.exports = async (data) => {
  //data={score,salesmanId}
  if (data.salesmanId != null) {
    const newFeedback = await prisma.feedback.create({ data });
    return newFeedback;
  } else {
    throw new Error("salesmanId is undefined");
  }
};
