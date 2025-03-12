const express = require("express");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config");
const { connectDB } = require("./config/db");
const { error } = require("./middlewares/error.middleware");

const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/v1/users", userRoutes);
app.use("/v1/todos", todoRoutes);

app.use(error);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port: ", PORT);
});
