"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent() {
        this.one = 10;
        this.two = 10;
        this.three = 10;
        this.one;
        this.two;
        this.three;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(age) {
        var _this = _super.call(this) || this;
        _this.age = age;
        _this.one;
        _this.two;
        return _this;
    }
    return Child;
}(Parent));
var p = new Parent();
var c = new Child(20);
c.age;
