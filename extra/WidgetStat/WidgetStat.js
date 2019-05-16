"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var styles = styles_1.default();
    var children = props.children, onClick = props.onClick, actionTitle = props.actionTitle, loading = props.loading, style = props.style, title = props.title, subtitle = props.subtitle, subtitle2 = props.subtitle2, value1 = props.value1, value2 = props.value2;
    return (core_1.jsx(__1.Widget, { loading: loading, style: style },
        core_1.jsx(__1.Flexbox, { column: true, css: styles.wrapper },
            core_1.jsx(__1.Flexbox, { column: true, flex: 1 },
                core_1.jsx(__1.Flexbox, null,
                    core_1.jsx(__1.Flexbox, { pr: 10, flex: 1, css: styles.title }, title),
                    core_1.jsx(__1.Flexbox, { css: styles.value2 },
                        core_1.jsx(__1.Icon, { type: "chart", style: { fontSize: '1.5 rem' } }),
                        value2)),
                core_1.jsx(__1.Flexbox, { pt: 5 },
                    core_1.jsx(__1.Flexbox, { pr: 10, flex: 1, css: styles.subtitle }, subtitle),
                    core_1.jsx(__1.Flexbox, { css: styles.subtitle2 }, subtitle2))),
            core_1.jsx(__1.Flexbox, { pt: 10, alignItems: "flex-end" },
                core_1.jsx(__1.Flexbox, { pr: 10, flex: 1, css: styles.value1 }, value1),
                typeof onClick === "function" ? core_1.jsx("div", { css: styles.link, onClick: onClick }, actionTitle || "Подробнее") : null)),
        typeof children !== "undefined" ? (core_1.jsx(__1.Flexbox, { flexDirection: 'column', flex: 1, css: styles.extra }, children)) : null));
});
