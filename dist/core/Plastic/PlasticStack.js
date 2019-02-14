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
var styles_1 = __importDefault(require("./styles"));
var Plastic_1 = __importDefault(require("./Plastic"));
var __1 = require("..");
var react_1 = require("react");
exports.default = (function (props) {
    var _a = react_1.useState(0), mouseOver = _a[0], setMouseOver = _a[1];
    var _b = react_1.useState(0), current = _b[0], setCurrent = _b[1];
    var styles = styles_1.default({
        stackCount: props.cards.length,
        stackDirection: props.direction
    });
    return (core_1.jsx(__1.Flexbox, { css: styles.stack, flexDirection: 'row' }, props.cards.map(function (card, index) { return (core_1.jsx(Plastic_1.default, __assign({}, card, { key: index, active: current === index, onClick: function () {
            setCurrent(index);
            props.onChange && props.onChange(index);
        }, __stackPosition: index + 1, __stackOffset: props.offset, __stackDirection: props.direction }))); })));
});
