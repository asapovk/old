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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TableColumns = /** @class */ (function (_super) {
    __extends(TableColumns, _super);
    function TableColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableColumns.prototype.render = function () {
        var _a = this.props, row = _a.row, columns = _a.columns, scope = _a.scope;
        return columns.map(function (column) {
            if (!column.render) {
                column.render = function (row, value) { return value; };
            }
            return (react_1.default.createElement("div", { key: column.dataIndex, className: "ui-table-content-body-row-column " + column.dataIndex, style: column.width ? { flexBasis: column.width } : { flex: 1 }, children: column.render.apply(scope, [row, row[column.dataIndex]]) }));
        });
    };
    return TableColumns;
}(react_1.default.Component));
exports.default = TableColumns;
