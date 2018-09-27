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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Themes_1 = __importDefault(require("../Themes"));
var MenuNav = /** @class */ (function (_super) {
    __extends(MenuNav, _super);
    function MenuNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuNav.prototype.render = function () {
        var _this = this;
        var _a = this.props, active = _a.active, onClick = _a.onClick;
        return (react_1.default.createElement(Themes_1.default, null, function (styles) { return (react_1.default.createElement("div", { className: "ui-menu-nav", onClick: onClick, style: {
                color: active ? styles.menu.nav.textColorActive : styles.menu.nav.textColor
            } },
            _this.props.children,
            active && react_1.default.createElement("span", { style: { backgroundColor: styles.menu.nav.textColorActive } }))); }));
    };
    return MenuNav;
}(react_1.Component));
exports.default = MenuNav;
