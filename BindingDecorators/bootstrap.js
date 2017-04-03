"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = require("inversify-express-utils");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var ioc_1 = require("./ioc/ioc");
// load all injectable entities.
// the @provide() annotation will then automatically register them.
require("./ioc/loader");
// start the server
var server = new inversify_express_utils_1.InversifyExpressServer(ioc_1.container);
server.setConfig(function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(helmet());
});
var app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');
exports = module.exports = app;
