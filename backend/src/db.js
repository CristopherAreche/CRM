require("dotenv").config();
const { config } = require("./config/config");
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const dbFill = require("./controllers/utils/dbFill");

// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   {
//     host: config.host,
//     dialect: "postgres",
//     logging: false,
//   }
// );

const sequelize = new Sequelize(
  "dbcrm_szr2",
  "dbuser",
  "PnQGr6AF8fKAnDbqu3uEajzqP9sPM7IV",
  {
    host: "dpg-cmenceed3nmc739atrg0-a",
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected."))
  .catch((err) => console.log("Error: " + err));

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Activity,
  Boss,
  Client,
  Feedback,
  Product,
  Sale_product,
  Salesman,
  Task,
  User,
} = sequelize.models;

// Aca vendrian las relaciones

Sale_product.belongsTo(Activity);
Sale_product.belongsTo(Product);

Activity.belongsTo(Client);
Activity.belongsTo(Salesman);

Salesman.belongsTo(Boss);
Client.belongsTo(Salesman);

Boss.hasMany(Product, { foreignKey: "bossId" });
Product.belongsTo(Boss, { foreignKey: "bossId" });

Salesman.hasMany(Feedback, { foreignKey: "salesmanId" });
Feedback.belongsTo(Salesman, { foreignKey: "salesmanId" });

Task.belongsTo(Client);
Task.belongsTo(Salesman);

dbFill(sequelize.models).then(() => {
  console.log("Se ha ejecutado llenar en la linea 91 de db.js");
});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
