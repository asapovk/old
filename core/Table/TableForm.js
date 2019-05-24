"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
var TableForm = function (props) {
    var Form = props.Form, columns = props.columns;
    var data = {};
    var styles = styles_1.default();
    var setData = function (key, value) {
        data[key] = value;
    };
    react_1.useLayoutEffect(function () {
        data = JSON.parse(JSON.stringify(props.data));
    }, []);
    return (core_1.jsx("div", { css: styles.row(true) },
        core_1.jsx(Form, { data: data, columns: columns, setData: setData })));
};
var TableFormHOC = function (Form, columns, row) { return (core_1.jsx(TableForm, { data: row, columns: columns, Form: Form })); };
exports.default = TableFormHOC;
