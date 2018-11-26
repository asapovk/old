"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useStyles_1 = __importDefault(require("../hooks/useStyles"));
exports.default = (function (props) {
    var styles = useStyles_1.default();
    var active = props.active, onClick = props.onClick, children = props.children;
    var classes = 'ui-menu-nav';
    if (active)
        classes += ' active';
    return (react_1.default.createElement("div", { className: classes, onClick: onClick, style: {
            color: active ? styles.theme.textOnAccent.rgb : styles.menu.nav.textColor,
            background: active ? styles.menu.nav.textColorActive : 'transparent',
            borderRadius: styles.theme.radius.button
        } }, children));
});
