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
var __1 = require("../");
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextArea.prototype.render = function () {
        var _a = this.props, value = _a.value, defaultValue = _a.defaultValue, disabled = _a.disabled, singlerow = _a.singlerow, style = _a.style, decoration = _a.decoration, onChange = _a.onChange, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, resize = _a.resize;
        return (react_1.default.createElement(__1.Flexbox, { onClick: onClick, className: (decoration == 'none' ? '' : ' ui-textfield-textarea'), style: style.field },
            react_1.default.createElement("textarea", { onFocus: onFocus, onBlur: onFocus, defaultValue: defaultValue, style: __assign({}, style.input, { resize: resize ? 'both' : 'none' }), value: value, onChange: function (event) { return onChange && onChange(event.currentTarget.value); }, disabled: disabled, onKeyDown: function (event) {
                    if (singlerow && event.keyCode === 13) {
                        event.preventDefault();
                    }
                } })));
    };
    return TextArea;
}(react_1.default.Component));
exports.default = TextArea;
