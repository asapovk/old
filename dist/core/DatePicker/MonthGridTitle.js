"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MonthGridTitle.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../../");
var moment_1 = __importDefault(require("moment"));
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var styles = styles_1.default();
    var Action = function (actionProps) { return (core_1.jsx(__1.Flexbox, { flexBasis: 20, alignItems: "center", onClick: function () {
            props.onChange && props.onChange(props.date.clone().add(actionProps.previous ? -1 : 1, "month"));
        }, children: core_1.jsx(__1.Icon, { type: actionProps.previous ? "left" : "right" }) })); };
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(__1.Flexbox, { css: styles.title },
            core_1.jsx(Action, { previous: true }),
            core_1.jsx(__1.Flexbox, { column: true, flex: 1, alignItems: "center", justifyContent: "center" },
                core_1.jsx("div", { css: styles.monthTitle }, props.date.format("MMMM")),
                core_1.jsx("div", { css: styles.yearTitle }, props.date.format("YYYY"))),
            core_1.jsx(Action, { next: true })),
        props.disaplayWeeks && (core_1.jsx(__1.Flexbox, null, moment_1.default.weekdaysShort(true).map(function (day) { return (core_1.jsx(__1.Flexbox, { key: day, flex: 1, css: styles.weekDay, justifyContent: "center", alignItems: "center", children: day.slice(0, 2) })); })))));
});
