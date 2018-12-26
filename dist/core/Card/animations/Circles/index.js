"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var useStyles_1 = __importDefault(require("../../useStyles"));
var react_1 = require("react");
var Circle_1 = __importDefault(require("./Circle"));
exports.default = (function (props) {
    var styles = useStyles_1.default(props.active);
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(Circle_1.default, { css: styles.animation.circle[1], color: styles.color, size: 0.4, style: {
                position: "absolute",
                right: "-5rem",
                top: "-2rem",
            } }),
        core_1.jsx(Circle_1.default, { css: styles.animation.circle[2], color: styles.color, size: 0.8, style: {
                position: "absolute",
                right: "-13rem",
                top: "-5rem",
            } })));
});
