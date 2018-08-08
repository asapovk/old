"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class TableColumns extends react_1.default.Component {
    render() {
        const { data, columns, scope } = this.props;
        return columns.map(column => {
            if (!column.render) {
                column.render = (row, value) => value;
            }
            return (react_1.default.createElement("div", { key: column.dataIndex, className: `ui-table-content-body-row-column ` + column.dataIndex, style: column.width ? { flexBasis: column.width } : { flex: 1 }, children: column.render.apply(scope, [data, data[column.dataIndex]]) }));
        });
    }
}
exports.default = TableColumns;
