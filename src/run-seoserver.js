var config = require("../lib/config");
var port = process.argv[2] || config.defaultPort;
Seoserver = require('./seoserver');
var server = new Seoserver({defaultPort: parseInt(port)});
server.start();
