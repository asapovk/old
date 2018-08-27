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
    FinderNav.prototype.expand = function (children, update) {
        this.props.render &&
            typeof this.props.level != 'undefined' &&
            this.props.render(children, this.props.filter ? true : false, this.props.level + 1, this.props.filterPlaceholder, this.updateChildren, update);
        console.log(this.props.children);
    };
    FinderNav.prototype.updateChildren = function () {
        this.expand(this.props.children, true);
    };
    FinderNav.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, children = _a.children;
        return (react_1.default.createElement("div", { className: 'ui-finder-nav', onClick: function () { return _this.expand(children, false); } },
            react_1.default.createElement("div", { className: 'ui-finder-nav-label' },
                label,
                react_1.default.createElement("span", null,
                    react_1.default.createElement(__1.Icon, { type: 'right' })))));
    };
    return FinderNav;
}(react_1.default.Component));
exports.default = FinderNav;
