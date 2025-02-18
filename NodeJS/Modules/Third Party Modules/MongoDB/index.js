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

let mongodb = require("mongodb");
// console.log(mongodb.MongoClient);

//! MongoClient ==> it helps to connect the nodeJS project with database
//! to connect with the database there is a method called as connect("url of database")

let connectDB = async () => {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  // console.log(client);
  // console.log(client.db);
  console.log("database connection successful");

  //! create a database, using db("database-name"),
  let database = client.db("myDb");
  // console.log(database);
  // console.log(database.createCollection);
  console.log("database created");

  //! create a collection using createCollection("collection-name")
  let collection = await database.createCollection("myCollection");
  // console.log(collection);
  // console.log(collection.insertOne);
  // console.log(collection.insertMany);
  console.log("collection created");

  //! ================== CRUD OPERATIONS ==================

  //!  inserting single document
  // let result = await collection.insertOne({ name: "def", age: 20 });
  // console.log("data inserted");
  // console.log(result);

  //! inserting multiple documents
  // let result = await collection.insertMany([{ name: "xyz" }, { age: 57 }]);
  // console.log("Data inserted");
  // console.log(result);

  //! fetching single document
  // let result = await collection.findOne({ name: { $eq: "abc" } });
  // console.log(result);

  //! fetching multiple docs
  // let result = collection.find(); // --> cursor object
  // let docs = await result.toArray();
  // console.log(docs);
  // let result = await collection.find().toArray();
  // console.log(result);

  // let result = collection.find();
  // result.forEach((doc) => {
  //   console.log(doc);
  // });
};
connectDB();
