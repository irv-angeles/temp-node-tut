const path = require("path");

//shows our computer path separator here is "/"
console.log(path.sep);

//created a path by joining folders and files
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

//last portion of our path (test.txt)
const base = path.basename(filePath);
console.log(base);

//returns and absolute path
const absolute = path.resolve(__dirname, "content", "subfoler", "test.txt");
console.log(absolute);
