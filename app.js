// npm - global command, comes with node
// npm --version / checks version

// local dependency - use it only in this particular project
// npm i <packageName> // how to install local dependency

// glocal dependency
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac) prob requires password

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties ect);
// npm init (step by step, press enter to skip) to create package.json file ***
// npm init -y (everyting default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItem = _.flatMapDeep(items);
console.log(newItem);
