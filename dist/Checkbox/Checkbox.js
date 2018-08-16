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
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            checked: false
        };
        return _this;
    }
    Checkbox.prototype.onChange = function () {
        var checked = this.state.checked ? false : true;
        this.setState({ checked: checked });
        this.props.onChange && this.props.onChange(checked);
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, indeterminate = _a.indeterminate, disabled = _a.disabled, radio = _a.radio, toggle = _a.toggle, cheked = _a.cheked, onChange = _a.onChange, styles = _a.styles;
        var classes = 'ui-checkbox-input';
        if (radio)
            classes += ' ch-radio';
        if (radio)
            classes += ' ch-toggle';
        if (disabled)
            classes += ' ch-disbaled';
        if (this.state.checked)
            classes += ' ch-checked';
        console.log(this.state);
        var InputTSX = (react_1.default.createElement("div", { className: classes }));
        return (react_1.default.createElement("div", { className: 'ui-checkbox', onClick: function () { return _this.onChange(); } },
            InputTSX,
            react_1.default.createElement("div", { className: 'ui-checkbox-label noselect' }, label)));
    };
    return Checkbox;
}(react_1.default.Component));
exports.default = Checkbox;
