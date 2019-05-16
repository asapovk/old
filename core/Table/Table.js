"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var react_1 = require("react");
var TableRow_1 = __importDefault(require("./TableRow"));
var TableForm_1 = __importDefault(require("./TableForm"));
var TablePagination_1 = __importDefault(require("./TablePagination"));
var __1 = require("../../");
var Table = function (props) {
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var _b = react_1.useState(false), searchBar = _b[0], setSearchBar = _b[1];
    var _c = react_1.useState(''), searchValue = _c[0], setSearchValue = _c[1];
    var _d = react_1.useState([]), selectedItems = _d[0], setSelectedItems = _d[1];
    var _e = react_1.useState([]), expandedItems = _e[0], setExpandedItems = _e[1];
    var styles = styles_1.default();
    var columns = props.columns, actions = props.actions, border = props.border, indexKey = props.indexKey, scope = props.scope, form = props.form, style = props.style, search = props.search, onRowClick = props.onRowClick, hideHeaders = props.hideHeaders;
    var noDataLabel = props.noDataLabel;
    if (typeof noDataLabel === 'undefined') {
        noDataLabel = 'Нет данных';
    }
    var data = props.data, pagination = props.pagination;
    var pageData = [];
    var isData = (data && Array.isArray(data) && data.length > 0);
    if (!pagination) {
        pagination = {
            pageSize: 20
        };
    }
    if (searchValue.length > 0) {
        data = data.filter(function (row) {
            return Object.values(row).find(function (item) {
                var searchbleItem = item && item.toString ? item.toString() : null;
                return searchbleItem && searchbleItem.toUpperCase().includes(searchValue.toUpperCase());
            });
        });
    }
    if (isData) {
        var pageSize_1 = pagination.pageSize;
        /**
         * Отрезаем записи в таблице если есть
         * параметры пагинации
         */
        pageData = data.filter(function (item, i) { return pageSize_1 * page >= (i + 1) && (i + 1) >= pageSize_1 * page - pageSize_1; });
    }
    var isAddForm = (typeof form != 'undefined' && typeof form.key === 'undefined');
    var SearchBar = function () {
        if (searchBar || searchValue) {
            return (core_1.jsx("div", { css: styles.search },
                core_1.jsx(__1.Icon, { type: 'search' }),
                core_1.jsx("input", { onChange: function (event) { return props.onSearch ? props.onSearch(event.target.value) : setSearchValue(event.target.value); }, placeholder: '\u041D\u0430\u0439\u0442\u0438' }),
                core_1.jsx("div", { onClick: function () {
                        setSearchBar(false);
                        setSearchValue('');
                        setPage(1);
                    } },
                    core_1.jsx(__1.Icon, { type: 'close' }))));
        }
        else {
            return null;
        }
    };
    var Columns = function () {
        if (isData && !isAddForm) {
            return columns.map(function (column) { return (core_1.jsx("div", { css: styles.headColumn, key: column.dataIndex, style: column.width ? { flexBasis: column.width } : { flex: 1 }, children: column.title })); });
        }
        if (isData) {
            return core_1.jsx("div", { css: styles.headColumn, style: { flex: 1 } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
        }
        return null;
    };
    var AddForm = function () {
        if (typeof form != 'undefined' && typeof form.key === 'undefined') {
            return TableForm_1.default(form.render, columns, {});
        }
        return null;
    };
    return (core_1.jsx("div", { css: styles.root, style: style },
        core_1.jsx("div", { css: styles.content },
            !hideHeaders && (core_1.jsx("div", { css: styles.headRow, style: actions && { marginRight: '2rem' }, children: Columns() })),
            core_1.jsx("div", { css: styles.body },
                core_1.jsx(SearchBar, null),
                core_1.jsx(AddForm, null),
                isData && pageData.map(function (row, index) {
                    var key = indexKey && row[indexKey] || index.toString();
                    return (core_1.jsx(TableRow_1.default, { key: key, row: row, columns: columns, actions: actions, border: border, form: (form && form.key && key == form.key) && form.render, isSelected: (selectedItems.some(function (item) { return item === key; })), isExpanding: (expandedItems.some(function (item) { return item === key; })), isBlur: ((form && form.key && key != form.key) || isAddForm), scope: scope, onRowClick: onRowClick }));
                }),
                (!isData && !search) && core_1.jsx("div", { style: { padding: '1.25rem' } }, "\u041F\u0443\u0441\u0442\u043E"),
                (search && data.length === 0) && core_1.jsx("div", { style: { padding: '1.25rem' } }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))),
        isData && data && (core_1.jsx(TablePagination_1.default, { pagination: pagination, page: page, searchActive: searchBar || searchValue.length > 0, search: props.search, data: data, onChange: function (page, searchBar) {
                setPage(page);
                setSearchBar(searchBar);
            } }))));
};
exports.default = Table;
