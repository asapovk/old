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
                        classes: "ui-textfield ui-textfield-error",
                        isValid: false
                    });
                    errors.push(item.error || "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \"" + value + "\" \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u0435\u0442 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u043C\u0443 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044E " + item.regex);
                }
            });
            onError && onError(errors.length > 0 ? errors : null);
        }
        return (errors.length === 0);
    };
    UITextField.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, value = _a.value, defaultValue = _a.defaultValue, style = _a.style, onChange = _a.onChange;
        return (react_1.default.createElement("div", { className: "UI-TextField", style: style },
            label && react_1.default.createElement("div", { className: "UI-TextField-Label" }, label),
            react_1.default.createElement("input", { className: "UI-TextField-Input", defaultValue: defaultValue, value: value, onChange: function (event) {
                    if (_this.validate(event.currentTarget.value)) {
                        onChange && onChange(event.currentTarget.value);
                    }
                }, onClick: function (event) { return _this.validate(event.currentTarget.value); } })));
    };
    return UITextField;
}(react_1.default.Component));
exports.default = UITextField;
