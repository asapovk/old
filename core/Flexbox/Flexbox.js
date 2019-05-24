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
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var hooks_1 = require("../../hooks");
var Flexbox = function (props, ref) {
    var spacing = hooks_1.useSpacing(props);
    return core_1.jsx('div', {
        className: props.className,
        onClick: props.onClick,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onTouchStart: props.onTouchStart,
        onTouchEnd: props.onTouchEnd,
        onMouseUp: props.onMouseUp,
        onMouseDown: props.onMouseDown,
        id: props.id,
        ref: ref,
        css: __assign({ position: 'relative', display: props.inline ? 'inline-flex' : 'flex', flexDirection: props.column ? "column" : props.flexDirection, flex: props.flex, flexBasis: props.flexBasis, width: props.w, height: props.h, alignContent: props.alignContent, alignSelf: props.alignSelf, alignItems: props.alignItems, justifyContent: props.justifyContent, flexFlow: props.flexFlow, flexShrink: props.flexShrink, flexGrow: props.flexGrow, flexWrap: props.flexWrap }, props.style, spacing)
    }, props.children);
};
exports.default = react_1.forwardRef(Flexbox);
