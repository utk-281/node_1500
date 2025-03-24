const express = require("express");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config");
const { connectDB } = require("./config/db");
const { error } = require("./middlewares/error.middleware");
const { rateLimiter } = require("./utils/rateLimiter");

//cors

// const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");
const adminRoutes = require("./routes/admin.routes");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(rateLimiter(2, 2 * 60 * 1000));
// app.use(cors());

app.use("/v1/users", userRoutes);
app.use("/v1/todos", todoRoutes);
app.use("/v1/admin", adminRoutes);

app.use(error);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port: ", PORT);
});
