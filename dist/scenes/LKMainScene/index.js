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
    return (core_1.jsx(__1.Flexbox, null,
        props.displaySideBar &&
<<<<<<< HEAD
            core_1.jsx(__1.Flexbox, { css: styles.sidebar.holder },
                (browser.isDesktop || browser.isTablet) &&
                    core_1.jsx(react_1.Fragment, null,
                        core_1.jsx("div", { css: styles.sidebar.background }),
                        core_1.jsx("div", { css: styles.sidebar.logo.container },
                            core_1.jsx(__1.Flexbox, { css: styles.sidebar.logo.holder },
                                core_1.jsx(__1.Flexbox, { css: styles.sidebar.logo.wrapper }, props.components.logo)))),
                core_1.jsx(__1.Flexbox, { css: styles.sidebar.content }, props.components.sidebar)),
=======
        core_1.jsx(__1.Flexbox, { css: styles.sidebar.holder },
            core_1.jsx("div", { css: styles.sidebar.background }),
            browser.isDesktop &&
            core_1.jsx("div", { css: styles.sidebar.logo.container },
                core_1.jsx(__1.Flexbox, { css: styles.sidebar.logo.holder },
                    core_1.jsx(__1.Flexbox, { css: styles.sidebar.logo.wrapper }, props.components.logo))),
            core_1.jsx(__1.Flexbox, { css: styles.sidebar.content }, props.components.sidebar)),
>>>>>>> 2577c9d5c30f6c39e287f92e5a3e0ac2c4ff76ba
        core_1.jsx(__1.Flexbox, { css: styles.main.container },
            core_1.jsx("div", { css: styles.menu.container },
                core_1.jsx("div", { css: styles.menu.holder }, props.components.menu)),
            props.components.mainTop &&
<<<<<<< HEAD
                core_1.jsx(__1.Flexbox, { css: styles.main.top },
                    core_1.jsx("div", { css: styles.main.holder }, props.components.mainTop)),
            core_1.jsx("div", { css: styles.main.holder }, props.components.main)),
        browser.isMobile
            && core_1.jsx("div", { css: styles.menu.container },
                core_1.jsx("div", { css: styles.menu.holder }, props.components.menu))));
=======
            core_1.jsx(__1.Flexbox, { css: styles.main.top },
                core_1.jsx("div", { css: styles.main.holder }, props.components.mainTop)),
            core_1.jsx("div", { css: styles.main.holder }, props.components.main),
            core_1.jsx("div", { css: styles.menu.mobile }, props.components.menu))));
>>>>>>> 2577c9d5c30f6c39e287f92e5a3e0ac2c4ff76ba
});
