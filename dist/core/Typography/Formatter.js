"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
exports.default = (function (props) {
    var float, integer, fraction, unit;
    if (typeof props.children === 'string') {
        float = parseFloat(props.children.replace(/[^0-9.,]/g, "").replace(/,/g, "."));
    }
    else if (typeof props.children === 'number') {
        float = props.children;
    }
    else
        return props.children;
    float = float.toString().split('.');
    integer = float[0];
    fraction = float[1] && float[1];
    switch (props.format) {
        case 'rub':
            unit = '₽';
            fraction = fraction ? fraction : '00';
            break;
        case 'volume':
            unit = core_1.jsx("span", null,
                "\u043C",
                core_1.jsx("sup", { key: 1 }, "3"));
    }
    return (core_1.jsx(react_1.Fragment, null,
        integer,
        fraction && core_1.jsx("span", { css: core_1.css({ fontSize: '0.75em', opacity: .5 }) },
            ',' + fraction + ' ',
            unit)));
});
