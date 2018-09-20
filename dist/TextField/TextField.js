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
var Themes_1 = __importDefault(require("../Themes"));
var TextField = /** @class */ (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextField.prototype.validate = function (value) {
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
    TextField.prototype.onChange = function (value) {
        if (typeof this.props.validate != 'undefined') {
            if (this.validate(value)) {
                this.props.onChange && this.props.onChange(value);
            }
        }
        else
            this.props.onChange && this.props.onChange(value);
    };
    TextField.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, value = _a.value, defaultValue = _a.defaultValue, style = _a.style, className = _a.className, multiline = _a.multiline, singlerow = _a.singlerow, disabled = _a.disabled, type = _a.type, theme = _a.theme;
        var classes = 'ui-textfield ';
        if (className)
            classes += className;
        if (disabled)
            classes += 'disabled';
        var InputTSX = (react_1.default.createElement("input", { className: 'ui-textfield-reset' + (this.props.decoration == 'none' ? '' : ' ui-textfield-input'), defaultValue: defaultValue, value: value, onChange: function (event) { return _this.onChange(event.currentTarget.value); }, style: {
                borderColor: theme.borderColor,
                backgroundColor: theme.backgroundColor
            }, disabled: disabled, type: type }));
        var TextAreaTSX = (react_1.default.createElement("textarea", { className: 'ui-textfield-reset' + (this.props.decoration == 'none' ? '' : ' ui-textfield-textarea'), defaultValue: defaultValue, value: value, onChange: function (event) { return _this.onChange(event.currentTarget.value); }, onKeyDown: function (event) {
                if (singlerow && event.keyCode === 13) {
                    event.preventDefault();
                }
            }, style: {
                borderColor: theme.borderColor,
                backgroundColor: theme.backgroundColor
            }, disabled: disabled }));
        return (react_1.default.createElement("div", { className: classes, style: style },
            label && react_1.default.createElement("div", { style: { color: theme.labelColor }, className: 'ui-textfield-label' }, label),
            multiline ? TextAreaTSX : InputTSX));
    };
    return TextField;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(TextField, __assign({}, props, { theme: {
        backgroundColor: theme.interface,
        borderColor: theme.pale,
        labelColor: theme.lowlight
    } }))); })); });
