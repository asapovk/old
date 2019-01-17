"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("../../Styles"));
var react_1 = require("react");
var Wave_1 = __importDefault(require("./Wave"));
exports.default = (function (props) {
    var styles = styles_1.default(props.active);
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(Wave_1.default, { css: styles.animation.wave[1], color: styles.color, size: 1, style: {
                position: "absolute",
                left: 0,
                bottom: "0rem",
            } }),
        core_1.jsx(Wave_1.default, { css: styles.animation.wave[2], color: styles.color, size: 1, style: {
                position: "absolute",
                left: 0,
                bottom: "-1.5rem",
            } })));
});
