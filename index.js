// non global modueles
const fs = require("fs");
const app = require("./app");

fs.writeFileSync("newFile.txt", "Here is the data in file")