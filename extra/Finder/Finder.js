"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importStar(require("react"));
var __1 = require("../../");
var FinderFilter_1 = __importDefault(require("./FinderFilter"));
var styles_1 = __importDefault(require("./styles"));
var Finder = function (props) {
    var styles = styles_1.default();
    var _a = react_1.useState([]), menuItems = _a[0], setMenuItems = _a[1];
    var setState = function (level, index, filter, filterPlaceholder) {
        var items = JSON.parse(JSON.stringify(menuItems));
        items[level] = {
            index: index,
            filter: filter,
            filterValue: '',
            filterPlaceholder: filterPlaceholder,
        };
        items.length = level + 1;
        setMenuItems(items);
    };
    var onFilterChange = function (filterValue, level) {
        setMenuItems(menuItems.map(function (item, index) {
            return (index === level) ? __assign({}, item, { filterValue: filterValue }) : item;
        }));
    };
    var filterChildren = function (children, filterValue) {
        if (children && filterValue) {
            return (children.filter(function (child) {
                return child.props.label && child.props.label.toUpperCase().includes(filterValue.toUpperCase());
            }));
        }
        return children;
    };
    var passProps = function (children, finderLevel) {
        var counter = 0;
        return react_1.default.Children.map(children, function (child) {
            var index = finderLevel + '.' + counter;
            var active = (menuItems.find(function (menu) { return menu.index == index; }));
            return react_1.default.cloneElement(child, {
                setFinderMenu: setState,
                finderLevel: finderLevel,
                finderIndex: finderLevel + '.' + counter++,
                active: active
            });
        });
    };
    var getCurrentChildren = function (children, filterValue, level) {
        var currentChildren = children;
        var _loop_1 = function (i) {
            currentChildren = passProps(react_1.default.Children.map(currentChildren, function (child) {
                if (child.props.finderIndex === menuItems[i].index) {
                    return child.props.children;
                }
            }), i);
        };
        for (var i = 1; i <= level; i++) {
            _loop_1(i);
        }
        return filterChildren(currentChildren, filterValue);
    };
    var children = passProps(props.children, 0);
    var Menus = function () { return (menuItems.map(function (menu, index) { return (core_1.jsx(__1.Flexbox, { column: true, css: styles.menu, key: index },
        menu.filter && (core_1.jsx(FinderFilter_1.default, { level: index, onChange: onFilterChange, placeholder: menu.filterPlaceholder })),
        core_1.jsx(__1.Flexbox, { column: true, css: styles.items }, getCurrentChildren(children, menu.filterValue, index)))); })); };
    react_1.useLayoutEffect(function () {
        setState(0, 'root', props.filter, props.filterPlaceholder);
    }, []);
    return (core_1.jsx(__1.Flexbox, { css: styles.root, inline: true, children: Menus() }));
};
exports.default = Finder;
