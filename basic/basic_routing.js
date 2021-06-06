const http = require("http");
const fs = require("fs");

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hii There!!!");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let myReadStream = fs.createReadStream(__dirname + "/contact.html", "utf8");
    myReadStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    let myReadStream = fs.createReadStream(__dirname + "/404.html", "utf8");
    myReadStream.pipe(res);
  }
});

server.listen(3000, "localhost");
console.log("Listening at port 3000");
