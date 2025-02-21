let express = require("express");
let myRoutes = require("./routes/routes");

let app = express();

app.use(express.urlencoded({ extended: true })); // middleware

app.use(myRoutes);

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at http://localhost:9000");
});

//! in json file, default script command to run the file is "start" --> npm start
//! if we are writing command other than "start" then we have to type --> npm run command-name
// example --> npm run abc

// http://localhost:9000/abc

//! MVC structure
