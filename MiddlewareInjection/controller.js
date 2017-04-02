"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
function controllerFactory(container) {
    var TestController = (function () {
        function TestController() {
        }
        TestController.prototype.getUserName = function (req, res) {
            res.send(req.user.username);
        };
        return TestController;
    }());
    __decorate([
        inversify_express_utils_1.Get('/', container.get('CustomMiddleware'), container.get('Morgan')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestController.prototype, "getUserName", null);
    TestController = __decorate([
        inversify_1.injectable(),
        inversify_express_utils_1.Controller('/'),
        __metadata("design:paramtypes", [])
    ], TestController);
    return TestController;
}
exports.controllerFactory = controllerFactory;
//# sourceMappingURL=controller.js.map