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
var Prototype_1 = __importDefault(require("./Prototype"));
var DatePicker_1 = __importDefault(require("../DatePicker/DatePicker"));
var CDatePicker = /** @class */ (function (_super) {
    __extends(CDatePicker, _super);
    function CDatePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CDatePicker.prototype.render = function () {
        var _this = this;
        if (!this.isVisible())
            return null;
        var props = {
            style: this.getProperty("style", {}),
            format: this.getProperty("format"),
            value: this.getProperty("value"),
            minValue: this.getProperty("minValue"),
            maxValue: this.getProperty("maxValue"),
            label: this.getProperty("label"),
            // locale?: string
            onChange: function (value) { return _this.setValue(value); },
        };
        return (react_1.default.createElement(DatePicker_1.default, __assign({}, props)));
    };
    CDatePicker.defaultProps = {};
    return CDatePicker;
}(Prototype_1.default));
exports.default = CDatePicker;
