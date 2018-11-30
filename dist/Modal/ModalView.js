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
var __1 = require("../");
var ModalView = /** @class */ (function (_super) {
    __extends(ModalView, _super);
    function ModalView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalView.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement(__1.Flexbox, { flexDirection: "column", alignItems: "center", justifyContent: "center", style: { height: _this.props.center ? "100%" : "auto" } },
            react_1.default.createElement("div", { className: _this.props.loading ? "loading" : "", style: __assign({ color: styles.modal.view.textColor, borderRadius: styles.modal.view.borderRadius, background: styles.modal.view.background, borderColor: styles.modal.view.borderColor }, _this.props.style), ref: _this.props.wrapperReference },
                _this.props.title ? (react_1.default.createElement("div", { className: "ui-modal-title", style: { color: styles.modal.view.titleColor } },
                    _this.props.title,
                    _this.props.subtitle ? react_1.default.createElement("span", { style: { color: styles.modal.view.subtitleColor } }, _this.props.subtitle) : null)) : null,
                _this.props.children))); }));
    };
    return ModalView;
}(react_1.default.Component));
exports.default = ModalView;
