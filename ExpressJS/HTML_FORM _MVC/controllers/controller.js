let fs = require("fs");
const { connectDB } = require("../database");

let displayHomePage = (req, res) => {
  res.send("home page");
};

let displayFormPage = (req, res) => {
  //   res.send("form page");
  fs.createReadStream("./controllers/form.html", "utf-8").pipe(res);
};

let displayBlogsPage = (req, res) => {
  res.send("blogs page");
};

let displayPageNotFound = (req, res) => {
  res.send("page not found");
};

let handleForm = async (req, res) => {
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
};

module.exports = {
  displayHomePage,
  displayFormPage,
  displayBlogsPage,
  displayPageNotFound,
  handleForm,
};
