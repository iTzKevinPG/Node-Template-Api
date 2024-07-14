const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const responseHandler = require("./api/middlewares/responseHandler");
const tenantContext = require("./api/middlewares/tenantContext");
const itemRoutes = require("./routes/itemRoutes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(tenantContext);
app.use(responseHandler);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/items", itemRoutes);

app.use((err, req, res, next) => {
  res.status(500).send({ error: "Api Internal Error" });
});

app.use(function (req, res, next) {
  res.status(404).json({ error: "Not Found" });
});

module.exports = app;
