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
var __1 = require("../");
var Icon_1 = __importDefault(require("../Icon/Icon"));
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
        var _a = this.props, label = _a.label, value = _a.value, defaultValue = _a.defaultValue, style = _a.style, className = _a.className, multiline = _a.multiline, singlerow = _a.singlerow, disabled = _a.disabled, type = _a.type, hint = _a.hint;
        var classes = 'ui-textfield ';
        if (className)
            classes += className;
        if (disabled)
            classes += 'disabled';
        var hintIcon = function (style) {
            if (!_this.props.hintIcon)
                return null;
            return (react_1.default.createElement(__1.Flexbox, { style: { width: 24, height: 34, fontSize: 34, paddingRight: 5, color: style.iconColor } },
                react_1.default.createElement(Icon_1.default, { type: _this.props.hintIcon })));
        };
        var rightIcon = function (style) {
            if (_this.props.rightIcon) {
                return (react_1.default.createElement(__1.Flexbox, { style: { width: 24, height: 34, fontSize: 34, paddingRight: 5, color: style.iconColor } },
                    react_1.default.createElement(Icon_1.default, { type: _this.props.rightIcon })));
            }
            else
                return null;
        };
        var leftIcon = function (style) {
            if (_this.props.leftIcon) {
                return (react_1.default.createElement(__1.Flexbox, { style: { width: 24, height: 34, fontSize: 34, paddingLeft: 5, color: style.iconColor } },
                    react_1.default.createElement(Icon_1.default, { type: _this.props.leftIcon })));
            }
            else
                return null;
        };
        var InputTSX = function (style) { return (react_1.default.createElement(__1.Flexbox, { onClick: _this.props.onClick, className: (_this.props.decoration == 'none' ? '' : ' ui-textfield-input'), style: {
                borderColor: style.borderColor,
                backgroundColor: style.backgroundColor
            } },
            leftIcon(style),
            react_1.default.createElement("input", { onFocus: _this.props.onFocus, onBlur: _this.props.onBlur, defaultValue: defaultValue, style: {
                    color: style.textColor
                }, value: value, onChange: function (event) { return _this.onChange(event.currentTarget.value); }, disabled: disabled, type: type }),
            rightIcon(style))); };
        var TextAreaTSX = function (style) { return (react_1.default.createElement(__1.Flexbox, { onClick: _this.props.onClick, className: (_this.props.decoration == 'none' ? '' : ' ui-textfield-textarea'), style: {
                borderColor: style.borderColor,
                backgroundColor: style.backgroundColor
            } },
            leftIcon,
            react_1.default.createElement("textarea", { onFocus: _this.props.onFocus, onBlur: _this.props.onBlur, defaultValue: defaultValue, style: {
                    color: style.textColor
                }, value: value, onChange: function (event) { return _this.onChange(event.currentTarget.value); }, onKeyDown: function (event) {
                    if (singlerow && event.keyCode === 13) {
                        event.preventDefault();
                    }
                }, disabled: disabled }),
            rightIcon)); };
        return (react_1.default.createElement(Themes_1.default, null, function (styles) { return (react_1.default.createElement("div", { className: classes, style: style },
            label && react_1.default.createElement("div", { style: { color: styles.textField.labelColor }, className: 'ui-textfield-label' }, label),
            multiline ? TextAreaTSX(styles.textField) : InputTSX(styles.textField),
            hint && (react_1.default.createElement(__1.Flexbox, { flex: 1, alignItems: 'center', style: { color: styles.textField.labelColor }, className: 'ui-textfield-hint' },
                hintIcon && hintIcon(styles),
                react_1.default.createElement("div", null, hint))))); }));
    };
    return TextField;
}(react_1.default.Component));
exports.default = TextField;
