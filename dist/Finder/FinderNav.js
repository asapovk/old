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
    function FinderNav(props) {
        var _this = _super.call(this, props) || this;
        _this.updateChildren = _this.updateChildren.bind(_this);
        return _this;
    }
    FinderNav.prototype.expand = function () {
        this.props.render &&
            typeof this.props.level != 'undefined' &&
            this.props.render(this.props.children, this.props.filter ? true : false, this.props.level + 1, this.props.filterPlaceholder, this.updateChildren);
    };
    FinderNav.prototype.updateChildren = function () {
        return this.props.children;
    };
    FinderNav.prototype.render = function () {
        var _this = this;
        var label = this.props.label;
        return (react_1.default.createElement("div", { className: 'ui-finder-nav', onClick: function () { return _this.expand(); } },
            react_1.default.createElement("div", { className: 'ui-finder-nav-label' },
                label,
                react_1.default.createElement("span", null,
                    react_1.default.createElement(__1.Icon, { type: 'right' })))));
    };
    return FinderNav;
}(react_1.default.Component));
exports.default = FinderNav;
