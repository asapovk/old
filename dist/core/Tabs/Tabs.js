"use strict";
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
    var _b = styles_1.default({
        alignMobile: props.alignMobile || 'flex-end',
        burgerActive: burgerActive
    }), container = _b.container, menus = _b.menus, menu = _b.menu, burgerContainer = _b.burgerContainer, burgerButton = _b.burgerButton, burgerTitle = _b.burgerTitle;
    react_1.useLayoutEffect(function () {
    }, []);
    return (core_1.jsx(__1.Flexbox, { css: container, className: className, flex: 1 },
        core_1.jsx(Burger_1.default, { onClick: function () { return setBurgerActive(!burgerActive); }, styleContainer: burgerContainer, styleButton: burgerButton, styleTitle: burgerTitle, currentMenu: items[activeItem], alignMobile: props.alignMobile }),
        core_1.jsx(__1.Flexbox, { css: menus }, items.map(function (item, index) {
            var isActive = index === activeItem;
            return (core_1.jsx(__1.Flexbox, { key: item.path, css: menu.item({ isActive: isActive }), onClick: function () {
                    onClick && onClick(item, index, item.path);
                    if (burgerActive) {
                        setBurgerActive(false);
                    }
                }, children: (core_1.jsx(__1.Flexbox, { css: menu.text({ isActive: isActive }), children: item.title })) }));
        }))));
});
