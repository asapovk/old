"use strict";
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
var Notifications = function (props, ref) {
    var _a = react_1.useState([]), notifications = _a[0], setNotifications = _a[1];
    var styles = styles_1.default();
    react_1.useImperativeHandle(ref, function () { return ({
        pushNotification: function (options) {
            setNotifications(notifications.concat(core_1.jsx(NotificationsItem_1.default, { options: options, onClose: function () {
                    setNotifications(notifications.filter(function (item, i) { return i != notifications.length; }));
                } })));
            setTimeout(function () {
                setNotifications(notifications.filter(function (item, i) { return i; }));
            }, options.timeout ? options.timeout * 1000 : 2500);
        }
    }); });
    return (core_1.jsx(__1.Portal, null,
        core_1.jsx(__1.Flexbox, { inline: true, column: true, css: styles.root, className: 'ui-notifications' }, notifications.map(function (notification, index) {
            return (core_1.jsx(react_1.Fragment, { key: index }, notification));
        }))));
};
exports.default = react_1.forwardRef(Notifications);
