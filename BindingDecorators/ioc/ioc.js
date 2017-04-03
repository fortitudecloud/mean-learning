"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
exports.inject = inversify_1.inject;
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
exports.autoProvide = inversify_binding_decorators_1.autoProvide;
var inversify_logger_middleware_1 = require("inversify-logger-middleware");
var container = new inversify_1.Container();
exports.container = container;
if (process.env.NODE_ENV === 'development') {
    var logger = inversify_logger_middleware_1.makeLoggerMiddleware();
    container.applyMiddleware(logger);
}
var provide = inversify_binding_decorators_1.makeProvideDecorator(container);
exports.provide = provide;
var fluentProvider = inversify_binding_decorators_1.makeFluentProvideDecorator(container);
var provideNamed = function (identifier, name) {
    return fluentProvider(identifier)
        .whenTargetNamed(name)
        .done();
};
exports.provideNamed = provideNamed;
