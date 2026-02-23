const getAllCategory = require("../controllers/category/getAllCategory");
const logger = require("../logger.js");

const getCategory = async (req, res) => {
  const data = req.query;
  try {
    let categories = await getAllCategory(data);
    res.status(200).send(categories);
  } catch (error) {
    logger.error("getCategory failed", { error: error.message });
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCategory };
