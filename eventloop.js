//! timers ==> it is used to handler setTimeout() and setInterval()
//! pending callbacks ==> in this phase, all callbacks are executed
//! idle & prepare ==> this is used by event-loop for it's internal working/housekeeping
//! polling ==> in this phase, all i/o operations are executed (fs, database-->network)
//! check ==> in this phase, setImmediate() is executed
//! close ==> in this phase, remaining callbacks are executed if nay left out then event-loop is goes to phase 1, otherwise the code is stopped

//? promise, nexTick(), queueMicrotask()
//? promise and queueMicrotask() ==> this will be executed in between the phases
//? nextTick() ==> among all async operations, this is having the highest priority

// console.log("1-start");
// setTimeout(() => {
//   console.log("2-inside setTimeout");
// });
// console.log("3-middle");

// process.nextTick(() => {
//   console.log("4-inside nextTick");
// });

// console.log("5-end");
//? 1,3,5,4,2

//! ============================================================================

// setImmediate(() => {
//   console.log("1-inside setImmediate");
// });

// Promise.resolve().then(() => {
//   console.log("2-inside promise");
// });

// queueMicrotask(() => {
//   console.log("3-inside queueMicrotask");
// });

// console.log("5-end");

// process.nextTick(() => {
//   console.log("6-inside nextTick");
// });

//? 5,6,2,3,1

//! ============================================================================
// console.log("1-start");
// setTimeout(() => {
//   console.log("2-inside setTimeout");
// }, 10000);
// console.log("3-middle");
// process.nextTick(() => {
//   console.log("4-inside nextTick");
// });
// setImmediate(() => {
//   console.log("5-inside setImmediate");
// });
// Promise.resolve().then(() => {
//   console.log("6-inside promise");
// });
// queueMicrotask(() => {
//   console.log("7-inside queueMicrotask");
// });
// console.log("8-end");
// setTimeout(() => {
//   console.log("9-inside setTimeout");
// });
// process.nextTick(() => {
//   console.log("10-inside nextTick");
// });
//? 1,3,8,4,10,6,7,9,5,2

//! ============================================================================
// fetch("https://jsonplaceholder.typicode.com/posts").then(() => {
//   console.log("1-start");
// });

// queueMicrotask(() => {
//   console.log("2-inside queueMicrotask");
// });

// Promise.resolve().then(() => {
//   console.log("3-inside promise");
// });

// setImmediate(() => {
//   console.log("4-inside setImmediate");
// });
//? 2, 3, 4,1

//! ====================================================================
// process.nextTick(() => {
//   console.log("1-inside nextTick");

//   process.nextTick(() => {
//     console.log("2-inside nextTick");
//   });

//   setTimeout(() => {
//     console.log("8-inside setTimeout");
//   }, 5000);
//   queueMicrotask(() => {
//     console.log("3-inside queueMicrotask");
//   });
//   Promise.resolve().then(() => {
//     console.log("4-inside promise");
//   });
//   setImmediate(() => {
//     console.log("5-inside setImmediate");
//   });
// });

// setTimeout(() => {
//   console.log("6-inside setTimeout");
// });

// process.nextTick(() => {
//   console.log("7-inside nextTick");
// });
//? 1,7,2,3,4,6,5,8

//! =========================================================================

let fs = require("fs");

// fs.readFile("./eventloop.js", "utf-8", () => {
//   console.log("1");
// });
// fetch("https://jsonplaceholder.typicode.com/posts").then(() => {
//   console.log("2");
// });
// process.nextTick(() => {
//   console.log("3");
// });
// setTimeout(() => {
//   console.log(4);
// }, 100);
// setImmediate(() => {
//   console.log("5");
// });

//? sync, nextTick, (promise, queueMQ), timers, setImmediate, poll (fs, network),fetch()

//! =========================================================================
setTimeout(() => {
  console.log("1");
});

// console.log("2");

setImmediate(() => {
  console.log("3");
}); // ==> this is not-deterministic
