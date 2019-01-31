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
var hooks_1 = require("../../hooks");
exports.default = (function (props) {
    var styles = styles_1.default(props.displaySideBar);
    var browser = hooks_1.useBrowser();
    return (core_1.jsx(__1.Flexbox, { flexDirection: browser.isMobile ? 'column' : 'row' },
        browser.isMobile &&
            core_1.jsx("div", { css: styles.menu.container },
                core_1.jsx("div", { css: styles.menu.holder }, props.components.menu)),
        props.displaySideBar &&
            core_1.jsx(__1.Flexbox, { css: styles.sidebar.holder },
                !browser.isMobile &&
                    core_1.jsx(react_1.Fragment, null,
                        core_1.jsx("div", { css: styles.sidebar.background }),
                        core_1.jsx("div", { css: styles.sidebar.logo.container },
                            core_1.jsx(__1.Flexbox, { css: styles.sidebar.logo.holder },
                                core_1.jsx(__1.Flexbox, { css: styles.sidebar.logo.wrapper }, props.components.logo)))),
                core_1.jsx(__1.Flexbox, { css: styles.sidebar.content }, props.components.sidebar)),
        !browser.isMobile &&
            core_1.jsx(__1.Flexbox, { css: styles.main.container },
                core_1.jsx("div", { css: styles.menu.container },
                    core_1.jsx("div", { css: styles.menu.holder }, props.components.menu)),
                props.components.mainTop &&
                    core_1.jsx(__1.Flexbox, { css: styles.main.top },
                        core_1.jsx("div", { css: styles.main.holder }, props.components.mainTop)),
                core_1.jsx(__1.Flexbox, { css: styles.main.content },
                    core_1.jsx("div", { css: styles.main.holder }, props.components.main)))));
});
