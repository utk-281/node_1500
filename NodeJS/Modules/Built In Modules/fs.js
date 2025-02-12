// let fs = require("node:fs");
// let fs = require("fs");

//! fs stands for file system, it is used to interact (CRUD) with files and folders present on the os
//? C --> create a file
//? R --> read/ fetch a file
//? U --> update/ append a file
//? D --> delete a file

// console.log(fs);

//! we can execute js file in two different ways
//? 1) synchronous execution
//? 2) asynchronous execution
// ==> using callbacks
// ==> using promises
// ========> using async await
// ========> using then catch

//! ====================== synchronous execution ===================================

//! 1) creating a file
// method name ==> writeFileSync()
// syntax ==> fs.writeFileSync("path/filename", "data")
//? path/ filename ==> at which path you want to create a file with the name
//? data ==> data to be inserted at the time of creation of the file

// case 1
// console.log("Start");

// fs.writeFileSync("../../styles.css", "css data");
// console.log("file created");

// console.log("middle");
// console.log("end");

// case 2
// fs.writeFileSync("../../styles.css", "u12345");

// "./" means current directory/ folder
// "../" means one level back folder from current folder

//? if the file is not present at the specified path, then it will be created with the given data,
//? if the file is present then the old data will be deleted by the new one

//! 2) reading/ fetching a file
// method name ==> readFileSync()
// syntax ==> fs.readFileSync("path of the file", "encoding")
//? path of the file ==> path of the file which you want to read
//? encoding ==> it specifies the output datatype

// console.log("Start");
// source ==> os
// buffer --> array which is fixed in size (it stores data in binary form but displays data in hexadecimal format)
// destination ==> console
// let payload = fs.readFileSync("./index.html");
// console.log(payload.toString());
// // change the buffer value to string using toString()
// /* <Buffer 75 31 32 33 34 35>
// array which is fixed in size*/
// console.log("file read");
// console.log("middle");
// console.log("end");

// let value = fs.readFileSync("./index.html", "utf-8"); // unicode transformation format --> represent the data in letters a to z and numbers from 0 to 9
// console.log(value);

//! 3) updating --> appending (to add something at last) a file
// method name ==> appendFileSync()
// syntax ==> fs.appendFileSync("path of the file", "new data")
//? path ==> path of the file to be appended
//? new data ==> data to be added

// === case -- 1
// console.log("Start");

// fs.appendFileSync("./index.html", "this is added data");
// console.log("file appended");

// let data = fs.readFileSync("./index.html", "utf-8");
// console.log(data);

// console.log("middle");
// console.log("end");

// === case -- 2
// fs.appendFileSync("./demo.java", "class Node{}");
// console.log("file appended");

//! if the file is present then the data will be appended,
//! otherwise, a new file would be created with the given data

//! 4) deleting a file
// method name => unlinkSync()
// syntax ==> fs.unlinkSync("path of the file")
//? path ==> path of the file to be deleted

// fs.unlinkSync("./demo.java");
// console.log("file deleted");

//! a function inside an object is called as method

//! copy the contents of "fs.js" file into a new file called "data.txt", using fs methods
// first --> copy the contents
// let value = fs.readFileSync("./fs.js", "utf-8");
// // second --> paste this in new file
// fs.writeFileSync("./data.txt", value);
// console.log("file copy pasted");

//! 5) creating a folder/ directory
// method name ==> mkdirSync()
// syntax ==> fs.mkdirSync("path/name")

// fs.mkdirSync("./Server");
// console.log("folder created");

//! 5) deleting a folder/ directory
// method name ==> rmdirSync()
// syntax ==> fs.rmdirSync("path")

// fs.rmdirSync("./Server");
// console.log("folder deleted");

//! 6) renaming a file/folder
// method name ==> renameSync()
// syntax ==> fs.renameSync("old filePath", "new fileName")
//        ==> fs.renameSync("old folderPath", "new folderName")

// fs.renameSync("./styles.css", "./css1.txt"); // renaming file
// fs.renameSync("../../../demo", "../../../hello"); // renaming folder
// console.log("file and folder renamed");

//! create a structure inside same folder
// --> Todo/backend/routers/userRouters.js (using fs methods)
// fs.mkdirSync("./Todo");
// console.log("todo folder created");
// fs.mkdirSync("./Todo/backend");
// console.log("backend folder created");
// fs.mkdirSync("./Todo/backend/routers");
// console.log("routers folder created");
// fs.mkdirSync("./Todo/backend/routers/userRouters.js");
// console.log("userRouters.js folder created");

