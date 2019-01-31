"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
exports.default = (function (props) {
    var _a = react_1.useState((props.value / 100).toString()), value = _a[0], setValue = _a[1];
    function CurrencyFormatted(amountString) {
        var matchRegexp = /(\d{1,10}[\.]?[\d]?[\d]?)/g;
        var values = amountString
            .replace(/[^\d\.\,]/g, '')
            .replace(/[\,\.]{2,}/g, '.')
            .match(matchRegexp);
        if (values !== null) {
            amountString = values[0];
        }
        else {
            if (amountString == ".") {
                amountString = "0.";
            }
            else {
                amountString = '';
            }
        }
        var amountInt = parseFloat(amountString);
        if (isNaN(amountInt)) {
            amountInt = 0;
            amountString = '';
        }
        //@ts-ignore
        amountInt = parseInt((amountInt + .005) * 100);
        return [amountInt, amountString];
    }
    function onChange(event) {
        if (typeof props.onChange === 'function') {
            var _a = CurrencyFormatted(event.currentTarget.value), amountInt = _a[0], amountString = _a[1];
            setValue(amountString);
            props.onChange(amountInt);
        }
    }
    function onBlur(event) {
        var value = event.currentTarget.value;
        if (value.indexOf('.') == value.length - 1) {
            setValue(value.replace('.', ''));
        }
        if (value.length === 0) {
            setValue('0');
        }
    }
    return (react_1.default.createElement(__1.TextField, __assign({}, props, { onChange: onChange, onBlur: onBlur, value: value })));
});
