let express = require("express");

let app = express();

app.use((req, res, next) => {
  console.log("middleware 1");

  req.myName = "something";

  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  console.log(req.myName);
  next();
});

app.get("/", (req, res) => {
  res.send("this is home");
});

app.get("/about", (req, res) => {
  res.send("this is about");
});

app.get("/downloads", (req, res) => {
  console.log(req.myName);
  res.send("this is download");
});

app.get("*", (req, res) => {
  res.send("page not found");
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running");
});

//!middleware ==> it is function, which has access to req and res objects and it comes in between the req and res.
//! we have a next() which have 2 functionality
//? --> if we call next(), the flow goes to the next middleware present
//? --> if we call next(), if the middleware is not present then the req will go the the controller/server
//? --> if we don't call next(), the req will not go anywhere

//! there are total types of middleware
//? app level middleware
//? user-defined middleware
//? built-in middleware
//? error middleware
//? router level middleware

emp = {
  k1: "v1",
  k2: "v2",
};

emp.k3 = "v3";

// http://localhost:9000/register
