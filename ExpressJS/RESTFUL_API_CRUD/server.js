let express = require("express");
const { connectDB } = require("./config/database");

let userRoutes = require("./routers/users.routes");

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

connectDB();

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running........");
});
