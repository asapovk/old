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
var Input_1 = __importDefault(require("./Input"));
var TextArea_1 = __importDefault(require("./TextArea"));
var TextField = /** @class */ (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (value) {
            if (typeof _this.props.validate != 'undefined') {
                if (_this.validate(value)) {
                    _this.props.onChange && _this.props.onChange(value);
                }
            }
            else
                _this.props.onChange && _this.props.onChange(value);
        };
        return _this;
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
    TextField.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, value = _a.value, defaultValue = _a.defaultValue, style = _a.style, multiline = _a.multiline, singlerow = _a.singlerow, disabled = _a.disabled, type = _a.type, hint = _a.hint, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, placeholder = _a.placeholder, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, hintIcon = _a.hintIcon;
        var classes = 'ui-textfield ';
        if (disabled)
            classes += 'disabled';
        var IconTSX = function (type, position, color) { return (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', style: {
                fontSize: 20,
                padding: position === 'right' ? '0px 8px 0px 0px' : '0px 0px 0px 8px',
                color: color
            } },
            react_1.default.createElement(Icon_1.default, { type: type }))); };
        return (react_1.default.createElement(Themes_1.default, null, function (styles) { return (react_1.default.createElement("div", { className: classes, style: style },
            label && (react_1.default.createElement("div", { style: styles.textField.label, className: 'ui-textfield-label', children: label })),
            multiline
                ? (react_1.default.createElement(TextArea_1.default, { onChange: _this.onChange, onClick: onClick, onFocus: onFocus, onBlur: onBlur, style: styles.textField.singleline, value: value, defaultValue: defaultValue, placeholder: placeholder, singlerow: singlerow }))
                : (react_1.default.createElement(Input_1.default, { onChange: _this.onChange, onClick: onClick, onFocus: onFocus, onBlur: onBlur, style: styles.textField.singleline, value: value, defaultValue: defaultValue, type: type, placeholder: placeholder, leftIcon: leftIcon && IconTSX(leftIcon, 'left', styles.theme.lowlight.rgb), rightIcon: rightIcon && IconTSX(rightIcon, 'right', styles.theme.lowlight.rgb) })),
            hint && (react_1.default.createElement(__1.Flexbox, { alignItems: 'flex-start', style: styles.textField.hint, className: 'ui-textfield-hint' },
                hintIcon && (react_1.default.createElement(Icon_1.default, { type: hintIcon })),
                react_1.default.createElement("span", null, hint))))); }));
    };
    return TextField;
}(react_1.default.Component));
exports.default = TextField;
