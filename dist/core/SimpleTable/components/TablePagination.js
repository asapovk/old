"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
exports.default = (function (props) {
    var dataLength = props.dataLength, pageSize = props.pageSize, page = props.page, setPage = props.setPage, containerStyle = props.containerStyle, buttonStyle = props.buttonStyle;
    var buttons = Math.ceil(dataLength / pageSize);
    var buttonsComponents = [];
    if (buttons <= 1) {
        return null;
    }
    var _loop_1 = function (i) {
        buttonsComponents.push(core_1.jsx("div", { onClick: function () { return setPage(i + 1); }, children: "" + (i + 1), css: buttonStyle(page === (i + 1)) }));
    };
    for (var i = 0; i < buttons; i++) {
        _loop_1(i);
    }
    return (core_1.jsx(__1.Flexbox, { flex: 1, css: containerStyle }, buttonsComponents));
});
