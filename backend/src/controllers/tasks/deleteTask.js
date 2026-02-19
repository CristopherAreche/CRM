const prisma = require("../../prisma.js");

module.exports = async (id) => {
  const resp = await prisma.task.delete({ where: { id } });
  if (resp) return { message: `Tarea borrada` };
  else throw new Error("Tarea no encontrada");
};
