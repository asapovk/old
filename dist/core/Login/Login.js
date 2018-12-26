"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (props) {
    var styles = useTheme_1.default();
    var name = props.name, fullname = props.fullname, login = props.login, role = props.role, children = props.children, avatar = props.avatar;
    var MenuTSX = function (style) { return (react_1.default.createElement("div", { className: 'ui-login-menu' },
        fullname && react_1.default.createElement("div", { className: 'ui-login-menu-fullname' }, fullname),
        login && react_1.default.createElement("div", { style: { color: style.textColor }, className: 'ui-login-menu-login' }, '@' + login),
        role && react_1.default.createElement("div", { className: 'ui-login-menu-role' },
            "\u0420\u043E\u043B\u044C: ",
            role),
        children && react_1.default.createElement("div", { className: 'ui-login-menu-actions' }, children))); };
    var AvatarTSX = function (style) { return (react_1.default.createElement("div", { className: 'ui-login-avatar' }, avatar ? avatar :
        react_1.default.createElement("div", { className: 'ui-login-avatar-generated', style: { textShadow: style.textShadow } }, login.charAt(0)))); };
    var LoginTSX = function (style) { return (react_1.default.createElement("div", { className: 'ui-login' }, AvatarTSX(style))); };
    return (react_1.default.createElement(__1.Popup, { trigger: LoginTSX(styles.login) }, MenuTSX(styles.login)));
});
