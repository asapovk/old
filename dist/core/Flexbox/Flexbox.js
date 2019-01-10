"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = __importDefault(require("react"));
var Flexbox = /** @class */ (function (_super) {
    __extends(Flexbox, _super);
    function Flexbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flexbox.prototype.render = function () {
        var _a = this.props, className = _a.className, elementRef = _a.elementRef, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onMouseUp = _a.onMouseUp, onMouseDown = _a.onMouseDown, onTouchStart = _a.onTouchStart, onTouchEnd = _a.onTouchEnd, w = _a.w, h = _a.h, pr = _a.pr, pl = _a.pl, pt = _a.pt, pb = _a.pb, p = _a.p, m = _a.m, mr = _a.mr, ml = _a.ml, mt = _a.mt, mb = _a.mb, flex = _a.flex, inline = _a.inline, flexBasis = _a.flexBasis, alignContent = _a.alignContent, alignSelf = _a.alignSelf, alignItems = _a.alignItems, justifyContent = _a.justifyContent, flexDirection = _a.flexDirection, flexFlow = _a.flexFlow, flexShrink = _a.flexShrink, flexGrow = _a.flexGrow, column = _a.column, id = _a.id;
        var props = {
            className: className,
            ref: elementRef,
            onClick: onClick,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onTouchStart: onTouchStart,
            onTouchEnd: onTouchEnd,
            onMouseUp: onMouseUp,
            onMouseDown: onMouseDown,
            id: id,
            css: __assign({ position: 'relative', display: inline ? 'inline-flex' : 'flex', flexDirection: column ? "column" : flexDirection }, this.props.style)
        };
        if (flex)
            props.css.flex = flex;
        if (flexBasis)
            props.css.flexBasis = flexBasis;
        if (w)
            props.css.width = w;
        if (h)
            props.css.height = h;
        if (p)
            props.css.padding = p;
        if (pt)
            props.css.paddingTop = pt;
        if (pl)
            props.css.paddingLeft = pl;
        if (pr)
            props.css.paddingRight = pr;
        if (pb)
            props.css.paddingBottom = pb;
        if (m)
            props.css.margin = m;
        if (mt)
            props.css.marginTop = mt;
        if (ml)
            props.css.marginLeft = ml;
        if (mr)
            props.css.marginRight = mr;
        if (mb)
            props.css.marginBottom = mb;
        if (alignContent)
            props.css.alignContent = alignContent;
        if (alignSelf)
            props.css.alignSelf = alignSelf;
        if (alignItems)
            props.css.alignItems = alignItems;
        if (justifyContent)
            props.css.justifyContent = justifyContent;
        if (flexFlow !== undefined)
            props.css.flexFlow = flexFlow;
        if (flexShrink !== undefined)
            props.css.flexShrink = flexShrink;
        if (flexGrow !== undefined)
            props.css.flexGrow = flexGrow;
        return core_1.jsx('div', props, this.props.children);
    };
    return Flexbox;
}(react_1.default.Component));
exports.default = Flexbox;
