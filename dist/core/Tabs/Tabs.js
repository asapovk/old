"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("..");
var Content_1 = __importDefault(require("./components/Content"));
var Menu_1 = __importDefault(require("./components/Menu"));
exports.default = (function (props) {
    var activeMenuItem = props.activeMenuItem, menuItems = props.menuItems, withoutRouter = props.withoutRouter, children = props.children;
    var _a = react_1.useState(activeMenuItem || 0), activeItemIndex = _a[0], setActiveItemIndex = _a[1];
    return (core_1.jsx(__1.Flexbox, { column: true, flex: 1 },
        core_1.jsx(Menu_1.default, { items: menuItems, activeItemIndex: activeItemIndex, onItemClick: setActiveItemIndex }),
        withoutRouter
            ? { children: children }
            : (core_1.jsx(Content_1.default, { items: menuItems, activeItemIndex: activeItemIndex }))));
});
