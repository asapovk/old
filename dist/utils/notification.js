"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Notifications_1 = __importDefault(require("../Notifications/Notifications"));
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
            component: react_1.default.createElement(Notifications_1.default, { ref: function (ref) { return extra_1.ref = ref; } }),
            extra: extra_1
        };
        viewport.mountAction(notifications.component, "notifications", extra_1);
    }
    setTimeout(function () { return notifications.extra.ref.pushNotification(options); }, 1);
});
