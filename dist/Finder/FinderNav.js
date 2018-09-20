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
var __1 = require("../");
var Themes_1 = __importDefault(require("../Themes"));
var FinderNav = /** @class */ (function (_super) {
    __extends(FinderNav, _super);
    function FinderNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinderNav.prototype.expand = function () {
        if (this.props.setFinderMenu && typeof this.props.finderLevel != 'undefined') {
            this.props.setFinderMenu(this.props.finderLevel + 1, this.props.finderIndex, this.props.filter ? true : false, this.props.filterPlaceholder);
        }
    };
    FinderNav.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, badge = _a.badge, active = _a.active, theme = _a.theme;
        return (react_1.default.createElement(__1.Flexbox, { alignItems: "center", className: "ui-finder-nav" + (active ? " ui-finder-nav-active" : ""), onClick: function () { return _this.expand(); } },
            react_1.default.createElement(__1.Flexbox, { className: 'ui-finder-nav-label', flex: 1, children: label }),
            badge ? react_1.default.createElement(__1.Flexbox, { className: "ui-finder-nav-badge", style: { color: theme.badgeColor } }, badge) : null,
            react_1.default.createElement(__1.Flexbox, { className: 'ui-finder-nav-icon' },
                react_1.default.createElement(__1.Icon, { type: 'right' }))));
    };
    FinderNav.componentName = "FinderNav";
    return FinderNav;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(FinderNav, __assign({}, props, { theme: {
        badgeColor: theme.highlight.rgb
    } }))); })); });
