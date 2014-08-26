var browserify = require("browserify");
var fs = require("fs");
var factor = require('factor-bundle');

var bundle = browserify({
  entries: ["./a.js", "./b.js"]
});

bundle.require(__dirname + "/c.js", {expose: "c"});

bundle.plugin(factor, {
  o: ["./out.a.js", "./out.b.js"],
  e: ["./a.js", "./b.js"]
});

var stream = bundle.bundle();
stream.pipe(fs.createWriteStream("out.common.js"));