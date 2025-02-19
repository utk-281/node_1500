//! steps ==>
//? 1) create a folder
//? 2) create a package.json file
//? 3) create a main file
//? 4) install required modules
//? 5) import the modules

//! to create a package.json file
//? npm init -y ==> with this command we can create a package.json file with default values
//? npm init ==> with this command we can create a package.json file with user defined values

//! npm ==> it stands for node package manager. by default node uses npm.
//! with the help of npm developers can create, delete, install and update the packages/ modules.

//! each folder can contain only one package.json file

//! steps to create a server with express
//? 1) import the module
//? 2) invoke top level function
//? 3) assign a port number
//? 4) handle routing

//! 1)
let express = require("express");
// console.log(express);

//! 2) calling/invoking top level function
let app = express();
// console.log(app);

//! 4) routing part
//! when user will enter "/" then i want "hello from server" message to be displayed
//! home page
// app.get("/", (req, res) => {
//   // req.url == "/"
//   //   res.send("hello from server!!!");
//   res.send(`<h1>hello world </h1>`);
// });

//! about page
app.get("/about", (req, res) => {
  res.send("this is about page!!");
});

app.get("*", (req, res) => {
  res.send("page not found");
});
// app.put("/", (req, res) => {});
// app.patch("/", (req, res) => {});
// app.delete("/", (req, res) => {});
// app.post("/", (req, res) => {});

//! 3) assign a port number
app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running");
});

//! production dependency
//! development dependency

//! production dependency
// npm install express --save (older versions)
// npm install express --save-prod (older versions)
// npm install express ( default option is production dependency)

//! development dependency
// npm i module-name --save-dev
// --> this will create a section in json file named as devDependencies, this will not be a part of production. all the modules present inside the devDependencies are accessible to the current folder only

// npm i module-name -D

// npm i module-name -g (to install globally)
//example :--> npm i nodemon -g

//! type nodemon filename
