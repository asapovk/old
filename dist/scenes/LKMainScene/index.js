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
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
var hooks_1 = require("../../hooks");
var core_2 = require("../../core");
var react_1 = require("react");
exports.default = (function (props) {
    var styles = styles_1.default();
    var browser = hooks_1.useBrowser();
    var isMobile = browser.width <= 768;
    if (props.preparing) {
        return (core_1.jsx(core_2.Spinner, { spinning: true, center: true }));
    }
    var Back = function (label, onClick) { return (core_1.jsx(__1.Flexbox, { css: styles.main.back, onClick: onClick },
        core_1.jsx(__1.Icon, { type: 'arrow-left', shape: 'oval', size: '1rem', color: 'highlight' }),
        core_1.jsx(__1.C1, { children: label, ml: '.75rem' }))); };
    var Menu = (core_1.jsx(__1.Flexbox, { css: styles.main.menu },
        props.back
            ? Back('Назад', function () { return props.onBack && props.onBack(); })
            : isMobile && Back('Счета', function () { return props.onSidebar && props.onSidebar(true); }),
        props.components.menu));
    var Login = function (props) {
        var _a = react_1.useState(false), hovered = _a[0], setHovered = _a[1];
        return props.user && (core_1.jsx(__1.Flexbox, { column: true, css: styles.sidebar.user.container },
            core_1.jsx(__1.Flexbox, { css: styles.sidebar.user.avatar.container, onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); } },
                hovered && (core_1.jsx(__1.Flexbox, { css: styles.sidebar.user.avatar.change, onClick: function () { return props.user.onAvatarChange && props.user.onAvatarChange(); }, children: core_1.jsx(__1.Icon, { type: 'photo' }) })),
                props.user.avatar
                    ? core_1.jsx("div", { css: styles.sidebar.user.avatar.picture(props.user.avatar) })
                    : props.user.shortname
                        && core_1.jsx("div", { css: styles.sidebar.user.avatar.shortname, children: (core_1.jsx("div", { children: props.user.shortname.slice(0, 2) })) })),
            core_1.jsx(__1.C1, { bold: true, css: styles.sidebar.user.name, children: props.user.name }),
            core_1.jsx(__1.C2, { onClick: props.user.onLogout, children: '\u0412\u044B\u0439\u0442\u0438', pt: '.25rem', css: core_1.css({ cursor: 'pointer' }) })));
    };
    var Sidebar = props.components.sidebar && (core_1.jsx("div", { css: styles.sidebar.container(!isMobile || (isMobile && props.showSidebar)) },
        core_1.jsx("div", { css: styles.sidebar.background }),
        core_1.jsx(Login, __assign({}, props)),
        core_1.jsx("div", { css: styles.sidebar.content }, props.components.sidebar),
        core_1.jsx("div", { css: styles.sidebar.logo }, props.components.logo)));
    var Main = (core_1.jsx("div", { css: styles.main.container },
        core_1.jsx("div", { css: styles.main.holder },
            Menu,
            core_1.jsx("div", null, props.pending
                ? core_1.jsx(__1.Flexbox, { justifyContent: 'center', mt: '10rem', children: core_1.jsx(core_2.Spinner, { spinning: true }) })
                : props.components.main))));
    var Mask = isMobile && props.showSidebar && (core_1.jsx("div", { css: styles.mask, onClick: function () {
            return props.onSidebar && props.onSidebar(false);
        } }));
    return (core_1.jsx(__1.Flexbox, { css: styles.container },
        Sidebar,
        Mask,
        Main));
});
