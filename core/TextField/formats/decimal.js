"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (value, decimalCount) {
    value = value.replace(/[\,]/g, '.');
    var reg = RegExp("^[0-9]*(\\.[0-9]{0," + decimalCount + "})?$", 'g');
    if (value == '.') {
        value = '0.';
    }
    if (reg.test(value)) {
        return value;
    }
    return null;
});
