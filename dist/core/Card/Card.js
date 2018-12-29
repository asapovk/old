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
var useStyles_1 = __importDefault(require("./useStyles"));
var __1 = require("../");
var Waves_1 = __importDefault(require("./animations/Waves"));
var Circles_1 = __importDefault(require("./animations/Circles"));
exports.default = (function (props) {
    var style = props.style, children = props.children;
    var styles = useStyles_1.default(props.active);
    return (core_1.jsx(__1.Flexbox, { flexDirection: 'column', onClick: function () { return props.onClick && props.onClick(); }, css: __assign({}, styles.main, style), flex: 1 },
        props.animation === "waves" && (core_1.jsx(Waves_1.default, { active: props.active })),
        props.animation === "circles" && (core_1.jsx(Circles_1.default, { active: props.active })),
        children));
});
