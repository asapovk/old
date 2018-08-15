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
var UITextField = /** @class */ (function (_super) {
    __extends(UITextField, _super);
    function UITextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITextField.prototype.validate = function (value) {
        var _this = this;
        var errors = [];
        var _a = this.props, validate = _a.validate, onError = _a.onError;
        if (validate) {
            validate.forEach(function (item) {
                if (item.regex.test(value) === Boolean(item.isMatch)) {
                    _this.setState({
                        classes: 'ui-textfield ui-textfield-error',
                        isValid: false
                    });
                    errors.push(item.error || "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 '" + value + "' \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u0435\u0442 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u043C\u0443 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044E " + item.regex);
                }
            });
            onError && onError(errors.length > 0 ? errors : null);
        }
        return (errors.length === 0);
    };
    UITextField.prototype.onChange = function (value) {
        if (typeof this.props.validate != 'undefined') {
            if (this.validate(value)) {
                this.props.onChange && this.props.onChange(value);
            }
        }
        else
            this.props.onChange && this.props.onChange(value);
    };
    UITextField.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, value = _a.value, defaultValue = _a.defaultValue, style = _a.style, className = _a.className, multiline = _a.multiline, singlerow = _a.singlerow;
        var InputTSX = (react_1.default.createElement("input", { className: 'ui-textfield-reset ui-textfield-input', defaultValue: defaultValue, value: value, onChange: function (event) { return _this.onChange(event.currentTarget.value); } }));
        var TextAreaTSX = (react_1.default.createElement("textarea", { className: 'ui-textfield-reset ui-textfield-textarea', defaultValue: defaultValue, value: value, onChange: function (event) { return _this.onChange(event.currentTarget.value); }, onKeyDown: function (event) {
                if (singlerow && event.keyCode === 13) {
                    event.preventDefault();
                }
            } }));
        return (react_1.default.createElement("div", { className: 'ui-textfield' + (className ? ' ' + className : ''), style: style },
            label && react_1.default.createElement("div", { className: 'ui-textfield-label' }, label),
            multiline ? TextAreaTSX : InputTSX));
    };
    return UITextField;
}(react_1.default.Component));
exports.default = UITextField;
