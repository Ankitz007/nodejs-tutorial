var http = require("http");
var fs = require("fs");

// fs.createReadStream inherits the EventEmitter

// To get in term of bits
var myStream = fs.createReadStream(__dirname + "/readme.txt");

// To get in readable format
// var myStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");
var i = 0;
myStream.on("data", function (chunk) {
  console.log("New chunk received: " + String(i));
  console.log(chunk);
  i = i + 1;
});
