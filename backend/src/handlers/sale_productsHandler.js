//Aca deberiamos de importar nuestros controllers
const fgetSaleProducts = require("../controllers/sale_products/getSaleProducts.js");
const createSaleProducts = require("../controllers/sale_products/createSaleProducts.js");
const updateSaleProducts = require("../controllers/sale_products/modifySaleProducts.js");
const logger = require("../logger.js");
//Aca deberiamos de importar nuestros controllers

//----------------------------------- HANDLERS GETS -----------------------------------\\
const getSaleProducts = async (req, res) => {
  const { id, activityId, page, limit, search } = req.query;
  try {
    const sale_products = await fgetSaleProducts({
      id,
      activityId,
      page,
      limit,
      search,
    });
    res.status(200).send(sale_products);
  } catch (error) {
    logger.error("getSaleProducts failed", { error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postSaleProduct = async (req, res) => {
  const data = req.body;
  try {
    const response = await createSaleProducts(data);
    res.status(200).send(response);
  } catch (error) {
    logger.error("postSaleProduct failed", { error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS PUT -----------------------------------\\
const putSaleProduct = async (req, res) => {
  const data = req.body;
  try {
    const response = await updateSaleProducts(data);
    res.status(200).send(response);
  } catch (error) {
    logger.error("putSaleProduct failed", { error: error.message });
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSaleProducts,
  postSaleProduct,
  putSaleProduct,
};
