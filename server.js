const express = require("express");
const session = require("express-session");
const path = require("path");
const connection = require("./config/connection");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server Running"));
});
