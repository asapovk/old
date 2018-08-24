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
var Icon_1 = require("../Icon");
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
        if (this.props.defaultValue || this.props.checked)
            this.setState({ checked: true });
    };
    Checkbox.prototype.onChange = function () {
        var checked = this.state.checked ? false : true;
        this.setState({ checked: this.props.checked ? true : checked });
        this.props.onChange && this.props.onChange(checked);
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, radio = _a.radio, checked = _a.checked, style = _a.style;
        var isChecked = this.state.checked || checked;
        var classes = 'ui-checkbox-input';
        if (radio)
            classes += ' ch-radio';
        if (isChecked)
            classes += ' ch-checked';
        var InputTSX = (react_1.default.createElement("div", { className: classes }, isChecked ? radio ? react_1.default.createElement("span", { className: 'circle' })
            : react_1.default.createElement(Icon_1.Icon, { type: 'check' }) : ''));
        return (react_1.default.createElement("div", { className: 'ui-checkbox', onClick: function () { return _this.onChange(); }, style: style },
            InputTSX,
            react_1.default.createElement("div", { className: 'ui-checkbox-label noselect' }, label)));
    };
    return Checkbox;
}(react_1.default.Component));
exports.default = Checkbox;
