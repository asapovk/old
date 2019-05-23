"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
var Flexbox_1 = require("../Flexbox");
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var spinning = props.spinning, center = props.center, className = props.className, children = props.children, style = props.style, type = props.type, loadingText = props.loadingText;
    var styles = styles_1.default(props);
    if (!spinning) {
        return children || null;
    }
    var startDelay = 1.1;
    return (core_1.jsx("div", { css: styles.wrapper(center), style: style, className: className },
        type === 'smorodina'
            ? (core_1.jsx(Flexbox_1.Flexbox, { column: true, justifyContent: 'center', alignItems: 'center' },
                core_1.jsx("div", { css: styles.container },
                    core_1.jsx("div", { css: styles.triangleContainer },
                        core_1.jsx("div", null, Array(3)
                            .fill("")
                            .map(function (_, i) {
                            return core_1.jsx("div", { key: i, css: styles.circle(i) });
                        }))))))
            : (core_1.jsx("div", { css: styles.spinner }, Array(12).fill("").map(function (e, i) {
                return core_1.jsx("div", { key: i, css: core_1.css({
                        transform: "rotate(" + i * 30 + "deg)",
                        animationDelay: "-" + (startDelay - i / 10).toFixed(1) + "s !important"
                    }) });
            }))),
        loadingText && (core_1.jsx(__1.T2, { bold: true, color: props.invert ? 'textOnAccent' : 'text', css: core_1.css({ marginTop: type === "smorodina" ? "2rem" : '1rem' }), children: loadingText }))));
});
