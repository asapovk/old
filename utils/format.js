"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
exports.default = (function (value, unit, options) {
    var number, integer, fraction, unitSymbol;
    number = getPositions(value, options && options.fixed);
    if (!number)
        return value;
    switch (unit) {
        case 'rub':
            number = getPositions(value, 2);
            fraction = number.fraction ? number.fraction : '00';
            unitSymbol = '₽';
            break;
        case 'm3':
            unitSymbol = core_1.jsx("span", null,
                "\u043C",
                core_1.jsx("sup", { key: 1 }, "3"));
            break;
        case 'kwh':
            unitSymbol = 'кВт⋅ч';
            break;
    }
    integer = number.integer;
    return (core_1.jsx(react_1.Fragment, null,
        integer,
        core_1.jsx("span", { css: function (theme) { return core_1.css({
                fontSize: '0.75em',
            }, options && options.fractionColor && {
                color: theme[options.fractionColor].hex
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
