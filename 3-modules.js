// Modules - Encapsulated code (only share minimum)
//CommonJS, every file ismodule (by defult)
//all files you get them with "./"
const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
sayHi("susan");
sayHi(names.peter);
sayHi(names.john);
