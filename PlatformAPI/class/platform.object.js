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
Object.defineProperty(exports, "__esModule", { value: true });
var object_interface_1 = require("../object.interface");
/**
 * Platform object
 */
var PlatformObject = (function (_super) {
    __extends(PlatformObject, _super);
    function PlatformObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PlatformObject;
}(object_interface_1.Object));
exports.PlatformObject = PlatformObject;
