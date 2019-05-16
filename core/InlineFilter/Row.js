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
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
exports.default = (function (props) {
    var values = props.values, disabled = props.disabled, last = props.last, onChange = props.onChange;
    return (core_1.jsx(__1.Flexbox, { mb: last ? '0.5rem' : '0' }, values.map(function (value) { return (core_1.jsx(__1.C1, { key: value.index, bold: true, mr: '0.75rem', children: value.label, onClick: function () { return onChange(__assign({}, value, { selected: !value.selected })); }, css: core_1.css({ textTransform: 'capitalize' }), disabled: disabled, color: value.selected ? 'text' : 'lowlight' })); })));
});
