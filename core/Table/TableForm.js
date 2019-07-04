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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
var TableForm = function (props) {
    var Form = props.Form, columns = props.columns, dismiss = props.dismiss;
    var styles = styles_1.default();
    var initialData = JSON.parse(JSON.stringify(props.data));
    var _a = react_1.useState(initialData), data = _a[0], setData = _a[1];
    var _setData = function (key, value) {
        var _a;
        setData(__assign({}, data, (_a = {}, _a[key] = value, _a)));
    };
    return (core_1.jsx("div", { css: styles.row(true, false) },
        core_1.jsx(Form, { data: data, columns: columns, setData: _setData, dismiss: dismiss })));
};
var TableFormHOC = function (props) { return (core_1.jsx(TableForm, __assign({ data: props.row }, props))); };
exports.default = TableFormHOC;
