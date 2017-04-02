"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var morgan = require("morgan");
var inversify_express_utils_1 = require("inversify-express-utils");
var controller_1 = require("./controller");
var container = new inversify_1.Container();
container.bind('Morgan').toConstantValue(morgan('combined'));
container.bind('CustomMiddleware').toConstantValue(function customMiddleware(req, res, next) {
    req.user = {
        username: 'foo',
        password: 'bar'
    };
    next();
});
var controller = controller_1.controllerFactory(container);
container.bind(inversify_express_utils_1.TYPE.Controller).to(controller).whenTargetNamed('TestController');
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.build().listen('3000', function () { console.log('Listening on port 3000'); });
//# sourceMappingURL=main.js.map