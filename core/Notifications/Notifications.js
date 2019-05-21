"use strict";
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
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../../");
var NotificationsItem_1 = __importDefault(require("./NotificationsItem"));
var styles_1 = __importDefault(require("./styles"));
var notificationStore = [];
var useForceUpdate = function () {
    var _a = react_1.useState(0), state = _a[0], setState = _a[1];
    return function () { return setState(state + 1); };
};
var Notifications = function (props, ref) {
    var styles = styles_1.default();
    var forceUpdate = useForceUpdate();
    react_1.useImperativeHandle(ref, function () { return ({
        pushNotification: function (options) {
            var key = (Math.random() * 999999).toString();
            var timeout = setTimeout(function () {
                notificationStore = notificationStore.filter(function (item) { return item.key !== key; });
                forceUpdate();
            }, options.timeout ? options.timeout * 1000 : 2500);
            notificationStore.push(__assign({}, options, { timeout: timeout,
                key: key }));
            forceUpdate();
        }
    }); });
    return (core_1.jsx(__1.Portal, null,
        core_1.jsx(__1.Flexbox, { inline: true, column: true, css: styles.root, className: 'ui-notifications' }, notificationStore.map(function (notification) {
            return (core_1.jsx(NotificationsItem_1.default, { key: notification.key, options: notification, onClose: function () {
                    clearTimeout(notification.timeout);
                    notificationStore = notificationStore.filter(function (item) { return item.key !== notification.key; });
                    forceUpdate();
                } }));
        }))));
};
exports.default = react_1.forwardRef(Notifications);
