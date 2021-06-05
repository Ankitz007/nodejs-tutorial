var fs = require("fs");

// Synchronous method to read file
var readMe = fs.readFileSync("README.md", "utf8");
console.log(readMe);

console.log("This happens after the file is read.");

// Writing to a file synchronously
fs.writeFileSync("writeme.txt", "This text is being written into writeme.");

// Asynscronous method to read file
fs.readFile("README.md", "utf8", function (err, data) {
  console.log(data);
});
console.log("This may happen before or after the file is read. [Asynchronous]");
