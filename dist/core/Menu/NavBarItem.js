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
var react_1 = __importDefault(require("react"));
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (props) {
    var styles = useTheme_1.default();
    var active = props.active, onClick = props.onClick, label = props.label, hidden = props.hidden;
    var classes = 'ui-menu-nav';
    if (hidden)
        classes += ' hidden';
    return (react_1.default.createElement("div", { className: classes, onClick: function () { return onClick && onClick(props.menuKey); }, style: __assign({}, props.style, { color: active ? styles.theme.textOnAccent.rgb : styles.menu.nav.textColor, background: active ? styles.menu.nav.textColorActive : 'transparent', borderRadius: styles.theme.radius.button }), children: label }));
});
