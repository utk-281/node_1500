const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/db");

connectDB();

const app = express();

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port: ", PORT);
});
