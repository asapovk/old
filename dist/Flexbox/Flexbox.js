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
var react_1 = __importDefault(require("react"));
var Flexbox = /** @class */ (function (_super) {
    __extends(Flexbox, _super);
    function Flexbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flexbox.prototype.render = function () {
        var _a = this.props, className = _a.className, elementRef = _a.elementRef, pr = _a.pr, pl = _a.pl, pt = _a.pt, pb = _a.pb, p = _a.p, flex = _a.flex, alignContent = _a.alignContent, alignSelf = _a.alignSelf, alignItems = _a.alignItems, justifyContent = _a.justifyContent, flexDirection = _a.flexDirection, flexFlow = _a.flexFlow, column = _a.column;
        var props = {
            className: className,
            ref: elementRef,
            style: __assign({ position: 'relative', display: 'flex', flex: 1 || flex, flexDirection: column ? "column" : flexDirection }, this.props.style)
        };
        if (p)
            props.style.padding = p;
        if (pt)
            props.style.paddingTop = pt;
        if (pl)
            props.style.paddingLeft = pl;
        if (pr)
            props.style.paddingRight = pr;
        if (pb)
            props.style.paddingBottom = pb;
        if (alignContent)
            props.style.alignContent = alignContent;
        if (alignSelf)
            props.style.alignSelf = alignSelf;
        if (alignItems)
            props.style.alignItems = alignItems;
        if (justifyContent)
            props.style.justifyContent = justifyContent;
        if (flexFlow)
            props.style.padding = flexFlow;
        return react_1.default.createElement('div', props, this.props.children);
    };
    return Flexbox;
}(react_1.default.Component));
exports.default = Flexbox;
