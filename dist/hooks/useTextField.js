"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useLocalStorage_1 = __importDefault(require("./useLocalStorage"));
/**
 * Использоватеть тексовое поле
 */
exports.default = (function (opt) {
    var localstorage = useLocalStorage_1.default("TEXT_FIELD_VALUE_" + (opt && opt.id), "", !Boolean(opt && opt.id));
    var _a = react_1.useState(localstorage ? localstorage.value : (opt && opt.defaultValue || "")), value = _a[0], setValue = _a[1];
    return {
        value: value,
        onChange: function (value) {
            setValue(value);
            localstorage && localstorage.setValue(value);
        },
    };
});
