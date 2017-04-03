"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var _ObjectProvider = (function () {
    function _ObjectProvider() {
    }
    _ObjectProvider.prototype.insert = function (obj) {
        var _this = this;
        return new Promise(function (res, rej) {
            try {
                obj._id = obj._id || _this.objectStorage.length.toString();
                obj.createdDate = new Date();
                obj.isDeleted = false;
                obj.modifiedDate = new Date();
                _this.objectStorage.push(obj);
                res(obj);
            }
            catch (err) {
                rej(err);
            }
        });
    };
    _ObjectProvider.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (res, rej) {
            try {
                _this.objectStorage.map(function (_obj) {
                    if (_obj._id === id)
                        res(_obj);
                });
            }
            catch (err) {
                rej(err);
            }
        });
    };
    _ObjectProvider.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            res(_this.objectStorage);
        });
    };
    _ObjectProvider.prototype.update = function (obj) {
        var _this = this;
        return new Promise(function (res, rej) {
            var found = false;
            var idx;
            _this.objectStorage.map(function (_obj, index) {
                if (_obj._id === obj._id) {
                    found = true;
                    idx = index;
                }
            });
            if (found) {
                _this.objectStorage[idx] = obj;
                res(obj);
            }
            else
                rej(false);
        });
    };
    _ObjectProvider.prototype.remove = function (obj) {
        var _this = this;
        return new Promise(function (res, rej) {
            var found = false;
            var tempStorage = [];
            _this.objectStorage.map(function (_obj, index) {
                if (_obj._id === obj._id) {
                    found = true;
                }
                else {
                    tempStorage.push(_obj);
                }
            });
            if (found) {
                _this.objectStorage = tempStorage;
                res(true);
            }
            else {
                rej(false);
            }
        });
    };
    return _ObjectProvider;
}());
_ObjectProvider = __decorate([
    inversify_1.injectable()
], _ObjectProvider);
exports._ObjectProvider = _ObjectProvider;
