"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = require("../styles");
exports.default = (function (props) {
    var styles = styles_1.subHeaderStyles({
        columnsLength: props.columnsLength,
        hideHeaders: props.hideHeaders
    });
    return core_1.jsx("div", { css: styles.subheader, children: props.title });
});
