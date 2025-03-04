let { Router } = require("express");
const {
  displayHomePage,
  displayFormPage,
  displayBlogsPage,
  displayPageNotFound,
  handleForm,
} = require("../controllers/controller");

// let value = require("../controllers/controller");
// console.log(value);

let router = Router();

//! home page
router.get("/", displayHomePage);

//! form page
router.get("/register", displayFormPage);

//! blog page
router.get("/blogs", displayBlogsPage);

//! page not found
router.get("*", displayPageNotFound);

//! handle form submit
router.post("/abc", handleForm);

module.exports = router;
