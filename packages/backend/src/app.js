const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const todos = require("./routes/todo.router");
const db = require("./models/index");

const port = 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", todos);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

process.on("SIGTERM", () => {
  shutdownManager.terminate(() => {
    console.log("Server is gracefully terminated");
  });
});
