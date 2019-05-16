"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var ScrollView_1 = require("../ScrollView");
exports.default = (function (props) {
    var options = props.options;
    return (core_1.jsx(ScrollView_1.ScrollView, { customCss: props.cssItemStyle }, options.map(function (option) {
        return (core_1.jsx("div", { key: option.value, css: props.cssItemStyle, children: option.text, onClick: function () { return props.onSelect(option); } }));
    })));
});
