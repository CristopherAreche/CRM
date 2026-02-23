//Aca deberiamos de importar nuestros controllers
const getTasks = require("../controllers/tasks/getTasks.js");
const createTask = require("../controllers/tasks/createTask.js");
const updateTask = require("../controllers/tasks/updateTask.js");
const fdeleteTask = require("../controllers/tasks/deleteTask.js");
const logger = require("../logger.js");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getTask = async (req, res) => {
  const { id, clientId, salesmanId, page, limit, search } = req.query;
  try {
    const response = await getTasks({
      id,
      clientId,
      salesmanId,
      page,
      limit,
      search,
    });
    res.status(200).json(response);
  } catch (error) {
    logger.error("getTask failed", { error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postTask = async (req, res) => {
  const data = req.body;
  try {
    if (data.clientId && data.salesmanId) {
      const response = await createTask(data);
      res.status(200).json(response);
    } else {
      res.status(400).send({ error: error.message });
    }
  } catch (error) {
    logger.error("postTask failed", { error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putTask = async (req, res) => {
  const data = req.body;
  try {
    const response = await updateTask(data);
    res.status(200).json(response);
  } catch (error) {
    logger.error("putTask failed", { error: error.message });
    res.status(400).json({ error: error.message });
  }
};
//----------------------------------- HANDLERS DELETE -----------------------------------\\
const deleteTask = async (req, res) => {
  const { id } = req.query;
  try {
    const response = await fdeleteTask(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTask,
  postTask,
  putTask,
  deleteTask,
};
