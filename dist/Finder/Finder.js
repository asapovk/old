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
var FinderFilter_1 = __importDefault(require("./FinderFilter"));
var __1 = require("../");
var Finder = /** @class */ (function (_super) {
    __extends(Finder, _super);
    function Finder(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            menues: [],
            filterValue: ''
        };
        _this.setMenues = _this.setMenues.bind(_this);
        _this.onFilterChange = _this.onFilterChange.bind(_this);
        return _this;
    }
    Finder.prototype.componentWillMount = function () {
        this.setMenues(0, 'root', this.props.filter, this.props.filterPlaceholder);
    };
    Finder.prototype.setMenues = function (level, index, filter, filterPlaceholder) {
        var menues = this.state.menues;
        menues[level] = {
            index: index,
            filter: filter,
            filterValue: '',
            filterPlaceholder: filterPlaceholder,
        };
        menues.length = level + 1;
        this.setState({ menues: menues });
    };
    Finder.prototype.onFilterChange = function (value, level) {
        var menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };
    ;
    Finder.prototype.filterChildren = function (children, filterValue) {
        if (children) {
            return children.filter(function (child) { return child.props.label && child.props.label.toUpperCase().includes(filterValue.toUpperCase()); });
        }
        return children;
    };
    Finder.prototype.passProps = function (children, level) {
        var _this = this;
        var counter = 0;
        return react_1.default.Children.map(children, function (child) {
            var index = level + '.' + counter;
            var active = (_this.state.menues.find(function (menu) { return menu.index == index; }));
            return react_1.default.cloneElement(child, { setFinderMenu: _this.setMenues, finderLevel: level, finderIndex: level + '.' + counter++, active: active });
        });
    };
    Finder.prototype.getCurrentChildren = function (children, filterValue, level) {
        var _this = this;
        var currentChildren = children;
        var _loop_1 = function (i) {
            currentChildren = this_1.passProps(react_1.default.Children.map(currentChildren, function (child) {
                if (child.props.finderIndex === _this.state.menues[i].index)
                    return child.props.children;
            }), i);
        };
        var this_1 = this;
        for (var i = 1; i <= level; i++) {
            _loop_1(i);
        }
        return this.filterChildren(currentChildren, filterValue);
    };
    Finder.prototype.render = function () {
        var _this = this;
        var style = this.props.style;
        var children = this.passProps(this.props.children, 0);
        var MenuesTSX = function (style) { return (_this.state.menues.map(function (menu, index) { return (react_1.default.createElement(__1.Flexbox, { column: true, className: 'ui-finder-menu', key: index, style: {
                borderColor: style.borderColor,
            } },
            menu.filter && react_1.default.createElement(FinderFilter_1.default, { level: index, onChange: _this.onFilterChange, placeholder: menu.filterPlaceholder }),
            react_1.default.createElement(__1.Flexbox, { column: true, className: 'ui-finder-menu-items' }, _this.getCurrentChildren(children, menu.filterValue, index)))); })); };
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement(__1.Flexbox, { style: __assign({ color: styles.finder.main.textColor, backgroundColor: styles.finder.main.backgroundColor, borderColor: styles.finder.main.borderColor }, style), inline: true, className: 'ui-finder' }, MenuesTSX(styles.finder.main))); }));
    };
    return Finder;
}(react_1.default.Component));
exports.default = Finder;
