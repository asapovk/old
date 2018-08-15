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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MenuNav = /** @class */ (function (_super) {
    __extends(MenuNav, _super);
    function MenuNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuNav.prototype.render = function () {
        var _a = this.props, active = _a.active, onClick = _a.onClick;
        var classes = 'ui-menu-nav';
        if (active)
            classes += ' nav-active';
        return react_1.default.createElement("div", { className: classes, onClick: onClick },
            this.props.children,
            active && react_1.default.createElement("span", null));
    };
    return MenuNav;
}(react_1.default.Component));
exports.default = MenuNav;