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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = require("inversify-express-utils");
var ioc_1 = require("../ioc/ioc");
var types_1 = require("../constant/types");
var tags_1 = require("../constant/tags");
var user_1 = require("../service/user");
var UserController = (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.getUsers = function () {
        return this.userService.getUsers();
    };
    UserController.prototype.getUser = function (request) {
        return this.userService.getUser(request.params.id);
    };
    UserController.prototype.newUser = function (request) {
        return this.userService.newUser(request.body);
    };
    UserController.prototype.updateUser = function (request) {
        return this.userService.updateUser(request.params.id, request.body);
    };
    UserController.prototype.deleteUser = function (request) {
        return this.userService.deleteUser(request.params.id);
    };
    return UserController;
}());
__decorate([
    inversify_express_utils_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    inversify_express_utils_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    inversify_express_utils_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "newUser", null);
__decorate([
    inversify_express_utils_1.Put('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    inversify_express_utils_1.Delete('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    ioc_1.provideNamed(inversify_express_utils_1.TYPE.Controller, tags_1.default.UserController),
    inversify_express_utils_1.Controller('/user'),
    __param(0, ioc_1.inject(types_1.default.UserService)),
    __metadata("design:paramtypes", [user_1.UserService])
], UserController);
exports.UserController = UserController;
