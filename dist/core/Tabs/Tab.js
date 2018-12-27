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
var __1 = require("../../");
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // //Для анимации
    Tab.prototype.setBackgroundSelectedIndex = function (index, offsetLeft, width) {
        if (!this.hf)
            return;
        this.hf.style.marginLeft = offsetLeft + "px";
        this.hf.style.width = width + "px";
    };
    Tab.prototype.render = function () {
        var _this = this;
        var props = {
            className: "ui-tabs-tab" + (this.props.active ? " active" : "") + (this.props.disabled ? " disabled" : ""),
            onClick: function () { return _this.props.disabled ? {} : _this.props.onClick(); },
            ref: this.props.buttonRef
        };
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement("div", __assign({}, props, { style: _this.props.active ? styles.tabs.tabActive : styles.tabs.tab }),
            _this.props.index === 0 && (react_1.default.createElement("span", { className: "hl", ref: function (ref) { return _this.hf = ref; }, style: styles.tabs.hl })),
            react_1.default.createElement(__1.Flexbox, { className: "ui-tabs-tab-container", column: true, justifyContent: "center", alignContent: "center", alignItems: "center" },
                _this.props.icon && react_1.default.createElement(__1.Icon, { type: _this.props.icon, style: { fontSize: "2.5rem" } }),
                _this.props.bubble &&
                    react_1.default.createElement("div", { className: "ui-tabs-tab-bubble" }, _this.props.bubble),
                _this.props.label))); }));
    };
    return Tab;
}(react_1.default.Component));
exports.default = Tab;
