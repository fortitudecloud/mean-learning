"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Object storage service */
var ObjectStore = (function () {
    function ObjectStore() {
    }
    ObjectStore.prototype.create = function (obj) {
        return this.objProvider.insert(obj);
    };
    ObjectStore.prototype.read = function (id) {
        return this.objProvider.find(id);
    };
    ObjectStore.prototype.readAll = function () {
        return this.objProvider.findAll();
    };
    ObjectStore.prototype.update = function (obj) {
        return this.objProvider.update(obj);
    };
    ObjectStore.prototype.delete = function (obj) {
        return this.objProvider.remove(obj);
    };
    return ObjectStore;
}());
exports.ObjectStore = ObjectStore;
