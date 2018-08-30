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
var __1 = require("../");
var FinderNav = /** @class */ (function (_super) {
    __extends(FinderNav, _super);
    function FinderNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinderNav.prototype.expand = function () {
        if (this.props.setMenu && typeof this.props.level != 'undefined') {
            this.props.setMenu(this.props.level + 1, this.props.index, this.props.filter ? true : false, this.props.filterPlaceholder);
        }
    };
    FinderNav.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, badge = _a.badge;
        var active = false;
        return (react_1.default.createElement(__1.Flexbox, { alignItems: "center", className: "ui-finder-nav" + (active ? " ui-finder-nav-active" : ""), onClick: function () { return _this.expand(); } },
            react_1.default.createElement(__1.Flexbox, { className: 'ui-finder-nav-label', flex: 1, children: label }),
            badge ? react_1.default.createElement(__1.Flexbox, { className: "ui-finder-nav-badge" }, badge) : null,
            react_1.default.createElement(__1.Flexbox, { className: 'ui-finder-nav-icon' },
                react_1.default.createElement(__1.Icon, { type: 'right' }))));
    };
    FinderNav.componentName = "FinderNav";
    return FinderNav;
}(react_1.default.Component));
exports.default = FinderNav;
