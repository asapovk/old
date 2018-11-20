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
var __1 = require("../");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: ""
        };
        return _this;
    }
    Input.prototype.onChange = function (value) {
        this.setState({ value: value });
        this.props.onChange && this.props.onChange(value);
    };
    Input.prototype.componentWillMount = function () {
        this.setState({ value: this.props.value || this.props.defaultValue || "" });
    };
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, defaultValue = _a.defaultValue, type = _a.type, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, disabled = _a.disabled, style = _a.style, decoration = _a.decoration, onChange = _a.onChange, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, loading = _a.loading, placeholder = _a.placeholder;
        return (react_1.default.createElement(__1.Flexbox, { onClick: onClick, className: (decoration == 'none' ? '' : ' ui-textfield-input'), style: style.field },
            leftIcon,
            (placeholder && !this.state.value) && (react_1.default.createElement("div", { className: "ui-textfield-input-placeholder", style: style.placeholder }, this.props.placeholder)),
            react_1.default.createElement("input", { onFocus: onFocus, onBlur: onBlur, defaultValue: defaultValue, style: style.input, value: value, onChange: function (event) { return _this.onChange(event.target.value); }, disabled: disabled, type: type }),
            loading ? loading : rightIcon));
    };
    return Input;
}(react_1.default.Component));
exports.default = Input;
