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
var TextField_1 = require("../TextField");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a = this.props, children = _a.children, header = _a.header, toolsLeft = _a.toolsLeft, toolsRight = _a.toolsRight, style = _a.style, search = _a.search, searchValue = _a.searchValue, searchDefaultValue = _a.searchDefaultValue, onSearch = _a.onSearch;
        var isDouble = (search || toolsLeft);
        var HeaderJSX = !header.label ? header : react_1.default.createElement("div", { className: 'ui-menu-header-title', onClick: header.onAction }, header.label);
        var SearchJSX = (react_1.default.createElement("div", { className: 'ui-menu-interactions-toolsbar-search' },
            react_1.default.createElement(TextField_1.TextField, { className: 'ui-menu-input', value: searchValue, defaultValue: searchDefaultValue, onChange: function (value) { return onSearch && onSearch(value); } })));
        return (react_1.default.createElement("div", { className: 'ui-menu', style: style },
            header && react_1.default.createElement("div", { className: 'ui-menu-header' + (isDouble ? ' header-max' : '') }, HeaderJSX),
            react_1.default.createElement("div", { className: 'ui-menu-interactions' },
                isDouble &&
                    react_1.default.createElement("div", { className: 'ui-menu-interactions-toolsbar' },
                        search && SearchJSX,
                        react_1.default.createElement("div", { className: 'ui-menu-interactions-toolsbar-tools' }, toolsLeft && toolsLeft.map(function (tool, index) { return react_1.default.cloneElement(tool, { key: index }); }))),
                children && react_1.default.createElement("div", { className: 'ui-menu-interactions-navbar' + (isDouble ? ' nav-min' : '') }, children)),
            toolsRight && react_1.default.createElement("div", { className: 'ui-menu-toolsbar' + (isDouble ? ' bar-max' : '') },
                react_1.default.createElement("div", { className: 'ui-menu-toolsbar-tools' }, toolsRight.map(function (tool, index) { return react_1.default.cloneElement(tool, { key: index }); })))));
    };
    return Menu;
}(react_1.default.Component));
exports.default = Menu;
