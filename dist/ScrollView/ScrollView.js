"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var useStyles_1 = __importDefault(require("./useStyles"));
var react_1 = require("react");
var ScrollBar_1 = __importDefault(require("./ScrollBar"));
//@ts-ignore
var isWebkit = !!window.webkitURL;
exports.default = (function (props) {
    var children = props.children, horizontal = props.horizontal;
    var scrollView = react_1.createRef();
    var styles = useStyles_1.default(horizontal, isWebkit);
    /**
     * FF returns null as reference
     * so we dont use it here
     */
    var id = "SV-" + Math.trunc(Math.random() * 10000000);
    return (core_1.jsx("div", { css: styles.root },
        core_1.jsx("div", { id: id, css: styles.scrollview, ref: scrollView, children: children }),
        core_1.jsx(ScrollBar_1.default, { scrollViewId: id, horizontal: horizontal })));
});
