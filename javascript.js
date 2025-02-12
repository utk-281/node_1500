//! === prerequisites of NodeJS ==>
//! 1) how asynchronous and synchronous code get executed
//! 2) arrays, objects, strings and it's methods
//! 3) promises
//! 4) how to handle promises
//! 5) internal architecture of javascript runtime

//! how asynchronous and synchronous code get executed
//? synchronous/ blocking code ==> code which get executed line by line and blocks other statements
// example ==>
console.log("Start");
console.log("middle");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("end");

//! to execute any js file using nodeJS type command
//? node filename.js ==> extension is not mandatory.
