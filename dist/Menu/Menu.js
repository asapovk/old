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
        var ToolBarTSX = (react_1.default.createElement("div", { className: 'ui-menu-interactions-toolsbar-tools', style: { height: search ? '40px' : '60px' } }, toolsLeft && toolsLeft.map(function (tool, index) { return react_1.default.cloneElement(tool, { key: index }); })));
        var SearchBarTSX = (react_1.default.createElement("div", { className: 'ui-menu-interactions-toolsbar' },
            react_1.default.createElement("div", { className: 'ui-menu-interactions-toolsbar-search', style: __assign({}, theme.searchBar) },
                react_1.default.createElement("input", { value: searchValue, defaultValue: searchDefaultValue, onChange: function (event) {
                        _this.setState({ searchField: event.target.value });
                        onSearch && onSearch(event.target.value);
                    } }),
                react_1.default.createElement("span", { className: 'ui-menu-interactions-toolsbar-search-icon', onClick: function () { return _this.props.onSearchSubmit && _this.props.onSearchSubmit(_this.state.searchField); } },
                    react_1.default.createElement(Icon_1.Icon, { type: 'search' }))),
            ToolBarTSX));
        return (react_1.default.createElement("div", { className: 'ui-menu', style: __assign({}, theme.menu, style) },
            header && react_1.default.createElement("div", { className: 'ui-menu-header' + (search ? ' header-max' : '') }, !header.label ? header : react_1.default.createElement("div", { className: 'ui-menu-header-title', onClick: header.onAction }, header.label)),
            react_1.default.createElement("div", { className: 'ui-menu-interactions' },
                search && SearchBarTSX,
                children && react_1.default.createElement("div", { className: 'ui-menu-interactions-navbar' + (search ? ' nav-min' : '') },
                    children,
                    !search && ToolBarTSX)),
            toolsRight && react_1.default.createElement("div", { className: 'ui-menu-toolsbar' + (search ? ' bar-max' : '') },
                react_1.default.createElement("div", { className: 'ui-menu-toolsbar-tools' }, toolsRight.map(function (tool, index) { return react_1.default.cloneElement(tool, { key: index }); })))));
    };
    return Menu;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(Menu, __assign({}, props, { theme: {
        menu: {
            backgroundColor: theme.interface.rgb,
            borderColor: theme.pale.rgb,
        },
        searchBar: {
            background: theme.interface.rgb,
            borderColor: theme.pale.rgb,
            boxShadow: "0px 2px 4px 0px " + theme.shadow.rgb,
            borderRadius: theme.corner
        }
    } }))); })); });
