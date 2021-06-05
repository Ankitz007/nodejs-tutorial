var fs = require("fs");

// Deleting a file
// fs.unlink("writeme.txt", function (err) {
//   if (err == null) console.log("The file has been deleted.");
//   else console.log(err);
// });

// Creating a directory asynchronously
fs.mkdir("../ankit", function () {
  console.log("The directory was created successfully.");
});

// Removing a directory
// The directory needs to be empty in order to be deleted by fs
// fs.rmdir("../ankit", function () {
//   console.log("The directory was removed successfully.");
// });

// fs.mkdirSync("example_dir", function () {
//   //   fs.writeFile("writeme.txt", "This is a test file.");
// });

// Writing a file in the directory
// fs.writeFileSync("./example_dir/writeme.txt", "This is a trial.");

// Deleting the file followed by the directory
// fs.unlink("./example_dir/writeme.txt", function () {
//   fs.rmdir("./example_dir", function () {
//     console.log("The operation was successfull.");
//   });
// });

// Creating a directory and thereon populating it with a file
// fs.mkdir("trial", function () {
//   fs.writeFileSync("./trial/writeme.txt", "This is a trial.");
//   console.log("The operation was successfull.");
// });
