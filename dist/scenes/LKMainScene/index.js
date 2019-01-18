"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
var hooks_1 = require("../../hooks");
exports.default = (function (props) {
    var styles = styles_1.default(props.displaySideBar);
    var browser = hooks_1.useBrowser();
    return (core_1.jsx(__1.Flexbox, null,
        props.displaySideBar &&
        core_1.jsx(__1.Flexbox, { css: styles.sidebar.holder },
            core_1.jsx("div", { css: styles.sidebar.background }),
            browser.isDesktop &&
            core_1.jsx("div", { css: styles.sidebar.logo.container },
                core_1.jsx(__1.Flexbox, { css: styles.sidebar.logo.holder },
                    core_1.jsx(__1.Flexbox, { css: styles.sidebar.logo.wrapper }, props.components.logo))),
            core_1.jsx(__1.Flexbox, { css: styles.sidebar.content }, props.components.sidebar)),
        core_1.jsx(__1.Flexbox, { css: styles.main.container },
            core_1.jsx("div", { css: styles.menu.holder },
                core_1.jsx("div", { css: styles.menu.desktop }, props.components.menu)),
            props.components.mainTop &&
            core_1.jsx(__1.Flexbox, { css: styles.main.top },
                core_1.jsx("div", { css: styles.main.holder }, props.components.mainTop)),
            core_1.jsx("div", { css: styles.main.holder }, props.components.main),
            core_1.jsx("div", { css: styles.menu.mobile }, props.components.menu))));
});
