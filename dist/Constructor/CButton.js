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
var CButton = /** @class */ (function (_super) {
    __extends(CButton, _super);
    function CButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CButton.prototype.render = function () {
        var _this = this;
        if (!this.isVisible())
            return null;
        var props = {
            style: this.getProperty("style", {}),
            outline: this.getProperty("outline"),
            labelCase: this.getProperty("labelCase"),
            label: this.getProperty("label", ""),
            decoration: this.getProperty("decoration"),
            icon: this.getProperty("icon"),
            loading: this.state.saving,
            onClick: function (e) {
                _this.setSaving(true);
                _this.props.onAction(_this.props.object, function (onSuccess) {
                    _this.setSaving(false);
                });
            }
        };
        return react_1.default.createElement(__1.Button, __assign({}, props));
    };
    CButton.defaultProps = {
        onAction: function (_) { return true; }
    };
    return CButton;
}(Prototype_1.default));
exports.default = CButton;
