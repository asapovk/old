"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
//TODO: remove absolute positions
exports.default = (function (props) {
    var styles = styles_1.default();
    return (core_1.jsx(__1.Flexbox, { flex: 1, alignItems: 'center', className: props.className },
        core_1.jsx("div", { css: styles.layout },
            props.leftTitle && (core_1.jsx("div", { css: styles.titleLeft, children: props.leftTitle })),
            core_1.jsx("div", { css: styles.line }),
            props.rightTitle && (core_1.jsx("div", { css: styles.titleRight, children: props.rightTitle }))),
        core_1.jsx("div", { css: styles.dotsContainer }, props.dots.map(function (dot, index) { return (core_1.jsx("div", { key: index },
            core_1.jsx("div", { css: styles.dotTopText, children: core_1.jsx(__1.C1, null, dot.value) }),
            core_1.jsx("div", { css: styles.dotContainer, children: core_1.jsx("div", null) }),
            core_1.jsx("div", { css: styles.dotBottomText, children: dot.bottomTitle }))); }))));
});
