"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("..");
var hooks_1 = require("../../hooks");
var Styles_1 = __importDefault(require("./Styles"));
var Mobile_1 = require("./Mobile");
var NavBar_1 = __importDefault(require("./NavBar"));
exports.default = (function (props) {
    var styles = Styles_1.default();
    var browser = hooks_1.useBrowser();
    var title = props.title, style = props.style, tools = props.tools, items = props.items, logo = props.logo, value = props.value, onChange = props.onChange, moreLabel = props.moreLabel;
    var _a = react_1.useState(false), mobileActive = _a[0], setMobileActive = _a[1];
    return (core_1.jsx(__1.Flexbox, { flexDirection: 'column' },
        core_1.jsx(__1.Flexbox, { css: styles.menu.holder, style: style },
            !browser.isDesktop && (core_1.jsx(Mobile_1.MobileMenu, { active: mobileActive, setActive: setMobileActive, styles: styles.mobile.hamburger })),
            core_1.jsx(__1.Flexbox, { alignItems: 'center', flexGrow: browser.isDesktop ? 0 : 1, css: styles.menu.header, children: logo
                    ? logo
                    : core_1.jsx("div", { css: styles.menu.title, children: title }) }),
            browser.isDesktop && (core_1.jsx(NavBar_1.default, { items: items, value: value, styles: styles.navbar, onChange: onChange, moreLabel: moreLabel })),
            tools && (core_1.jsx(__1.Flexbox, { alignItems: 'center', justifyContent: 'flex-end', css: styles.menu.toolbar, children: tools }))),
        !browser.isDesktop && (core_1.jsx(Mobile_1.MobileMenuItems, { items: items, value: value, styles: styles.navbar, onChange: onChange, active: mobileActive }))));
});
