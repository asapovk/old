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
    return (core_1.jsx(__1.Flexbox, { justifyContent: 'center', flexDirection: browser.isMobile ? 'column' : 'row' },
        browser.isMobile && (core_1.jsx("div", { css: styles.menu.container },
            core_1.jsx("div", { css: styles.menu.holder }, props.components.menu))),
        props.displaySideBar && (core_1.jsx(__1.Flexbox, { css: styles.sidebar.container },
            core_1.jsx("div", { css: styles.sidebar.content },
                props.components.sidebar,
                core_1.jsx("div", null, props.components.logo)))),
        !browser.isMobile && (core_1.jsx(__1.Flexbox, { css: styles.main.container },
            core_1.jsx("div", { css: styles.menu.container }, props.components.menu),
            core_1.jsx(__1.Flexbox, { css: styles.main.content }, props.components.main)))));
});
