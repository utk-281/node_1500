let express = require("express");
let mongodb = require("mongodb");
let fs = require("fs");

let connectDB = async () => {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("expressDB");
  let collection = database.collection("users");
  return collection;
};

let app = express();

app.use(express.urlencoded({ extended: true })); // middleware

//! home page
app.get("/", (req, res) => {
  res.send("home page");
});

//! form page
app.get("/register", (req, res) => {
  //   res.send("form page");
  res.sendFile(__dirname + "/Pages/form.html");
});

//! blog page
app.get("/blogs", (req, res) => {
  res.send("blogs page");
});

//! page not found
app.get("*", (req, res) => {
  res.send("page not found");
});

//! handle form submit
app.post("/abc", async (req, res) => {
  //! use the same endpoint in the form action
  //! set form method to "post"
  //! provide values to name attribute in the form
  console.log(req.body);
  let { a, b, c } = req.body;
  // console.log(userEmail, userName, userPassword);

  fs.appendFileSync("./data.txt", `${a}, ${b}, ${c}\n`);

  let myCollection = await connectDB();
  myCollection.insertOne({ a, b, c });
  // myCollection.insertOne(req.body);

  res.send(`data has been saved ${a}`);
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at http://localhost:9000");
});

//! in json file, default script command to run the file is "start" --> npm start
//! if we are writing command other than "start" then we have to type --> npm run command-name
// example --> npm run abc

// http://localhost:9000/abc

//! MVC structure
