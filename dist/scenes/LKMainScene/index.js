"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
var ScrollView_1 = require("../../extra/ScrollView");
exports.default = (function (props) {
    var styles = styles_1.default();
    var browser = useBrowser_1.default();
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(__1.Flexbox, { css: styles.root },
            core_1.jsx("div", { css: styles.sidebarHolder },
                core_1.jsx(__1.Flexbox, { css: styles.sidebar, flexDirection: 'column' },
                    browser.isDesktop && core_1.jsx("div", { css: styles.logo }, props.components.logo),
                    props.components.sidebar)),
            core_1.jsx("div", { css: styles.main },
                core_1.jsx(ScrollView_1.ScrollView, { customCss: styles.$mainScroll },
                    props.components.mainTop,
                    props.components.main),
                core_1.jsx("div", { css: styles.menuDesktop }, props.components.menu))),
        core_1.jsx("div", { css: styles.menuMobile }, props.components.menu)));
});
