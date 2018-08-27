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
            menues: []
        };
        _this.setMenues = _this.setMenues.bind(_this);
        _this.filterChange = _this.filterChange.bind(_this);
        return _this;
    }
    Finder.prototype.componentWillReceiveProps = function () {
        this.state.menues.map(function (menu) {
            console.log(menu);
            menu.updateChildren();
        });
    };
    Finder.prototype.passFinderProps = function (children, level) {
        var _this = this;
        return react_1.default.Children.map(children, function (child) {
            if (child && child.type && child.type.prototype) {
                if (child.type.prototype.constructor.name === "FinderNav" || child.type.prototype.constructor.name === "FilterSection") {
                    return react_1.default.cloneElement(child, { render: _this.setMenues, level: level });
                }
            }
            return child;
        });
    };
    Finder.prototype.setMenues = function (children, filter, level, filterPlaceholder, updateChildren) {
        var menues = this.state.menues;
        menues[level] = {
            childrens: this.passFinderProps(children, level),
            filter: filter,
            filterValue: '',
            filterPlaceholder: filterPlaceholder,
            updateChildren: updateChildren
        };
        menues.length = level + 1;
        this.setState({ menu: menues });
    };
    Finder.prototype.filterChange = function (value, level) {
        var menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };
    ;
    Finder.prototype.render = function () {
        var _this = this;
        var _a = this.props, filter = _a.filter, filterPlaceholder = _a.filterPlaceholder;
        var MenuesTSX = (this.state.menues.map(function (menu, index) { return (react_1.default.createElement("div", { className: 'ui-finder-menu', key: index },
            menu.filter && react_1.default.createElement(FinderFilter_1.default, { level: index, filterChange: _this.filterChange, placeholder: menu.filterPlaceholder }),
            react_1.default.createElement("div", { className: 'ui-finder-menu-items' }, menu.childrens && menu.childrens.filter(function (child) { return child.props.label.includes(menu.filterValue); })))); }));
        return (react_1.default.createElement("div", { className: 'ui-finder' },
            react_1.default.createElement("div", { className: 'ui-finder-menu' },
                filter && react_1.default.createElement(FinderFilter_1.default, { level: 0, filterChange: this.filterChange, placeholder: filterPlaceholder }),
                this.passFinderProps(this.props.children, 0)),
            MenuesTSX));
    };
    return Finder;
}(react_1.default.Component));
exports.default = Finder;
