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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
//import TableCheckbox from './TableCheckbox';
//import TableActions from './TableActions';
var TableColumns_1 = __importDefault(require("./TableColumns"));
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            onSelect: true
        };
        return _this;
    }
    TableRow.prototype.onClick = function () {
    };
    TableRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, row = _a.row, isSelected = _a.isSelected, isExpanding = _a.isExpanding, isBlur = _a.isBlur, actions = _a.actions, border = _a.border, scope = _a.scope;
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("div", { className: "ui-table-content-body-row " + (isBlur ? 'blur' : 'hover'), onClick: function (_) { return _this.onClick(); } },
                react_1.default.createElement(TableColumns_1.default, __assign({}, this.props)))));
    };
    return TableRow;
}(react_1.default.Component));
exports.default = TableRow;