// fs.rmdirSync("./Todo", { recursive: true });
// fs.rm("./Todo", () => {});

//! ======================== asynchronous execution =====================
//! using callbacks,
//! using then catch
//! using async await

//! =================== using callbacks ============================

//! 1) creating a file
// method name ==> writeFile()
// syntax ==> fs.writeFile("path/filename", `data`, callback function )

// console.log("start");

// fs.writeFile("../demo.py", `abc`, (a) => {
//   // error first callbacks ==> catching error parameter first inside a callback function
//   if (a) console.log(" err" + a);
//   console.log("file created");
// });

// console.log("middle");
// console.log("end");

//? if the file is not present at the specified path, then it will be created with the given data,
//? if the file is present then the old data will be deleted by the new one

//! 2) reading a file
// method name ==> readFile()
// syntax ==> fs.readFile("path", "encoding", callback function)

// console.log("Start");

// fs.readFile("./demo.py", "utf-8", (err, data) => {
//   if (err) console.log("error : " + err);
//   console.log("file read");
//   console.log(data);
// });

// console.log("middle");
// console.log("end");

//! =================== using then and catch ============================

// let fs = require("fs").promises; // commonJS format (by default nodeJS uses this format)
// let fs = require("fs/promises");

//! 1) CREATING A FILE
// method name ==> writeFile()
// syntax ==> fs.writeFile("path/filename", "data").then().catch()

// console.log("Start");

// let result = fs.writeFile("./data.html", "hello world");
// // console.log(result);
// result
//   .then(() => {
//     console.log("file created");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("error occurred while creating a file or promise rejected");
//   });

// console.log("middle");
// console.log("end");

//! 2) READING A FILE
//  method name ==> readFile()
// syntax ==> fs.readFile("path", "encoding").then().catch()

// let result = fs.readFile("./data.html", "utf-8");
// result
//   .then((data) => {
//     console.log(data);
//     console.log("file read");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! ============================ async await =============================
// async await are used to handle promises and await is always used inside async function. async is used ing function declaration and await is used in function body.
//! async function always returns a promise

//! 1) creating a file
// method name ==> writeFile("path/filename", "data")

async function writeFile() {
  let data = await fs.writeFile("./index.txt", "this is my index file");
  console.log(data); // undefined
  console.log("file created");
}

// writeFile();

//! 2) reading a file
// method name ==> readFile

async function readFile() {
  let data = await fs.readFile("./index.txt", "utf-8");
  console.log(data);
}

// readFile();

let fs = require("fs");

//! =============== buffer and streams ======================

//! buffer ==> it is an array which is fixed in size, which is used to transfer data from one place to another and it holds data in binary form (0's and 1's)

//! streaming ==> it is the process of transferring the contents from source to destination in continuous chunks/ pieces of data.
//! in nodeJS we have 4 different types of streaming services
//? 1) readable stream ==> we can read any data in continuous chunks, with the help of createReadStream()

//? 2) writeable stream ==> we can wite the data in continuous chunks, with the help of createWriteStream()

//? 3) duplex stream ==> in duplex streaming, we can perform both reading and writing at the same time, using pipe()

//? 4) transform stream ==>

//! 1) readable stream

// let data = fs.createReadStream("./data.html", "utf-8"); // emit("data")
// console.log(data); // op --> readStream object

//! to create any event in nodeJS --> emit("eventName")
//? eventName ==> name of the event which we want to create
//! to catch/ execute any event in nodeJS --> on("eventName",function)
//? "eventname" ==> pass the name of the event which we want to execute
//? function --> define the functionality

// data.on("data", (chunks) => {
//   console.log(`this is my chunk --> ${chunks}`);
// });

// data.on("data", (chunks) => {
//   console.log(`this is my chunk ---> ${chunks}\nand this is my chunk size ----> ${chunks.length}`);
// });

//! 2) writable stream
// method name is createWriteStream()

// let value = fs.createWriteStream("./index.txt");
// // console.log(value); // writeStream object
// //! write() ==> it is used to insert or add data in continuous chunks

// value.write("data to be inserted", (err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });

//! 3) duplex stream
// method ==> pipe(), this method connects the source to destination
// let readContents = fs.createReadStream("./index.txt", "utf-8"); // source
// let writeContents = fs.createWriteStream("./data.html"); // destination
// // syntax ==> source.pipe(destination)
// readContents.pipe(writeContents);
// console.log("file copy pasted");

//! transform stream ==> it is similar to duplex stream but we can modify the chunks
