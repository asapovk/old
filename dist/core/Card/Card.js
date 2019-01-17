"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var Styles_1 = __importDefault(require("./Styles"));
var __1 = require("../");
var Waves_1 = __importDefault(require("./animations/Waves"));
var Circles_1 = __importDefault(require("./animations/Circles"));
exports.default = (function (props) {
    var style = props.style, children = props.children;
    var styles = Styles_1.default(props.active);
    return (core_1.jsx(__1.Flexbox, { flexDirection: 'column', onClick: function () { return props.onClick && props.onClick(); }, css: styles.main, style: style, flex: 1, className: props.className },
        props.animation === "waves" && (core_1.jsx(Waves_1.default, { active: props.active })),
        props.animation === "circles" && (core_1.jsx(Circles_1.default, { active: props.active })),
        children));
});
