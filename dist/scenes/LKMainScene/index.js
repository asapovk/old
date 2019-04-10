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
var Login_1 = __importDefault(require("./Login"));
exports.default = (function (props) {
    var styles = styles_1.default();
    var browser = hooks_1.useBrowser();
    var isMobile = browser.width <= 1024;
    if (props.preparing) {
        return (core_1.jsx(__1.Flexbox, { css: core_1.css({ height: "100%" }), column: true, justifyContent: "center", alignContent: "center", alignItems: "center" },
            core_1.jsx(core_2.Spinner, { spinning: true }),
            typeof props.preparing === "string" && (core_1.jsx(__1.C2, { bold: true, color: "lowlight", css: core_1.css({ marginTop: "2rem" }) }, props.preparing))));
    }
    var Menu = (core_1.jsx(__1.Flexbox, { css: styles.main.menu },
        core_1.jsx(Back, __assign({}, props, { styles: styles, isMobile: isMobile })),
        props.components.menu));
    var Sidebar = props.components.sidebar && (core_1.jsx("div", { css: styles.sidebar.container(isMobile, !isMobile || (isMobile && props.showSidebar)) },
        core_1.jsx("div", { css: styles.sidebar.background }),
        core_1.jsx(Login_1.default, __assign({}, props, { styles: styles, isMobile: isMobile })),
        core_1.jsx("div", { css: styles.sidebar.content }, props.components.sidebar),
        core_1.jsx("div", { css: styles.sidebar.logo }, props.components.logo)));
    var Main = (core_1.jsx("div", { css: styles.main.container(isMobile && props.showSidebar) },
        core_1.jsx("div", { css: styles.main.holder },
            Menu,
            core_1.jsx("div", null, props.pending
                ?
                    core_1.jsx(__1.Flexbox, { css: core_1.css({ height: "100%" }), column: true, alignItems: "center", mt: '10rem' },
                        core_1.jsx(core_2.Spinner, { spinning: true }),
                        typeof props.pending === "string" && (core_1.jsx(__1.C2, { bold: true, color: "lowlight", css: core_1.css({ marginTop: "2rem" }) }, props.pending)))
                : props.components.main))));
    var Mask = props.components.sidebar && (core_1.jsx("div", { css: styles.mask(isMobile && props.showSidebar), onClick: function () { return props.onSidebar && props.onSidebar(false); } }));
    return (core_1.jsx(__1.Flexbox, { css: styles.container },
        Sidebar,
        Mask,
        Main));
});
var Back = function (props) {
    var onClick = function () { return props.onBack && props.onBack(); };
    var label = 'Назад';
    var iconType = 'arrow-left';
    if (props.isMobile && !props.back) {
        onClick = function () { return props.onSidebar && props.onSidebar(true); };
        label = 'Счета';
        iconType = 'other';
    }
    return (core_1.jsx(__1.Flexbox, { css: props.styles.main.back(props.back || props.isMobile), onClick: onClick },
        core_1.jsx(__1.Icon, { type: iconType, shape: 'oval', size: '1rem', color: 'highlight' }),
        core_1.jsx(__1.C1, { children: label, ml: '.75rem' })));
};
