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
            menues: []
        };
        _this.setMenues = _this.setMenues.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    Finder.prototype.findComponentByIndex = function (childs, index) {
        for (var i = 0; i < childs.length; i++) {
            var child = childs[i];
            if (!child.props || !child.props.index) {
                continue;
            }
            if (child.props.index === index) {
                return child.props.children;
            }
            var propsChild = child.props.children;
            if (child.props.children) {
                if (!Array.isArray(propsChild)) {
                    propsChild = [propsChild];
                }
                var result = this.findComponentByIndex([propsChild], index);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    };
    Finder.prototype.passFinderProps = function (children, menu) {
        var _this = this;
        if (menu === void 0) { menu = null; }
        var level = 0;
        if (menu) {
            level = menu.level + 1;
            children = this.findComponentByIndex(children, menu.index);
        }
        var counter = 0;
        return react_1.default.Children.map(children, function (child) {
            if (child && child.type && child.type.prototype) {
                if (child.type.prototype.constructor.componentName === "FinderNav" || child.type.prototype.constructor.componentName === "FilterSection") {
                    return react_1.default.cloneElement(child, { setMenu: _this.setMenues, level: level, index: level + '.' + counter++ });
                }
            }
            return child;
        });
    };
    Finder.prototype.setMenues = function (filter, level, filterPlaceholder, getChildren, index) {
        var menues = this.state.menues;
        menues[level] = {
            filter: filter,
            filterValue: '',
            filterPlaceholder: filterPlaceholder,
            getChildren: getChildren,
            level: level,
            index: index
        };
        menues.length = level + 1;
        this.setState({ menu: menues });
    };
    Finder.prototype.onChange = function (value, level) {
        var menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };
    ;
    Finder.prototype.render = function () {
        var _this = this;
        var _a = this.props, filter = _a.filter, filterPlaceholder = _a.filterPlaceholder, style = _a.style;
        var children = this.passFinderProps(this.props.children);
        var subChildren = children;
        var MenuesTSX = (this.state.menues.map(function (menu, index) { return (react_1.default.createElement(__1.Flexbox, { column: true, className: 'ui-finder-menu', key: index + 1 },
            menu.filter && react_1.default.createElement(FinderFilter_1.default, { level: index + 1, onChange: _this.onChange, placeholder: menu.filterPlaceholder }),
            react_1.default.createElement(__1.Flexbox, { column: true, className: 'ui-finder-menu-items' }, subChildren = _this.passFinderProps(subChildren, menu)))); }));
        return (react_1.default.createElement(__1.Flexbox, { style: style, inline: true, className: 'ui-finder' },
            react_1.default.createElement(__1.Flexbox, { column: true, className: 'ui-finder-menu' },
                filter && react_1.default.createElement(FinderFilter_1.default, { level: 0, onChange: this.onChange, placeholder: filterPlaceholder }),
                react_1.default.createElement(__1.Flexbox, { column: true, className: 'ui-finder-menu-items' }, children)),
            MenuesTSX));
    };
    return Finder;
}(react_1.default.Component));
exports.default = Finder;
