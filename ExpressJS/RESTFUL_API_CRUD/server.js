let express = require("express");
const { connectDB } = require("./config/database");
require("dotenv").config();

let userRoutes = require("./routers/users.routes");

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

// console.log(process.env);

connectDB();

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log("Server running........", process.env.PORT);
});
