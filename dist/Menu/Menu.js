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
var TextField_1 = require("../TextField");
var Icon_1 = require("../Icon");
var Themes_1 = __importDefault(require("../Themes"));
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            searchField: ''
        };
        return _this;
    }
    Menu.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, header = _a.header, toolsLeft = _a.toolsLeft, toolsRight = _a.toolsRight, style = _a.style, search = _a.search, searchValue = _a.searchValue, searchDefaultValue = _a.searchDefaultValue, onSearch = _a.onSearch, theme = _a.theme;
        var isDouble = (search || toolsLeft);
        var HeaderJSX = !header.label ? header : react_1.default.createElement("div", { className: 'ui-menu-header-title', onClick: header.onAction }, header.label);
        var SearchIconTSX = react_1.default.createElement("span", { className: 'ui-menu-interactions-toolsbar-search-icon', onClick: function () { return _this.props.onSearchSubmit && _this.props.onSearchSubmit(_this.state.searchField); } },
            react_1.default.createElement(Icon_1.Icon, { type: 'search' }));
        var SearchJSX = (react_1.default.createElement("div", { className: 'ui-menu-interactions-toolsbar-search', style: {
                background: theme.searchBackgroundColor,
                borderColor: theme.borderColor,
                boxShadow: "0px 2px 4px 0px " + theme.shadowColor
            } },
            react_1.default.createElement(TextField_1.TextField, { value: searchValue, defaultValue: searchDefaultValue, onChange: function (value) {
                    _this.setState({ searchField: value });
                    onSearch && onSearch(value);
                }, decoration: 'none' }),
            SearchIconTSX));
        return (react_1.default.createElement("div", { className: 'ui-menu', style: __assign({ backgroundColor: theme.backgroundColor }, style) },
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
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(Menu, __assign({}, props, { theme: {
        borderColor: theme.pale.rgb,
        actionColor: theme.highlight.rgb,
        backgroundColor: theme.interface.rgb,
        searchBackgroundColor: theme.background.rgb,
        shadowColor: theme.shadow.rgb
    } }))); })); });
