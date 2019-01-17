"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
var styles_1 = __importDefault(require("./Styles"));
exports.default = (function (props) {
    var name = props.name, fullname = props.fullname, login = props.login, role = props.role, children = props.children, avatar = props.avatar;
    var styles = styles_1.default();
    function LoginInformation() {
        return core_1.jsx("div", null, name);
    }
    return (core_1.jsx(__1.Popup, { trigger: avatar
            ? core_1.jsx("div", { css: styles.wrapper, children: avatar })
            : core_1.jsx(__1.Icon, { type: "user" }), children: core_1.jsx(LoginInformation, null) }));
});
