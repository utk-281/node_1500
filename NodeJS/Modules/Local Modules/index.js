//! 1st way of unpacking/ importing : using dot notation

// syntax ==>
// let/ const variableName = require("path (relative path)")
// let value = require("./app.js");
// console.log(value);
/* 
value = { 
            name1: 'abc', 
            arr: [ 'java', 'html' ], 
            hello: [Function: hello] 
    } 
*/
// console.log(value.name1);
// console.log(value.arr);
// value.hello();

//! 2nd way of importing : object destructuring

// let { name1, arr, hello } = require("./app.js");
// console.log(name1);
// console.log(arr);
// hello();

// let value = require("./app.js");

// console.log(value.func1());
// console.log(value.myFun());
// console.log(value.obj);
// console.log(value.myName);

const { func1, myFun, obj, myName } = require("./app.js");
console.log(func1());
console.log(myFun());
console.log(obj);
console.log(myName);

//  import variableName from "" ES6 format
//? import {func1, myFun, obj, myName} from "./app.js"
// let variableName = require("") commonJS format (by default)
