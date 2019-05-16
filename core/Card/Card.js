"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var react_1 = require("react");
var __1 = require("../..");
var Waves_1 = __importDefault(require("./animations/Waves"));
var Circles_1 = __importDefault(require("./animations/Circles"));
exports.default = react_1.forwardRef(function (props, ref) {
    var style = props.style, children = props.children;
    var styles = styles_1.default(props.active, typeof props.onClick === 'function');
    return (core_1.jsx(__1.Flexbox, { flexDirection: 'column', onClick: function () { return props.onClick && props.onClick(); }, css: styles.main, style: style, flex: 1, className: props.className, ref: ref },
        props.animation === "waves" && (core_1.jsx(Waves_1.default, { active: props.active })),
        props.animation === "circles" && (core_1.jsx(Circles_1.default, { active: props.active })),
        children));
});
