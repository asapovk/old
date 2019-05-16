"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var TableColumns = function (props) {
    var row = props.row, columns = props.columns, scope = props.scope;
    var styles = styles_1.default();
    return columns.map(function (column) {
        if (!column.render) {
            column.render = function (row, value) { return value; };
        }
        return (core_1.jsx("div", { key: column.dataIndex, css: styles.column, style: column.width ? { flexBasis: column.width } : { flex: 1 }, children: column.render.apply(scope, [row, row[column.dataIndex]]) }));
    });
};
exports.default = TableColumns;
