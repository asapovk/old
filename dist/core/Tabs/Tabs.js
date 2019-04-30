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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("..");
var styles_1 = __importDefault(require("./styles"));
var Burger_1 = __importDefault(require("./Burger"));
var react_1 = require("react");
exports.default = (function (props) {
    var activeItem = props.activeItem, items = props.items, className = props.className, onClick = props.onClick;
    var _a = react_1.useState(false), burgerActive = _a[0], setBurgerActive = _a[1];
    var _b = styles_1.default(__assign({}, props, { burgerActive: burgerActive })), container = _b.container, menus = _b.menus, menu = _b.menu, burgerButton = _b.burgerButton, burgerTitle = _b.burgerTitle;
    return (core_1.jsx(__1.Flexbox, { css: container, className: className },
        core_1.jsx(Burger_1.default, { onClick: function () { return setBurgerActive(!burgerActive); }, styleButton: burgerButton, styleTitle: burgerTitle, currentMenu: items[activeItem], alignMobile: props.alignMobile }),
        core_1.jsx(__1.Flexbox, { css: menus }, items.map(function (item, index) {
            var isActive = index === activeItem;
            return (core_1.jsx(__1.Flexbox, { key: item.path, css: menu.item({ isActive: isActive }), onClick: function () {
                    onClick && onClick(item, index, item.path);
                }, children: (core_1.jsx(__1.Flexbox, { css: menu.text({ isActive: isActive }), children: item.title })) }));
        }))));
});
