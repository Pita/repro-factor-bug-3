var vm = require("vm");
var fs = require("fs");

var common = fs.readFileSync('out.common.js', 'utf8');
var a = fs.readFileSync('out.a.js', 'utf8');

vm.runInNewContext(common + a, { console: { log: function (msg) {
  console.log(msg);
} } });