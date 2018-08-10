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
var TableFormHOC = /** @class */ (function (_super) {
    __extends(TableFormHOC, _super);
    function TableFormHOC(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            invalidItems: new Set()
        };
        _this.setData = _this.setData.bind(_this);
        _this.setValid = _this.setValid.bind(_this);
        return _this;
    }
    TableFormHOC.prototype.componentWillMount = function () {
        this.formData = Object.assign(this.props.data);
    };
    TableFormHOC.prototype.setData = function (field, value) {
        this.formData[field] = value;
    };
    TableFormHOC.prototype.setValid = function (id, isValid) {
        var items = this.state.invalidItems;
        isValid ? items.delete(id) : items.add(id);
        this.setState({ invalidItems: items });
        this.save.disabled = items.size > 0 ? true : false;
    };
    TableFormHOC.prototype.Column = function (props) {
        var width = props.width ? { flexBasis: props.width } : { flex: 1 };
        return (react_1.default.createElement("div", { className: 'ui-table-content-body-row-column' + (props.className ? ' ' + props.className : ''), children: props.children, style: Object.assign(width, props.style) }));
    };
    TableFormHOC.prototype.Subrow = function (props) {
        return (react_1.default.createElement("div", { className: 'ui-table-content-body-row-column-subrow' + (props.className ? ' ' + props.className : ''), children: props.children, style: props.style }));
    };
    TableFormHOC.prototype.Actions = function (props) {
        return (react_1.default.createElement("div", { className: 'ui-table-content-body-row-actions' + (props.className ? ' ' + props.className : ''), children: props.children, style: props.style }));
    };
    TableFormHOC.prototype.render = function () {
        var Form = this.props.Form;
        return (react_1.default.createElement("div", { className: 'ui-table-content-body-row edited' },
            react_1.default.createElement(Form, { data: this.props.data, setData: this.setData, setValid: this.setValid, Column: this.Column, Subrow: this.Subrow, Actions: this.Actions })));
    };
    return TableFormHOC;
}(react_1.default.Component));
exports.default = (function (row, Form) { return react_1.default.createElement(TableFormHOC, { data: row, Form: Form }); });
