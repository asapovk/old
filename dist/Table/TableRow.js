"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TableColumns_1 = __importDefault(require("./TableColumns"));
var TableForm_1 = __importDefault(require("./TableForm"));
var TableActions_1 = __importDefault(require("./TableActions"));
var Themes_1 = __importDefault(require("../Themes"));
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableRow.prototype.onClick = function (e, row) {
        this.props.onRowClick(row);
    };
    TableRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, row = _a.row, isSelected = _a.isSelected, isExpanding = _a.isExpanding, isBlur = _a.isBlur, actions = _a.actions, border = _a.border, scope = _a.scope, columns = _a.columns, form = _a.form;
        if (form) {
            return TableForm_1.default(form, columns, row);
        }
        return (react_1.default.createElement(Themes_1.default, null, function (styles) { return (react_1.default.createElement("div", { className: "ui-table-content-body-row " + (isBlur ? 'blur' : 'hover'), style: {
                borderColor: styles.table.row.borderColor
            }, onClick: function (event) { return _this.onClick(event, row); } },
            react_1.default.createElement(TableColumns_1.default, __assign({}, _this.props)),
            actions && react_1.default.createElement(TableActions_1.default, { actions: actions, data: row }))); }));
    };
    return TableRow;
}(react_1.default.Component));
exports.default = TableRow;
