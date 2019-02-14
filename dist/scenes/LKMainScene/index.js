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
var react_1 = require("react");
var core_2 = require("../../core");
exports.default = (function (props) {
    var styles = styles_1.default(props.displaySideBar);
    var browser = hooks_1.useBrowser();
    if (props.preparing) {
        return (core_1.jsx(core_2.Spinner, { spinning: true, center: true }));
    }
    return (core_1.jsx(__1.Flexbox, { flexDirection: browser.isMobile ? 'column' : 'row' },
        (props.components.sidebar && props.displaySideBar) && (core_1.jsx("div", { css: styles.sidebar.container },
            core_1.jsx("div", { css: styles.sidebar.background }),
            core_1.jsx(__1.Flexbox, { flexDirection: 'column', css: styles.sidebar.user.container }, props.user ?
                core_1.jsx(react_1.Fragment, null,
                    core_1.jsx("div", { css: styles.sidebar.user.avatar, children: (core_1.jsx("div", { children: props.user.shortname.slice(0, 2) || 'П' })) }),
                    core_1.jsx(__1.C1, { bold: true, css: styles.sidebar.user.name, children: props.user.name }),
                    core_1.jsx(__1.C2, { onClick: props.user.onLogout, children: '\u0412\u044B\u0439\u0442\u0438', pt: '.25rem' }))
                : (core_1.jsx("div", { css: styles.sidebar.logo }, props.components.logo))),
            core_1.jsx("div", { css: styles.sidebar.content }, props.components.sidebar),
            props.user && (core_1.jsx("div", { css: styles.sidebar.logo }, props.components.logo)))),
        core_1.jsx("div", { css: styles.main.container },
            core_1.jsx("div", { css: styles.main.holder },
                core_1.jsx("div", { css: styles.main.menu }, props.components.menu),
                core_1.jsx("div", null, props.pending
                    ? core_1.jsx(__1.Flexbox, { justifyContent: 'center', mt: '10rem', children: core_1.jsx(core_2.Spinner, { spinning: true }) })
                    : props.components.main)))));
});
