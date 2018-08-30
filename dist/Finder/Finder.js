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
            return children.filter(function (child) { return child.props.label && child.props.label.includes(filterValue); });
        }
        return children;
    };
    Finder.prototype.passFinderProps = function (children, level) {
        var _this = this;
        var counter = 0;
        return react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, { setMenu: _this.setMenues, level: level, index: level + '.' + counter++ });
        });
    };
    Finder.prototype.getCurrentChildren = function (children, menu, level) {
        var _this = this;
        var currentChildren = children;
        var _loop_1 = function (i) {
            console.log(currentChildren, this_1.state.menues[i].index);
            currentChildren = this_1.passFinderProps(react_1.default.Children.map(currentChildren, function (child) {
                if (child.props.index === _this.state.menues[i].index)
                    return child.props.children;
            }), i);
        };
        var this_1 = this;
        for (var i = 1; i <= level; i++) {
            _loop_1(i);
        }
        return this.filterChildren(currentChildren, menu.filterValue);
    };
    Finder.prototype.render = function () {
        var _this = this;
        var style = this.props.style;
        var children = this.passFinderProps(this.props.children, 0);
        var MenuesTSX = (this.state.menues.map(function (menu, index) { return (react_1.default.createElement(__1.Flexbox, { column: true, className: 'ui-finder-menu', key: index },
            menu.filter && react_1.default.createElement(FinderFilter_1.default, { level: index, onChange: _this.onFilterChange, placeholder: menu.filterPlaceholder }),
            react_1.default.createElement(__1.Flexbox, { column: true, className: 'ui-finder-menu-items' }, _this.getCurrentChildren(children, menu, index)))); }));
        return (react_1.default.createElement(__1.Flexbox, { style: style, inline: true, className: 'ui-finder' }, MenuesTSX));
    };
    return Finder;
}(react_1.default.Component));
exports.default = Finder;
