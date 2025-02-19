//! http ==>  it is used to define set of rules and regulation to allow communication between client and server.

//! these rules are majorly defined using 5 http methods ==>
//? 1) get() --> is used to fetch resources from the server
//? 2) post() --> is used to send data to the server
//? 3) put()
//? 4) patch()
//? ==== ==> used to update/modify the data which is present in the database
//? 5) delete() --> is used to delete a resource from the database

//! steps to start a server
//! 1) import the module
//! 2) create a server using createServer()
//! 3) assign a port number to the server with the help of listen()

//! In NodeJS http is a built in module which is used for creating a server
// let http = require("node:http");
// let fs = require("fs");
// let fsPromise = require("fs/promises");
//? "node:" is not mandatory, it just indicates that the imported module is a part of core/built-in modules
// console.log(http);

// let server = http.createServer((req, res) => {
//   //! to display a data on UI --> write(), end()
//   //   res.write("hello world");
//   //   //? to end the current req res cycle we use end()
//   //   res.end();
//   //   res.write("this is my second message"); this will throw error as we are sending a res after terminating the current req res cycle

//   res.end("the is a message from end()"); // it will first display the message then it will end the current req res cycle
// });

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("server running");
// });

//! to send request to the server, open the browser search localhost:portNumber in search bar
// localhost:9000

//! to kill the server press ctrl + c on the terminal

// let server = http.createServer((req, res) => {
//! we can set the headers using writeHead(statusCode, statusMessage, {"Content-Type":"value"})
//! statusCode ==> pass the status code according to the response
//! statusMessage ==> each status code is affiliated with a message
//! pass the content type of which you are sending as a response
//? ==> text/html ==> html file
//? ==> text/css ==> css file
//? ==> application/json ==> json file
//? ==> application/javascript ==> javascript file
//? ==> text/plain ==> string output
//! ============= display a html message hello world inside h1 tag ===============
// res.end("<h1>hello world</h1>"); // string (displaying contents using html tags)
//! ============= display a html page ===============
//   res.end(`<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>Home page</h1>
//     <p>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae harum, odio dolores inventore
//       accusamus soluta natus perferendis, quisquam ipsum, hic esse in. Dolor excepturi quos
//       cupiditate dignissimos libero. Nesciunt necessitatibus modi temporibus incidunt at, ab,
//       exercitationem voluptates minus in debitis, sequi molestias id. Non officia nam adipisci ea
//       laborum ad architecto voluptatum quia fugiat dolorum deserunt repudiandae rerum qui aliquam ex
//       quam omnis, optio numquam molestiae? Aut quae corporis eos. Incidunt iusto culpa eum similique
//       quas enim nisi harum veritatis beatae recusandae numquam exercitationem, nulla dicta,
//       doloribus fuga velit adipisci obcaecati voluptate consectetur. Aperiam minus culpa accusamus
//       cumque, vitae consequuntur?
//     </p>
//   </body>
// </html>
// `);
// let htmlContents = fs.readFileSync("./Pages/index.html", "utf-8");
// // console.log(htmlContents);
// res.writeHead(200, "ok", { "content-type": "text/html" });
// res.end(htmlContents);
// let htmlContents = fs.readFileSync("./Pages/index.html", "utf-8");
// // console.log(htmlContents);
// res.writeHead(200, "ok", { "content-type": "text/plain" });
// res.end(htmlContents);
//! ============= display a css page ===============
// res.writeHead(200, "Ok", { "content-type": "text/css" });
// fs.readFile("./Pages/styles.css", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   res.end(data);
// });
//! ============= display a json file ===============
//   res.writeHead(200, "ok", { "content-type": "application/json" });
//   let jsonContents = fsPromise.readFile("./Pages/data.json");
//   jsonContents
//     .then((data) => {
//       res.end(data);
//     })
//     .catch((err) => res.end(err));
// });

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("server running....");
// });

//! total 5 series of statusCode
//? 1XX ==> informational
//? 2XX ==> successful (200: Ok, 201: ok and created)
//? 3XX ==> redirection (301 : redirection)
//? 4XX ==> client side error (404: page not found)
//? 5XX ==> server side problem (500 : internal serve error)

/* 

req:{}, res:{}

req:{
    headers:value,
    body:value,
    url:"/download",
    params:value,
    query:value,
    cookies:value
    .
    .
    .
    .
    }
    !===================
    res : {
        headers:value,
        method:value
        date:
        origin
        .
        ,
        ,
        ,
        ,
      }

      https://nodejs.org/en ==> home page base-url, "/" --> endpoint of home page
      https://nodejs.org/en/about ==> about page
      localhost:9000/home
      base-url/about
      https://nodejs.org/en/download ==> download page
      base-url/download
      https://nodejs.org/en/blog ==> blog page
      base-url/blog

      ! endpoint ==>/ , /about, /download, /blog

      ! routing --> handling user's multiple endpoint request

*/

//! =================== Routing ====================================

let http = require("http");
let fs = require("fs");
http
  .createServer((req, res) => {
    // console.log(req.url);
    //! home page
    if (req.url === "/home") {
      // res.end("this is home page");
      // pipe() ==> source.pipe(destination)
      res.writeHead(200, "Ok", { "content-type": "text/html" });
      let read = fs.createReadStream("./Pages/index.html", "utf-8");
      read.pipe(res);
    }
    //! download page
    else if (req.url === "/download") {
      // res.end("this is download page");
      fs.createReadStream("./Pages/download.html", "utf-8").pipe(
        res.writeHead(200, "ok", { "content-type": "text/html" })
      );
    }
    //! css contents
    else if (req.url === "/styles") {
      // res.end("this is css page");
      res.writeHead(200, "ok", { "content-type": "text/css" });
      fs.createReadStream("./Pages/styles.css", "utf-8").pipe(res);
    }
    //! json data
    else if (req.url === "/json") {
      // res.end("this is json data");
      res.writeHead(200, "ok", { "content-type": "application/json" });
      fs.createReadStream("./Pages/data.json", "utf-8").pipe(res);
    }
    //! page not found, 404
    else {
      res.writeHead(404, "not found", { "content-type": "text/html" });
      res.end("<h1> Page not found </h1>");
    }
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running on port 9000");
  });

/* 
  
  endpoint ==> /value

  relative path ==> ./ path
  
  */

//C:\Program Files\MongoDB\Server\8.0\log\
//C:\Program Files\MongoDB\Server\8.0\data\

/* 


1) create a new project by clicking at top left corner at the file icon
2) give the project name and click on next then create the project

3) then create a cluster
4) choose the free option and click on create deployment

5) click on create a database user.
6) choose a connection method



kzH8JgcPPUkuEbfT
*/

// mongodb://localhost:27017/
// http://localhost:9000/
