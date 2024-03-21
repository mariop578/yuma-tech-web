const express = require("express");
const session = require("express-session");
const path = require("path");
const connection = require("./config/connection");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT;

app.use(
  session({
    secret: "hehehe",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server Running"));
});
