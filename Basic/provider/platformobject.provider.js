"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var object_provider_1 = require("./object.provider");
var _PlatformObjectProvider = (function (_super) {
    __extends(_PlatformObjectProvider, _super);
    function _PlatformObjectProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.objectStorage = [{
                _id: "1",
                isDeleted: false,
                createdDate: new Date(2017, 1, 1),
                modifiedDate: new Date(2017, 1, 1),
                name: "Package",
                description: "Packages of service and product offerings"
            }, {
                _id: "2",
                isDeleted: false,
                createdDate: new Date(2017, 1, 1),
                modifiedDate: new Date(2017, 1, 1),
                name: "Vendor",
                description: "Vendor of services and products"
            }];
        return _this;
    }
    return _PlatformObjectProvider;
}(object_provider_1._ObjectProvider));
_PlatformObjectProvider = __decorate([
    inversify_1.injectable()
], _PlatformObjectProvider);
exports._PlatformObjectProvider = _PlatformObjectProvider;
