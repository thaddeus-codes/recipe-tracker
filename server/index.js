const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");

//logging middleware
app.use(morgan("dev"));

//parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder server
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(
  express.static(
    path.join(__dirname, "..", "node_modules", "font-awesome", "css")
  )
);

//routes
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.use("/api", require("./api"));

//error handling
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "internal server error.");
});

module.exports = app;
