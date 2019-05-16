"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var TablePagination = function (props) {
    var data = props.data, page = props.page, searchActive = props.searchActive, search = props.search, onChange = props.onChange;
    var pageSize = props.pagination.pageSize;
    var buttons = Math.ceil(data.length / pageSize);
    var _a = styles_1.default(), pagination = _a.pagination, paginationButton = _a.paginationButton;
    if (buttons <= 1 && !search) {
        return null;
    }
    var childs = props ? [(core_1.jsx("div", { key: "pagination", onClick: function () { return onChange(1, true); }, css: paginationButton(searchActive), children: "\u041D\u0430\u0439\u0442\u0438" }))] : [];
    var _loop_1 = function (i) {
        childs.push(core_1.jsx("div", { key: i, onClick: function () { return onChange(i + 1, false); }, css: paginationButton(page === (i + 1)), children: i * pageSize + "\u2013" + (i * pageSize + pageSize) }));
    };
    for (var i = 0; i < buttons; i++) {
        _loop_1(i);
    }
    return core_1.jsx("div", { css: pagination, children: childs });
};
exports.default = TablePagination;
