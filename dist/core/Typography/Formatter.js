"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
exports.default = (function (props) {
    var number, integer, fraction, unitSymbol;
    number = getPositions(props.children, props.toFixed);
    if (!number)
        return props.children;
    switch (props.format) {
        case 'currency':
            number = getPositions(props.children, 2);
            fraction = number.fraction ? number.fraction : '00';
            break;
        default:
            fraction = number.fraction;
    }
    switch (props.unit) {
        case 'rub':
            unitSymbol = '₽';
            break;
        case 'volume':
            unitSymbol = core_1.jsx("span", null,
                "\u043C",
                core_1.jsx("sup", { key: 1 }, "3"));
            break;
        case 'power':
            unitSymbol = 'кВт⋅ч';
            break;
    }
    integer = number.integer;
    return (core_1.jsx(react_1.Fragment, null,
        integer,
        core_1.jsx("span", { css: function (theme) { return core_1.css({
                fontSize: '0.75em',
            }, props.fractionColor && {
                color: theme[props.fractionColor].hex
            }); } },
            fraction && ',' + fraction,
            '\u00a0',
            unitSymbol)));
});
function getPositions(number, fixed) {
    var float;
    if (typeof number === 'string') {
        float = parseFloat(number.replace(/[^0-9.,]/g, "").replace(/,/g, "."));
    }
    else if (typeof number === 'number') {
        float = number;
    }
    else
        return null;
    if (fixed || fixed === 0) {
        float = float.toFixed(fixed);
    }
    float = float.toString().split('.');
    return {
        integer: float[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00a0'),
        fraction: float[1] && float[1]
    };
}
