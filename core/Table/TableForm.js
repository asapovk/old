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
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var styles_1 = __importDefault(require("./styles"));
var TableForm = function (props) {
    var Form = props.Form, data = props.data, columns = props.columns;
    var formData = [];
    var styles = styles_1.default();
    var _a = react_2.useState(new Set()), invalidItems = _a[0], setInvalidItems = _a[1];
    var setData = function (field, value) {
        formData[field] = value;
    };
    var setValid = function (id, isValid) {
        var items = JSON.parse(JSON.stringify(invalidItems));
        isValid ? items.delete(id) : items.add(id);
        setInvalidItems(items);
        // this.save.disabled = items.size > 0 ? true : false;
    };
    react_2.useLayoutEffect(function () {
        formData = Object.assign(data);
    }, []);
    var Column = function (props) {
        var width = props.width ? { flexBasis: props.width } : { flex: 1 };
        return (react_1.default.createElement("div", __assign({}, props, { style: Object.assign(width, props.style) })));
    };
    var Subrow = function (props) { return (react_1.default.createElement("div", __assign({}, props, { className: styles.subrow }))); };
    var Actions = function (props) { return (react_1.default.createElement("div", __assign({}, props, { className: 'ui-table-content-body-row-actions' }))); };
    return (react_1.default.createElement("div", { css: styles.row(true) },
        react_1.default.createElement(Form, { data: data, columns: columns, formData: formData, setData: setData, setValid: setValid, Column: Column, Subrow: Subrow, Actions: Actions })));
};
var TableFormHOC = function (Form, columns, row) {
    return (react_1.default.createElement(TableForm, { data: row, columns: columns, Form: Form }));
};
exports.default = TableFormHOC;
