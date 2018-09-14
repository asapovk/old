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
var Popup_1 = require("../Popup");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.render = function () {
        var _a = this.props, name = _a.name, fullname = _a.fullname, login = _a.login, role = _a.role, children = _a.children, avatar = _a.avatar;
        var MenuTSX = (react_1.default.createElement("div", { className: 'ui-login-menu' },
            fullname && react_1.default.createElement("div", { className: 'ui-login-menu-fullname' }, fullname),
            login && react_1.default.createElement("div", { className: 'ui-login-menu-login' }, '@' + login),
            role && react_1.default.createElement("div", { className: 'ui-login-menu-role' },
                "\u0420\u043E\u043B\u044C: ",
                role),
            children && react_1.default.createElement("div", { className: 'ui-login-menu-actions' }, children)));
        var AvatarTSX = (react_1.default.createElement("div", { className: 'ui-login-avatar' }, avatar ? avatar :
            react_1.default.createElement("div", { className: 'ui-login-avatar-generated' }, login.charAt(0))));
        var LoginTSX = (react_1.default.createElement("div", { className: 'ui-login' },
            AvatarTSX,
            name));
        return (react_1.default.createElement(Popup_1.Popup, { trigger: LoginTSX }, MenuTSX));
    };
    return Login;
}(react_1.default.Component));
exports.default = Login;
