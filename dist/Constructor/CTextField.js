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
var __1 = require("../");
var CTextFiled = /** @class */ (function (_super) {
    __extends(CTextFiled, _super);
    function CTextFiled() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTextFiled.prototype.render = function () {
        var _this = this;
        var _a;
        if (!this.isVisible())
            return null;
        //TODO: correct props
        var props = (_a = {
                style: this.getProperty("style", {}),
                label: this.getProperty("label", ""),
                rows: this.getProperty("rows", undefined),
                rowsMax: this.getProperty("rowsMax", undefined),
                type: this.getProperty("type", "input"),
                help: this.getProperty("help", undefined),
                defaultValue: this.getProperty("defaultValue", ''),
                disabled: this.getProperty("disabled", false),
                password: this.getProperty("password", false),
                placeholder: this.getProperty("placeholder", '')
            },
            _a[this.props.async ? "onBlur" : "onChange"] = function (value) { return _this.setValue(value); },
            _a.loading = this.state.saving,
            _a.errorText = this.state.error,
            _a);
        return react_1.default.createElement(__1.TextField, __assign({}, props));
    };
    CTextFiled.needAppend = true;
    CTextFiled.defaultProps = {};
    return CTextFiled;
}(Prototype_1.default));
exports.default = CTextFiled;
