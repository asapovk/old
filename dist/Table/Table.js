"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var TableForm_1 = __importDefault(require("./TableForm"));
var TablePagination_1 = __importDefault(require("./TablePagination"));
var __1 = require("../");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedItems: [],
            expandedItems: [],
            page: 1,
            searchBar: false,
            searchValue: ''
        };
        return _this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var _a = this.props, columns = _a.columns, actions = _a.actions, border = _a.border, indexKey = _a.indexKey, scope = _a.scope, form = _a.form, style = _a.style, noDataLabel = _a.noDataLabel, onRowClick = _a.onRowClick, search = _a.search;
        var _b = this.props, data = _b.data, pagination = _b.pagination;
        var pageData = [];
        var isData = (this.props.data && Array.isArray(this.props.data) && this.props.data.length > 0);
        var noDataLabelTSX = (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', justifyContent: 'center' }, noDataLabel));
        if (!pagination) {
            pagination = {
                pageSize: 20
            };
        }
        if (this.state.searchValue.length > 0) {
            data = data.filter(function (row) {
                return Object.values(row).find(function (item) {
                    var searchbleItem = item && item.toString ? item.toString() : null;
                    return searchbleItem && searchbleItem.toUpperCase().includes(_this.state.searchValue.toUpperCase());
                });
            });
        }
        if (isData) {
            var pageSize_1 = pagination.pageSize;
            /**
             * Отрезаем записи в таблице если есть
             * параметры пагинации
             */
            pageData = data.filter(function (item, i) { return pageSize_1 * _this.state.page >= (i + 1) && (i + 1) >= pageSize_1 * _this.state.page - pageSize_1; });
        }
        var isAddForm = (typeof form != 'undefined' && typeof form.key === 'undefined');
        var SearchBarTSX = function (styles) {
            if (_this.state.searchBar || _this.state.searchValue)
                return (react_1.default.createElement("div", { className: 'ui-table-content-body-search', style: { borderColor: styles.theme.pale.rgb } },
                    react_1.default.createElement(__1.Icon, { type: 'search' }),
                    react_1.default.createElement("input", { onChange: function (event) { return _this.props.onSearch ? _this.props.onSearch(event.target.value) : _this.setState({ searchValue: event.target.value }); }, placeholder: '\u041D\u0430\u0439\u0442\u0438' }),
                    react_1.default.createElement("div", { onClick: function () { return _this.setState({ searchValue: '', searchBar: false, page: 1 }); } },
                        react_1.default.createElement(__1.Icon, { type: 'close' }))));
            else
                return null;
        };
        var ColumnsTSX = function (style) {
            if (isData && !isAddForm) {
                return columns.map(function (column) { return (react_1.default.createElement("div", { className: 'ui-table-content-head-row-column ' + column.dataIndex, key: column.dataIndex, style: column.width ? { flexBasis: column.width, color: style.titleColor } : { flex: 1, color: style.titleColor } }, column.title)); });
            }
            else if (isData)
                return react_1.default.createElement("div", { className: 'ui-table-content-head-row-column', style: { flex: 1 } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
            else
                return null;
        };
        var RowsTSX = isData && pageData.map(function (row, index) {
            var key = indexKey && row[indexKey] || index.toString();
            return (react_1.default.createElement(TableRow_1.default, { key: key, row: row, columns: columns, actions: actions, border: border, form: (form && form.key && key == form.key) && form.render, isSelected: (_this.state.selectedItems.some(function (item) { return item === key; })), isExpanding: (_this.state.expandedItems.some(function (item) { return item === key; })), isBlur: ((form && form.key && key != form.key) || isAddForm), scope: scope, onRowClick: onRowClick }));
        });
        var addFormTSX = typeof form != 'undefined' && typeof form.key === 'undefined' && TableForm_1.default(form.render, columns, {});
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement("div", { className: 'ui-table', ref: function (ref) { return _this.table = ref; }, style: style },
            react_1.default.createElement("div", { className: 'ui-table-content' },
                !isData && noDataLabelTSX,
                react_1.default.createElement("div", { className: 'ui-table-content-head-row', children: ColumnsTSX(styles.table.main), style: actions && { marginRight: '32px' } }),
                isData &&
                    react_1.default.createElement("div", { className: 'ui-table-content-body', style: {
                            borderColor: styles.table.main.borderColor,
                            borderRadius: styles.table.main.borderRadius,
                            background: styles.table.main.backgroundColor,
                            boxShadow: styles.table.main.boxShadow,
                        } },
                        SearchBarTSX(styles),
                        addFormTSX,
                        RowsTSX,
                        (search && data.length === 0) && react_1.default.createElement("div", { className: 'ui-table-content-body-nofound' }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))),
            isData && data && (react_1.default.createElement(TablePagination_1.default, { pagination: pagination, page: _this.state.page, searchActive: _this.state.searchBar || _this.state.searchValue.length > 0, search: _this.props.search, data: data, onChange: function (page, searchBar) { return _this.setState({ page: page, searchBar: searchBar }); } })))); }));
    };
    Table.defaultProps = {
        noDataLabel: 'Нет данных',
        onRowClick: function () { }
    };
    return Table;
}(react_1.default.Component));
exports.default = Table;
