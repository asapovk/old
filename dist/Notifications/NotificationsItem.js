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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../");
var NotificationsItem = /** @class */ (function (_super) {
    __extends(NotificationsItem, _super);
    function NotificationsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationsItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, onClose = _a.onClose;
        return (react_1.default.createElement(__1.Theme, null, function (styles) { return (react_1.default.createElement("div", { className: "ui-notifications-item", style: styles.button.main(options.decoration) },
            react_1.default.createElement(__1.Flexbox, null,
                react_1.default.createElement(__1.Flexbox, { column: true, flex: 1, alignContent: "flex-start", alignItems: "flex-start", justifyContent: "flex-start" },
                    react_1.default.createElement("div", { className: "ui-notifications-item-title" }, options.title),
                    react_1.default.createElement("div", { className: "ui-notifications-item-text" }, options.text)),
                react_1.default.createElement(__1.Flexbox, { justifyContent: "center" },
                    react_1.default.createElement("div", { onClick: onClose.bind(_this) },
                        react_1.default.createElement(__1.Icon, { type: "close" })))))); }));
    };
    return NotificationsItem;
}(react_1.default.Component));
exports.default = NotificationsItem;
