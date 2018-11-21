"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * Использователь размеры браузера
 */
exports.default = (function () {
    var _a = react_1.useState({
        height: window.innerHeight,
        width: window.innerWidth,
    }), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var resize = function () {
            setValue({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
        };
    });
    return value;
});
