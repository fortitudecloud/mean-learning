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
var inversify_1 = require("inversify");
var client_1 = require("../utils/mongodb/client");
var types_1 = require("../constant/types");
var UserService = (function () {
    function UserService(mongoClient) {
        this.mongoClient = mongoClient;
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.find('user', {}, function (error, data) {
                resolve(data);
            });
        });
    };
    UserService.prototype.getUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.findOneById('user', id, function (error, data) {
                resolve(data);
            });
        });
    };
    UserService.prototype.newUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.insert('user', user, function (error, data) {
                resolve(data);
            });
        });
    };
    UserService.prototype.updateUser = function (id, user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.update('user', id, user, function (error, data) {
                resolve(data);
            });
        });
    };
    UserService.prototype.deleteUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.remove('user', id, function (error, data) {
                resolve(data);
            });
        });
    };
    return UserService;
}());
UserService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.default.MongoDBClient)),
    __metadata("design:paramtypes", [client_1.MongoDBClient])
], UserService);
exports.UserService = UserService;
