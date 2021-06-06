const fs = require("fs");

let myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");
let myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt");

// Basically, the following code can be written in one line using pipe
//
// myReadStream.on("data", function (chunk) {
//   myWriteStream.write(chunk);
// });

// One liner for above code
myReadStream.pipe(myWriteStream);

console.log("Execution successful");
