"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
exports.default = (function (props) {
    var styles = props.styles;
    return (core_1.jsx("div", { css: styles.story.container }, props.story));
});
