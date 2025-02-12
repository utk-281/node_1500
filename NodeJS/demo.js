//! Modules ==> it is logical piece of code which can be reused
//! --> it is used to break down the complex logics into simpler ones
//! --> it increases code visibility and maintainability
//! --> chances of debugging errors are also increased
//! --> it helps us to follow DRY principle (Don't Repeat Yourself)

//? In nodeJS we have three types of Modules

//? ==> 1) local modules / user defined modules : --> modules which are defined by user
// syntax ==> let variableName = require("path of the file")

//? ==> 2) third party modules --> modules which are installed from a third party (npm)
// examples ==> express, mongodb, multer, color, morgan, etc...
// syntax ==>
// let variableName = require("moduleName")

//? ==> 3) built-in modules / core modules --> modules which are part of the nodeJS installation,no need to write the code or install them manually
// examples ==> fs, http, path, os, crypto, queryString, etc...
// syntax ==>
// let variableName = require("node:moduleName")
//? node keyword indicates that module which we are importing is a part of built in modules
//? and "node" keyword is not mandatory
