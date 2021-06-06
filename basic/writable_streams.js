const fs = require("fs");

let myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");
let myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt");

let i = 0;

myReadStream.on("data", function (chunk) {
  console.log("Reading Chunk: " + String(i));
  myWriteStream.write(chunk);
  console.log("Chunk " + String(i) + " written.");
  i = i + 1;
});
