const express = require("express");

const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");
const friendsRoutes = require("./routes/friendRoutes");

const app = express();

app.use(express.json());
app.use("/", express.static("public"));

app.use("/myOwnTest", testRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/users", userRoutes);
app.use("/friends", friendsRoutes);

module.exports = app;
