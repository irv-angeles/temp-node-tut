const { readFileSync, writeFileSync } = require("fs");
console.log("start");

//reads file. Gave path and encode
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//filename if not there it will create it and value we want to pass
//The flag: "a" option indicates that the file should be opened in "append" mode. content will be added to the end of the file if it already exists, rather than overwriting it. If the file does not exist, it will be created.
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  {
    flag: "a",
  }
);
console.log("done with this taks");
console.log("starting the next one");
