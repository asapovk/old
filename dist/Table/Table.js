"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TableRow_1 = __importDefault(require("./TableRow"));
class Table extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedItems: [],
            expandedItems: [],
            //editibleItems: [] as [{ [component: string]: string }],
            focusItem: ''
        };
    }
    render() {
        const { data, columns, actions, border, indexKey, scope } = this.props;
        return (react_1.default.createElement("div", { className: 'ui-table' },
            react_1.default.createElement("div", { className: 'ui-table-content' },
                react_1.default.createElement("div", { className: 'ui-table-content-head-row' }, columns.map(column => (react_1.default.createElement("div", { className: 'ui-table-content-head-row-column ' + column.dataIndex, key: column.dataIndex, style: column.width ? { flexBasis: column.width } : { flex: 1 } }, column.title)))),
                react_1.default.createElement("div", { className: 'ui-table-content-body' }, data.map((row, index) => (react_1.default.createElement(TableRow_1.default, { key: row[indexKey] || index.toString(), data: row, columns: columns, actions: actions, border: border, isSelected: (this.state.selectedItems.some(item => item === row[indexKey] || item === index.toString())), isExpanding: (this.state.expandedItems.some(item => item === row[indexKey] || item === index.toString())), isBlur: this.state.focusItem && (this.state.focusItem != row[indexKey] || this.state.focusItem != index.toString()), scope: scope })))))));
    }
}
exports.default = Table;
//# sourceMappingURL=Table.js.map