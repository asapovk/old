"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var react_1 = require("react");
var TableRow_1 = __importDefault(require("./TableRow"));
var TableForm_1 = __importDefault(require("./TableForm"));
var TablePagination_1 = __importDefault(require("./TablePagination"));
var __1 = require("../../");
var Spinner_1 = require("../Spinner");
var Table = function (props) {
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var _b = react_1.useState(false), pending = _b[0], setPending = _b[1];
    var _c = react_1.useState(false), searchBar = _c[0], setSearchBar = _c[1];
    var _d = react_1.useState(''), searchValue = _d[0], setSearchValue = _d[1];
    var _e = react_1.useState([]), selectedItems = _e[0], setSelectedItems = _e[1];
    var _f = react_1.useState([]), expandedItems = _f[0], setExpandedItems = _f[1];
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
    react_1.useEffect(function () {
        if (searchValue.length > 0) {
            data = data.filter(function (row) {
                return Object.values(row).find(function (item) {
                    var searchbleItem = item && item.toString ? item.toString() : null;
                    return searchbleItem && searchbleItem.toUpperCase().includes(searchValue.toUpperCase());
                });
            });
        }
    }, [searchValue]);
    if (isData) {
        var pageSize_1 = pagination.pageSize, async = pagination.async;
        if (!async) {
            /**
             * Отрезаем записи в таблице если есть
             * параметры пагинации не async
             */
            pageData = data.filter(function (_, i) { return pageSize_1 * page >= (i + 1) && i >= pageSize_1 * page - pageSize_1; });
        }
        else {
            pageData = data;
        }
    }
    var isAddForm = (typeof form != 'undefined' && typeof form.key === 'undefined');
    var SearchBar = function () {
        if (searchBar || searchValue) {
            return (core_1.jsx("div", { css: styles.search },
                core_1.jsx(__1.Icon, { type: 'search' }),
                core_1.jsx("input", { value: searchValue, onChange: function (event) {
                        props.onSearch
                            ? props.onSearch(event.target.value)
                            : setSearchValue(event.target.value);
                    }, 
                    // onChange={(event) => console.log(event.target.value)}
                    placeholder: '\u041D\u0430\u0439\u0442\u0438' }),
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
                    return (core_1.jsx(TableRow_1.default, { key: key, row: row, columns: columns, actions: actions, border: border, form: (form && form.key && key == form.key) && form.render, isSelected: (selectedItems.some(function (item) { return item === key; })), isExpanding: (expandedItems.some(function (item) { return item === key; })), isBlur: ((form && form.key && key != form.key) || isAddForm), scope: scope, onRowClick: onRowClick, style: {
                            opacity: pending ? 0.2 : 1
                        } }));
                }),
                pending && (core_1.jsx(Spinner_1.Spinner, { spinning: true, center: true })),
                (!isData && !search) && core_1.jsx("div", { style: { padding: '1.25rem' } }, "\u041F\u0443\u0441\u0442\u043E"),
                (search && data.length === 0) && core_1.jsx("div", { style: { padding: '1.25rem' } }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))),
        isData && data && (core_1.jsx(TablePagination_1.default, { pagination: pagination, page: page, searchActive: searchBar || searchValue.length > 0, search: props.search, data: data, onChange: function (page, searchBar) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setPage(page);
                            setSearchBar(searchBar);
                            if (!(props.pagination && props.pagination.async)) return [3 /*break*/, 2];
                            setPending(true);
                            return [4 /*yield*/, props.pagination.async(page)];
                        case 1:
                            _a.sent();
                            setPending(false);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); } }))));
};
exports.default = Table;
