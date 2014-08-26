var browserify = require("browserify");
var fs = require("fs");
var factor = require('factor-bundle');

var bundle = browserify({
  entries: [__dirname + "/a.js", __dirname + "/b.js"],
  fullPaths: true
});

bundle.require(__dirname + "/c.js", {expose: "c"});

bundle.plugin(factor, {
  o: [__dirname + "/out.a.js", __dirname + "/out.b.js"],
  e: [__dirname + "/a.js", __dirname + "/b.js"]
});

var stream = bundle.bundle();
stream.pipe(fs.createWriteStream("out.common.js"));