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
var TableRow_1 = __importDefault(require("./TableRow"));
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedItems: [],
            expandedItems: [],
            //editibleItems: [] as [{ [component: string]: string }],
            focusItem: '',
        };
        return _this;
    }
    // componentWillMount() {
    //     if (this.props.actions) {
    //         this.props.actions.map(action => {
    //             if (action.type == 'select') this.setState({ isSelectable: true })
    //             if (action.type == 'expand') this.setState({ isExpandable: true })
    //         })
    //     }
    // }
    Table.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, columns = _a.columns, actions = _a.actions, border = _a.border, indexKey = _a.indexKey, scope = _a.scope;
        var ColumnsTSX = columns.map(function (column) { return (react_1.default.createElement("div", { className: 'ui-table-content-head-row-column ' + column.dataIndex, key: column.dataIndex, style: column.width ? { flexBasis: column.width } : { flex: 1 } }, column.title)); });
        var RowsTSX = data.map(function (row, index) {
            var key = indexKey && row[indexKey] || index.toString();
            return (react_1.default.createElement(TableRow_1.default, { key: key, row: row, columns: columns, actions: actions, border: border, isSelected: (_this.state.selectedItems.some(function (item) { return item === key; })), isExpanding: (_this.state.expandedItems.some(function (item) { return item === key; })), 
                // isBlur={this.state.focusItem && (this.state.focusItem != key)}
                scope: scope }));
        });
        return (react_1.default.createElement("div", { className: 'ui-table' },
            react_1.default.createElement("div", { className: 'ui-table-content' },
                react_1.default.createElement("div", { className: 'ui-table-content-head-row', children: ColumnsTSX }),
                react_1.default.createElement("div", { className: 'ui-table-content-body', children: RowsTSX }))));
    };
    return Table;
}(react_1.default.Component));
exports.default = Table;
