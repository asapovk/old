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
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(__1.Flexbox, { column: true },
            react_1.default.createElement(__1.TextField, { value: this.state.value.format(this.state.format || "DD • MMMM • YYYY"), onClick: function () { return _this.setState({ active: !_this.state.active }); }, onChange: function (value) {
                    if (moment_1.default(value).isValid()) {
                        _this.setState({ value: value });
                    }
                }, rightIcon: "calendar" }),
            react_1.default.createElement(MonthGrid_1.MonthGrid, { active: this.state.active, value: this.state.value, onChange: function (value) {
                    _this.setState({ value: value, active: false });
                    if (_this.props.onChange) {
                        if (_this.state.format) {
                            _this.props.onChange(value.format(_this.state.format));
                        }
                    }
                } })));
    };
    return DatePicker;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(__1.Theme, null, function (theme) { return (react_1.default.createElement(DatePicker, __assign({}, props, { theme: {} }))); })); });
