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
var Themes_1 = require("../Themes");
var Notifications = /** @class */ (function (_super) {
    __extends(Notifications, _super);
    function Notifications() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            notifications: []
        };
        return _this;
    }
    Notifications.prototype.pushNotification = function (options) {
        var theme = Themes_1.getTheme();
        this.setState({
            notifications: this.state.notifications.concat(react_1.default.createElement("div", { style: {
                    color: theme.text.hex
                } },
                react_1.default.createElement("div", null, options.title),
                react_1.default.createElement("div", null, options.text)))
        });
    };
    Notifications.prototype.render = function () {
        return (react_1.default.createElement(__1.Portal, null,
            react_1.default.createElement(__1.Flexbox, { inline: true, column: true, className: "ui-notifications" }, this.state.notifications.map(function (notification, index) {
                return (react_1.default.createElement(__1.Flexbox, { className: "ui-notifications-item", key: index }, notification));
            }))));
    };
    return Notifications;
}(react_1.default.Component));
exports.default = (function (options) {
    //@ts-ignore
    var viewport = document.__uiviewport;
    if (!viewport) {
        throw ("No viewport was found, that needed for Action.notification() render");
    }
    var notifications = viewport.getActionById("notifications");
    if (!notifications) {
        var extra_1 = { ref: null };
        notifications = {
            component: react_1.default.createElement(Notifications, { ref: function (ref) { return extra_1.ref = ref; } }),
            extra: extra_1
        };
        viewport.mountAction(notifications.component, "notifications", extra_1);
    }
    setTimeout(function () { return notifications.extra.ref.pushNotification(options); }, 1);
});
