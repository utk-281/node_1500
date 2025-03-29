// process.env.UV_THREADPOOL_SIZE = 3;

// console.log(process.env.UV_THREADPOOL_SIZE);

let startTime = Date.now();
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err, key) => {
  console.log("function1");
  //   console.log(key);
  console.log(Date.now() - startTime);
});

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err, key) => {
  console.log("function2");
  console.log(Date.now() - startTime);
});

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err, key) => {
  console.log("function3");
  console.log(Date.now() - startTime);
});

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err, key) => {
  console.log("function4");
  console.log(Date.now() - startTime);
});

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err, key) => {
  console.log("function5");
  console.log(Date.now() - startTime);
});

crypto.pbkdf2("password", "salt", 1000000, 128, "sha512", (err, key) => {
  console.log("function6");
  console.log(Date.now() - startTime);
});

// command UV_THREADPOOL_SIZE=6 node working.js
let os = require("os");
console.log(os.cpus().length);
// sync
// nexTick
// promises/ microtasks
