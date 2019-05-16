"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var PanelBarItem_1 = __importDefault(require("./PanelBarItem"));
var __1 = require("../../");
exports.default = (function (props) {
    var items = props.items, value = props.value, onChange = props.onChange, styles = props.styles;
    var containerRef = react_1.useRef(null);
    var visibleItems = items;
    function createItems(items) {
        if (items.length > 0)
            return items.map(function (item) {
                return core_1.jsx(PanelBarItem_1.default, { css: styles.item(value === item.value, true), key: item.value, text: item.text, value: item.value, onClick: function (value) { return onChange && onChange(value); } });
            });
        else
            return null;
    }
    return (core_1.jsx(__1.Flexbox, { ref: containerRef, css: styles.holder }, createItems(visibleItems)));
});
