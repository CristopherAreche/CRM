require("dotenv").config();
const server = require("./src/app.js");
const cron = require("node-cron");
const notifyTask = require("./src/controllers/tasks/notifyTask.js");

cron.schedule("0 9 * * *", () => {
  notifyTask();
});

const port = process.env.PORT || 5444;
server.listen(port, () => {
  console.log("--> Server Online in port " + port);
});
