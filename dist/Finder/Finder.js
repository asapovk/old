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
var FinderFilter_1 = __importDefault(require("./FinderFilter"));
var Finder = /** @class */ (function (_super) {
    __extends(Finder, _super);
    function Finder(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            submenu: [],
        };
        _this.submenu = _this.submenu.bind(_this);
        return _this;
    }
    Finder.prototype.passProps = function (children, level) {
        var _this = this;
        return react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, { render: _this.submenu, level: level });
        });
    };
    Finder.prototype.submenu = function (children, filter, level) {
        var SubmenuTSX = children && (react_1.default.createElement("div", { className: 'ui-finder-submenu' },
            filter && react_1.default.createElement(FinderFilter_1.default, null),
            react_1.default.createElement("div", { className: 'ui-finder-menu-items' }, this.passProps(children, level))));
        var submenu = this.state.submenu;
        submenu[level] = SubmenuTSX;
        submenu.length = level + 1;
        this.setState({ submenu: submenu });
    };
    Finder.prototype.render = function () {
        var _a = this.props, filter = _a.filter, children = _a.children;
        var childrenWithProps = this.passProps(children, -1);
        var SubmenuTSX = (this.state.submenu.map(function (menu) { return menu; }));
        return (react_1.default.createElement("div", { className: 'ui-finder' },
            react_1.default.createElement("div", { className: 'ui-finder-menu' },
                filter && react_1.default.createElement(FinderFilter_1.default, null),
                react_1.default.createElement("div", { className: 'ui-finder-menu-items' }, childrenWithProps)),
            SubmenuTSX));
    };
    return Finder;
}(react_1.default.Component));
exports.default = Finder;
