"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * Использователь хранение данных
 */
exports.default = (function (key, defaultValue, disable) {
    if (defaultValue === void 0) { defaultValue = null; }
    if (disable) {
        return null;
    }
    var _a = react_1.useState(window.localStorage.getItem(key) || defaultValue), value = _a[0], setValue = _a[1];
    return {
        value: value,
        setValue: function (value) {
            setValue(value);
            window.localStorage.setItem(key, value);
        }
    };
});
