//! steps to create a project
//? 1) create a project folder
//? 2) create package.json file (npm init -y)
//? 3) install the required modules
//? 4) import the installed modules

//! before installing any third party modules/ libraries/ packages we have to make sure that our project folder contains a "package.json" file
//! to create a package.json file type this command in the cmd
//? type ==> "npm init -y"

//! package.json ==> this file contains all the details of the project like name, version, license, description etc.. Along with this it also contains dependencies section

//! there should be only one json file present in the project

//! now install third party modules using the following command in cmd
//? npm i/install <module-name1> <module-name2> .........

//changes
//? node_modules ==> this folder contains the source code of the installed modules
//? package-lock.json ==> it stores the meta data of the installed modules like version, integrity etc..
//? dependencies ==> it stores the name and version of the installed modules

// let mongodb = require("mongodb").MongoClient
let { MongoClient } = require("mongodb");
//! MongoClient => it helps us to connect to the database
// console.log(mongodb);

// let result = MongoClient.connect("mongodb://localhost:27017");

let connectDB = async () => {
  //! use connect() to connect to the database
  const client = await MongoClient.connect("mongodb://localhost:27017");
  //   console.log(result);
  console.log("connection established");

  //! create a database using the client variable
  //! use db("database-name") to create a database
  let database = client.db("NodeDB");
  //   console.log(database);
  console.log("database created");

  //! create a collection using database variable
  //! use createCollection("collection-name")
  let collection = await database.createCollection("users");
  console.log("collection created");

  //   collection.insertMany([{ name: "abc" }]);
};
connectDB();
