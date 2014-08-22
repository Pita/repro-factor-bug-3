var browserify = require("browserify");
var fs = require("fs");
var factor = require('factor-bundle');

var bundle = browserify({
  files: ["a.js"]
});

bundle.require("./b.js", {expose: "b"});
bundle.require("./c.js", {expose: "c"});

bundle.plugin(factor, {
  e: ["a.js"],
  o: ["a.build.js"]
});

var stream = bundle.bundle();
stream.pipe(fs.createWriteStream("bundle.js"));