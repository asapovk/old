"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
var Styles_1 = __importDefault(require("./Styles"));
var hooks_1 = require("../../hooks");
exports.default = (function (props) {
    var styles = Styles_1.default();
    var browser = hooks_1.useBrowser();
    return (core_1.jsx(__1.Flexbox, null,
        core_1.jsx("div", { css: styles.sidebar.holder },
            core_1.jsx(__1.Flexbox, { css: styles.sidebar.content, flexDirection: 'column' },
                browser.isDesktop &&
                    core_1.jsx("div", { css: styles.sidebar.logo }, props.components.logo),
                props.components.sidebar)),
        core_1.jsx(__1.Flexbox, { flexDirection: 'column', alignItems: 'center', flex: 1 },
            core_1.jsx("div", { css: styles.menu.holder },
                core_1.jsx("div", { css: styles.menu.desktop }, props.components.menu)),
            core_1.jsx(__1.Flexbox, { css: styles.main.top, justifyContent: 'center' },
                core_1.jsx("div", { css: styles.main.holder }, props.components.mainTop)),
            core_1.jsx("div", { css: styles.main.holder }, props.components.main),
            core_1.jsx("div", { css: styles.menu.mobile }, props.components.menu))));
});
