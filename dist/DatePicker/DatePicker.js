"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var moment_1 = __importDefault(require("moment"));
var MonthGrid_1 = require("./MonthGrid");
moment_1.default.locale("ru_RU");
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
            value: moment_1.default(),
            format: "",
        };
        return _this;
    }
    DatePicker.prototype.componentWillMount = function () {
        if (this.props.value) {
            if (this.props.format) {
                this.setState({
                    value: moment_1.default(this.props.value, this.props.format),
                    format: this.props.format
                });
            }
            else {
                this.setState({
                    value: this.props.value
                });
            }
        }
        else {
            if (this.props.format) {
                this.setState({
                    format: this.props.format
                });
            }
        }
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement(__1.Flexbox, { column: true, style: { lineHeight: 1 } },
            react_1.default.createElement("div", { style: {
                    color: styles.datePicker.main.labelColor, fontSize: 12,
                    marginBottom: 5,
                    textTransform: 'uppercase',
                } }, _this.props.label),
            react_1.default.createElement(__1.TextField, { value: _this.state.value.format(_this.state.format || "DD • MMMM • YYYY"), onClick: function () { return _this.setState({ active: !_this.state.active }); }, 
                // onChange={value => {
                //     if (moment(value).isValid()) {
                //         this.setState({ value });
                //     }
                // }}
                rightIcon: "calendar" }),
            _this.state.active &&
                react_1.default.createElement(MonthGrid_1.MonthGrid, { active: _this.state.active, value: _this.state.value, minValue: _this.props.minValue, maxValue: _this.props.maxValue, onChange: function (value) {
                        _this.setState({ value: value, active: false });
                        if (_this.props.onChange) {
                            if (_this.state.format) {
                                _this.props.onChange(value.format(_this.state.format));
                            }
                            else {
                                _this.props.onChange(value);
                            }
                        }
                    } }))); }));
    };
    return DatePicker;
}(react_1.default.Component));
exports.default = DatePicker;
