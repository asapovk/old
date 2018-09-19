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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Themes_1 = __importDefault(require("../Themes"));
var MenuNav = /** @class */ (function (_super) {
    __extends(MenuNav, _super);
    function MenuNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuNav.prototype.render = function () {
        var _a = this.props, active = _a.active, onClick = _a.onClick, theme = _a.theme;
        return (react_1.default.createElement("div", { className: "ui-menu-nav", onClick: onClick, style: {
                color: active ? theme.textColorActive : theme.textColor
            } },
            this.props.children,
            active && react_1.default.createElement("span", { style: { backgroundColor: theme.textColorActive } })));
    };
    return MenuNav;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(MenuNav, __assign({}, props, { theme: {
        textColor: theme.text,
        textColorActive: theme.highlight,
    } }))); })); });
