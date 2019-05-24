"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.HR = function (props) {
    var theme = hooks_1.useTheme().theme;
    var gap = props.gap || 3;
    var width = props.width || 1;
    return core_1.jsx("div", { className: props.className, css: core_1.css({
            width: '100%',
            borderBottomWidth: width + "px",
            borderBottomStyle: 'solid',
            borderBottomColor: theme[props.color ? props.color : 'pale'].rgb,
            padding: props.p,
            paddingTop: props.pt,
            paddingLeft: props.pl,
            paddingRight: props.pr,
            paddingBottom: props.pb,
            margin: props.m,
            marginTop: props.mt,
            marginLeft: props.ml,
            marginRight: props.mr,
            marginBottom: props.mb,
        }, props.dotted && {
            border: 'none',
            backgroundImage: "linear-gradient(to right,\n                    " + theme[props.color ? props.color : 'pale'].rgb + " " + width + "px, \n                    " + theme.background.rgba(0) + " " + width + "px \n                )",
            backgroundPosition: 'left bottom',
            backgroundSize: gap + width + "px " + width + "px",
            backgroundRepeat: 'repeat-x',
            height: width + "px"
        }) });
};
