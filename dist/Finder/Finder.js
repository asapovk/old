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
            menues: [],
            fetching: false
        };
        _this.submenu = _this.submenu.bind(_this);
        _this.filterChange = _this.filterChange.bind(_this);
        return _this;
    }
    Finder.prototype.componentWillMount = function () {
        var menues = [{
                childrens: this.passFinderProps(this.props.children, 0),
                filter: this.props.filter, filterValue: '',
                filterPlaceholder: this.props.filterPlaceholder,
                updateChildren: this.updateChildren
            }];
        this.setState({ menues: menues });
    };
    Finder.prototype.updateChildren = function () {
        var menues = [{
                childrens: this.passFinderProps(this.props.children, 0),
                filter: this.props.filter, filterValue: '',
                filterPlaceholder: this.props.filterPlaceholder,
                updateChildren: this.updateChildren
            }];
        this.setState({ menues: menues });
    };
    Finder.prototype.passFinderProps = function (children, level) {
        var _this = this;
        return react_1.default.Children.map(children, function (child) {
            if (child && child.type && child.type.prototype) {
                if (child.type.prototype.constructor.name === "FinderNav" || child.type.prototype.constructor.name === "FilterSection") {
                    return react_1.default.cloneElement(child, { render: _this.submenu, level: level });
                }
            }
            return child;
        });
    };
    Finder.prototype.filterChange = function (value, level) {
        var menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };
    ;
    Finder.prototype.submenu = function (children, filter, level, filterPlaceholder, updateChildren, update) {
        var menues = this.state.menues;
        menues[level] = {
            childrens: this.passFinderProps(children, level),
            filter: filter, filterValue: '',
            filterPlaceholder: filterPlaceholder,
            updateChildren: updateChildren
        };
        menues.length = level + 1;
        this.setState({ menu: menues, fetching: update });
    };
    Finder.prototype.componentWillReceiveProps = function (nextProps) {
        //this.state.menues && this.state.menues.map(menu => menu.updateChildren())
        console.log(nextProps);
        this.updateChildren();
    };
    Finder.prototype.render = function () {
        var _this = this;
        var MenuesTSX = (this.state.menues.map(function (menu, index) { return (react_1.default.createElement("div", { className: 'ui-finder-menu', key: index },
            menu.filter && react_1.default.createElement(FinderFilter_1.default, { level: index, filterChange: _this.filterChange, placeholder: menu.filterPlaceholder }),
            react_1.default.createElement("div", { className: 'ui-finder-menu-items' }, menu.childrens && menu.childrens.filter(function (child) { return child.props.label.includes(menu.filterValue); })))); }));
        return (react_1.default.createElement("div", { className: 'ui-finder' }, MenuesTSX));
    };
    return Finder;
}(react_1.default.Component));
exports.default = Finder;
