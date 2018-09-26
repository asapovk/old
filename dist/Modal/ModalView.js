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
var Themes_1 = __importDefault(require("../Themes"));
var Flexbox_1 = require("../Flexbox");
var ModalView = /** @class */ (function (_super) {
    __extends(ModalView, _super);
    function ModalView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalView.prototype.render = function () {
        return (react_1.default.createElement(Flexbox_1.Flexbox, { flexDirection: "column", alignItems: "center", justifyContent: "center", style: { height: this.props.center ? "100%" : "auto" } },
            react_1.default.createElement("div", { className: this.props.loading ? "loading" : "", style: __assign({ color: this.props.theme.textColor, background: this.props.theme.background, borderColor: this.props.theme.borderColor }, this.props.style), ref: this.props.wrapperReference },
                this.props.title ? (react_1.default.createElement("div", { className: "ui-modal-title", style: { color: this.props.theme.titleColor } },
                    this.props.title,
                    this.props.subtitle ? react_1.default.createElement("span", { style: { color: this.props.theme.subtitleColor } }, this.props.subtitle) : null)) : null,
                this.props.children)));
    };
    return ModalView;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(ModalView, __assign({}, props, { theme: {
        textColor: theme.text.rgb,
        titleColor: theme.text.rgb,
        subtitleColor: theme.lowlight.rgb,
        borderColor: theme.pale.rgb,
        background: theme.interface.rgb
    } }))); })); });
