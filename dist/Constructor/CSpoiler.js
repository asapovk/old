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
var CTextFieldSpoiler = /** @class */ (function (_super) {
    __extends(CTextFieldSpoiler, _super);
    function CTextFieldSpoiler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: false
        };
        return _this;
    }
    CTextFieldSpoiler.prototype.changeVisible = function (value) {
        this.setState({
            visible: this.getProperty("invertVisible", false) ? !value : value
        });
        this.setValue(value);
    };
    CTextFieldSpoiler.prototype.render = function () {
        if (!this.isVisible())
            return null;
        var props = {
            label: this.getProperty("label", ""),
            style: this.getProperty("style", {}),
            value: this.getProperty("invertVisible", false) ? !this.state.visible : this.state.visible,
            onChange: this.changeVisible.bind(this)
        };
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(__1.Checkbox, __assign({}, props)),
            this.state.visible ? this.props.children : ""));
    };
    CTextFieldSpoiler.needAppend = true;
    CTextFieldSpoiler.defaultProps = {};
    return CTextFieldSpoiler;
}(Prototype_1.default));
exports.default = CTextFieldSpoiler;
