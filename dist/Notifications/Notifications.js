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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../");
var NotificationsItem_1 = __importDefault(require("./NotificationsItem"));
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
        var _this = this;
        var index = this.state.notifications.length;
        this.setState({
            notifications: this.state.notifications.concat(react_1.default.createElement(NotificationsItem_1.default, { options: options, onClose: function () {
                    _this.setState({
                        notifications: _this.state.notifications.filter(function (item, i) { return i != index; })
                    });
                } }))
        });
        setTimeout(function () {
            _this.setState({
                notifications: _this.state.notifications.filter(function (item, i) { return i; })
            });
        }, options.timeout ? options.timeout * 1000 : 2500);
    };
    Notifications.prototype.render = function () {
        return (react_1.default.createElement(__1.Portal, null,
            react_1.default.createElement(__1.Flexbox, { inline: true, column: true, className: "ui-notifications" }, this.state.notifications.map(function (notification, index) {
                return (react_1.default.createElement(react_1.Fragment, { key: index }, notification));
            }))));
    };
    return Notifications;
}(react_1.default.Component));
exports.default = Notifications;
