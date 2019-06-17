"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var TableColumns_1 = __importDefault(require("./TableColumns"));
var TableForm_1 = __importDefault(require("./TableForm"));
var TableActions_1 = __importDefault(require("./TableActions"));
var TableRow = function (props) {
    var row = props.row, actions = props.actions, columns = props.columns, form = props.form, onRowClick = props.onRowClick, style = props.style;
    var styles = styles_1.default();
    if (form) {
        return TableForm_1.default(form, columns, row);
    }
    return (core_1.jsx("div", { css: styles.row(false, actions.length > 0), style: style, onClick: function () { return onRowClick && onRowClick(row); } },
        core_1.jsx(TableColumns_1.default, { columns: props.columns, row: props.row, scope: props.scope }),
        actions && core_1.jsx(TableActions_1.default, { actions: actions, data: row })));
};
exports.default = TableRow;
