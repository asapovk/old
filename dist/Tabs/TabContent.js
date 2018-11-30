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
var TabContent = /** @class */ (function (_super) {
    __extends(TabContent, _super);
    function TabContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContent.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement("div", { style: styles.tabs.container, className: "ui-tabs-content" + (_this.props.active ? " active" : "") + (_this.props.mobileActive ? " mobileActive" : "") },
            _this.props.mobileActive && (react_1.default.createElement("div", { className: "ui-tabs-content-mobile-header" },
                react_1.default.createElement(__1.Button, { className: "ui-tabs-content-mobile-header-backBtn", onClick: _this.props.onClose, label: _this.props.backTitle || "Назад" }),
                _this.props.label && react_1.default.createElement("div", { className: "ui-tabs-content-mobile-header-title" }, _this.props.label))),
            _this.props.children)); }));
    };
    return TabContent;
}(react_1.default.Component));
exports.default = TabContent;
