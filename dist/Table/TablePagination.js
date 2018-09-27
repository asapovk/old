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
var Themes_1 = __importDefault(require("../Themes"));
var TablePagination = /** @class */ (function (_super) {
    __extends(TablePagination, _super);
    function TablePagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TablePagination.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, pagination = _a.pagination, page = _a.page;
        var pageSize = pagination.pageSize;
        var buttons = Math.ceil(data.length / pageSize);
        if (buttons <= 1) {
            return null;
        }
        var buttonsComponents = [];
        var _loop_1 = function (i) {
            buttonsComponents.push(react_1.default.createElement(Themes_1.default, { key: i }, function (styles) { return (react_1.default.createElement("div", { onClick: function () { return _this.props.onChange(i + 1); }, className: "ui-table-paggination-button", style: {
                    color: styles.table.pagination.textColor,
                    backgroundColor: styles.table.pagination.backgroundColor,
                    opacity: page === i + 1 ? 1 : 0.5
                }, children: i * pageSize + "\u2013" + (i * pageSize + pageSize) })); }));
        };
        for (var i = 0; i < buttons; i++) {
            _loop_1(i);
        }
        return (react_1.default.createElement("div", { className: 'ui-table-paggination' }, buttonsComponents));
    };
    return TablePagination;
}(react_1.default.Component));
exports.default = TablePagination;
