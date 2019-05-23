"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var styles_1 = __importDefault(require("./styles"));
var TableForm = function (props) {
    var Form = props.Form, columns = props.columns;
    var data = {};
    var styles = styles_1.default();
    var setData = function (key, value) {
        data[key] = value;
    };
    react_2.useLayoutEffect(function () {
        data = JSON.parse(JSON.stringify(props.data));
    }, []);
    return (react_1.default.createElement("div", { css: styles.row(true) },
        react_1.default.createElement(Form, { data: data, columns: columns, setData: setData })));
};
var TableFormHOC = function (Form, columns, row) { return (react_1.default.createElement(TableForm, { data: row, columns: columns, Form: Form })); };
exports.default = TableFormHOC;
