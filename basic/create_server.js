var http = require("http");

// A response header is required
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hii..!! My name is Ankit..");
});

// Listening to the Server at port 3000
server.listen(3000, "127.0.0.1");
console.log("Listening at port 3000");
