let http = require("http");

http
  .createServer((req, res) => {
    //! home page
    if (req.url == "/") {
      res.writeHead(200, "ok", { "Content-type": "text/plain" });
      res.end("this is home page");
    }

    //! download page
    else if (req.url === "/download") {
      res.end("this is download page");
    }

    //! 404 page not found
    else {
      res.end("404 page not found");
    }
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running.....");
  });
// https://www.amazon.in/Nilkamal-Apple-Junior-Study-Yellow/dp/B0764DZXDV/?_encoding=UTF8&pd_rd_w=iD73o&content-id=amzn1.sym.0e03aefb-8b93-49f8-beeb-6d21836a1b3d&pf_rd_p=0e03aefb-8b93-49f8-beeb-6d21836a1b3d&pf_rd_r=FYA1W86VV8V1V9FPV83S&pd_rd_wg=TdNt3&pd_rd_r=6e9aed12-164e-4e00-a516-429bd5f46a30&ref_=pd_hp_d_atf_dealz_cs&th=1
