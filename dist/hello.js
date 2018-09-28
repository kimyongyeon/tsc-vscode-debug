"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ani = require("./animal");
var Parent = /** @class */ (function () {
    function Parent() {
        this.nameByPhone = "parent hello";
    }
    return Parent;
}());
var Startup = /** @class */ (function (_super) {
    __extends(Startup, _super);
    function Startup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Startup.prototype.test = function () {
        var nn = "phone ===> " + this.nameByPhone;
        console.log(nn);
        return nn;
    };
    Startup.prototype.test2 = function () {
        console.log("test2() called");
        return "";
    };
    Startup.main = function () {
        var su = new Startup();
        su.test();
        var a = new ani.Animal();
        a.print();
        var name = "hello tsc";
        console.log("h1");
        console.log("h2");
        return 0;
    };
    return Startup;
}(Parent));
Startup.main();
//# sourceMappingURL=hello.js.map