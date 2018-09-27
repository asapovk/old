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
var Icon_1 = require("../Icon");
var Themes_1 = __importDefault(require("../Themes"));
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            checked: false
        };
        return _this;
    }
    Checkbox.prototype.componentWillMount = function () {
        this.setState({
            checked: this.props.checked || this.props.defaultValue || false
        });
    };
    Checkbox.prototype.componentWillReceiveProps = function (nextProps) {
        if (typeof nextProps.checked !== "undefined") {
            this.setState({
                checked: nextProps.checked
            });
        }
    };
    Checkbox.prototype.onChange = function () {
        this.props.onChange && this.props.onChange(!this.state.checked);
        if (typeof this.props.checked === "undefined") {
            this.setState({
                checked: !this.state.checked
            });
        }
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, radio = _a.radio, style = _a.style, uppercase = _a.uppercase;
        var InputTSX = function (style) { return (react_1.default.createElement("div", { className: 'ui-checkbox-input', style: _this.state.checked ? __assign({}, style.inputActive(radio)) : __assign({}, style.input(radio)) }, _this.state.checked ? (radio ? react_1.default.createElement("span", { className: 'ui-checkbox-circle', style: style.circle }) : react_1.default.createElement(Icon_1.Icon, { type: 'check' })) : null)); };
        return (react_1.default.createElement(Themes_1.default, null, function (styles) { return (react_1.default.createElement("div", { className: 'ui-checkbox', onClick: function () { return _this.onChange(); }, style: __assign({}, style, styles.checkbox.main) },
            InputTSX(styles.checkbox),
            react_1.default.createElement("div", { className: 'ui-checkbox-label noselect' + (uppercase ? ' uppercase' : '') }, label))); }));
    };
    return Checkbox;
}(react_1.default.Component));
exports.default = Checkbox;
