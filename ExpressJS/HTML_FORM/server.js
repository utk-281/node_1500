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

app.use(express.urlencoded({ extended: true })); // todo

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
  //   console.log(req.body);
  //? { userEmail: 'abc@gmail.com', userName: 'abc', userPassword: '123456' }

  //   let values = req.body;
  //   console.log(values);

  let { userEmail, userName, userPassword } = req.body;
  //   console.log(userEmail, userPassword, userName);
  fs.appendFileSync(
    "./data.txt",
    `name: ${userName}, email: ${userEmail}, password: ${userPassword},\n`
  );

  let myCollection = await connectDB();
  myCollection.insertOne({ userEmail, userName, userPassword });

  res.send(`user with the email: ${userEmail} has registered successfully`);
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at http://localhost:9000");
});

//! in json file, default script command to run the file is "start" --> npm start
//! if we are writing command other than "start" then we have to type --> npm run command-name
// example --> npm run abc
