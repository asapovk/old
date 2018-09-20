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
var TableRow_1 = __importDefault(require("./TableRow"));
var TableForm_1 = __importDefault(require("./TableForm"));
var TablePagination_1 = __importDefault(require("./TablePagination"));
var Flexbox_1 = require("../Flexbox");
var Themes_1 = __importDefault(require("../Themes"));
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedItems: [],
            expandedItems: [],
            page: 1,
        };
        return _this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var _a = this.props, columns = _a.columns, actions = _a.actions, border = _a.border, indexKey = _a.indexKey, scope = _a.scope, form = _a.form, style = _a.style, pagination = _a.pagination, noDataLabel = _a.noDataLabel, theme = _a.theme;
        var data = this.props.data;
        var isData = (data && Array.isArray(data) && data.length > 0);
        var noDataLabelTSX = (react_1.default.createElement(Flexbox_1.Flexbox, { alignItems: 'center', justifyContent: 'center' }, noDataLabel));
        if (pagination && isData) {
            var pageSize_1 = pagination.pageSize;
            /**
             * Отрезаем записи в таблице если есть
             * параметры пагинации
             */
            data = data.filter(function (item, i) { return pageSize_1 * _this.state.page >= (i + 1) && (i + 1) >= pageSize_1 * _this.state.page - pageSize_1; });
        }
        var isAddForm = (typeof form != 'undefined' && typeof form.key === 'undefined');
        var ColumnsTSX = isData && !isAddForm ? columns.map(function (column) { return (react_1.default.createElement("div", { className: 'ui-table-content-head-row-column ' + column.dataIndex, key: column.dataIndex, style: {
                flexBasis: column.width ? column.width : 'auto',
                flex: column.width ? 'auto' : 1,
                color: theme.titleColor
            } }, column.title)); }) : isData && react_1.default.createElement("div", { className: 'ui-table-content-head-row-column', style: { flex: 1 } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
        var RowsTSX = isData && data.map(function (row, index) {
            var key = indexKey && row[indexKey] || index.toString();
            return (react_1.default.createElement(TableRow_1.default, { key: key, row: row, columns: columns, actions: actions, border: border, form: (form && form.key && key == form.key) && form.render, isSelected: (_this.state.selectedItems.some(function (item) { return item === key; })), isExpanding: (_this.state.expandedItems.some(function (item) { return item === key; })), isBlur: ((form && form.key && key != form.key) || isAddForm), scope: scope }));
        });
        var addFormTSX = typeof form != 'undefined' && typeof form.key === 'undefined' && TableForm_1.default(form.render, columns, {});
        return (react_1.default.createElement("div", { className: 'ui-table', ref: function (ref) { return _this.table = ref; }, style: style },
            react_1.default.createElement("div", { className: 'ui-table-content', style: {
                    boxShadow: "0px 2px 4px 0px " + theme.shadowColor,
                } },
                !isData && noDataLabelTSX,
                react_1.default.createElement("div", { className: 'ui-table-content-head-row', children: ColumnsTSX, style: actions && { marginRight: '32px' } }),
                react_1.default.createElement("div", { className: 'ui-table-content-body' },
                    addFormTSX,
                    RowsTSX)),
            pagination && data && (react_1.default.createElement(TablePagination_1.default, { pagination: pagination, page: this.state.page, data: this.props.data, onChange: function (page) { return _this.setState({ page: page }); } }))));
    };
    Table.defaultProps = {
        noDataLabel: 'Нет данных'
    };
    return Table;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(Table, __assign({}, props, { theme: {
        backgroundColor: theme.interface.rgb,
        titleColor: theme.lowlight.rgb,
        shadowColor: theme.shadow.rgb,
    } }))); })); });
