"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("..");
var Menu_1 = __importDefault(require("./components/Menu"));
exports.default = (function (props) {
    var _a = react_1.useState(props.activeMenuItem || 0), activeItemIndex = _a[0], setActiveItemIndex = _a[1];
    return (core_1.jsx(__1.Flexbox, { column: true },
        core_1.jsx(Menu_1.default, { items: props.menuItems, activeItemIndex: activeItemIndex, onItemClick: setActiveItemIndex })));
});
