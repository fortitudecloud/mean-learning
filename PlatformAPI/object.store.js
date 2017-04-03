"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
/**
 * Base object storage service
 */
var _ObjectStore = (function () {
    function _ObjectStore() {
    }
    _ObjectStore.prototype.create = function (obj) {
        return this.objectProvider.insert(obj);
    };
    _ObjectStore.prototype.read = function (id) {
        return this.objectProvider.find(id);
    };
    _ObjectStore.prototype.readAll = function () {
        return this.objectProvider.findAll();
    };
    _ObjectStore.prototype.update = function (obj) {
        return this.objectProvider.update(obj);
    };
    _ObjectStore.prototype.delete = function (obj) {
        return this.objectProvider.remove(obj);
    };
    return _ObjectStore;
}());
_ObjectStore = __decorate([
    inversify_1.injectable()
], _ObjectStore);
exports._ObjectStore = _ObjectStore;
