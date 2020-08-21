const path = require("path");

// gives path to the file that is responsible for running our app
module.exports = path.dirname(process.mainModule.filename);
