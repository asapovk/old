"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * styles.tsx
 * author: I.Trikoz
 */
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    return {
        textFieldWrapper: core_1.css({
            padding: '0.25rem',
            background: theme.interface.hex,
            borderRadius: theme.radius.default,
            border: '0.5px solid ' + theme.pale.hex,
            borderTop: 0,
            position: 'relative',
            top: "-" + theme.radius.default,
        }),
        textFieldOkButton: core_1.css({
            position: 'absolute',
            right: 10,
            top: -28,
        }),
        monthGrid: core_1.css({
            position: "relative",
            background: theme.background.hex,
            color: theme.text.hex,
            borderRadius: theme.radius.button,
        }),
        weekDay: core_1.css(__assign({ userSelect: "none" }, typography.caption[2], { fontWeight: 500 })),
        title: core_1.css({
            background: theme.background.hex,
            color: theme.text.hex,
            borderRadius: theme.radius.button,
            padding: '0.25rem'
        }),
        monthTitle: core_1.css(__assign({ userSelect: "none" }, typography.caption[1], { fontWeight: 500 })),
        yearTitle: core_1.css(__assign({ userSelect: "none" }, typography.caption[2])),
        /**
         * Styles for day squire
         */
        day: function (isActive, isCurrent, isDisabled, isCurrentMonth) {
            var st = __assign({ transition: "all 0.3s", border: "0.5px solid", fontWeight: 500, width: '2rem', height: '2rem', cursor: "pointer", opacity: 1, borderRadius: theme.radius.default, background: theme.interface.hex, borderColor: theme.background.hex, color: theme.text.hex, userSelect: "none" }, typography.text[1]);
            /**
             * This day is from current month
             */
            if (isCurrentMonth) {
                st.background = theme.interface.rgba(0.3);
            }
            /**
             * It is current day
             */
            if (isCurrent) {
                st.background = theme.highlight.hex;
                st.color = theme.textOnAccent.hex;
            }
            /**
             * This day is selected
             */
            if (isActive) {
                st.borderColor = theme.highlight.hex;
            }
            /**
             * This day is disabled to select
             */
            if (isDisabled) {
                st.opacity = 0.3;
            }
            return core_1.css(st);
        }
    };
});
