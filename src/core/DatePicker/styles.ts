/**
 * styles.tsx
 * author: I.Trikoz
 */
import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default () => {

    const theme = useTheme().theme;
    const typography = useTypography();

    return {
        textFieldWrapper: css({
            padding: '0.25rem',
            background: theme.interface.hex,
            ...theme.borders.datepicker,
            borderTop: 0,
            position: 'relative',
            top: "-" + theme.borders.datepicker.borderRadius,
        }),

        textFieldOkButton: css({
            position: 'absolute',
            right: 10,
            top: -28,
        }),

        monthGrid: css({
            position: "relative",
            background: theme.background.hex,
            color: theme.text.hex,
            borderRadius: theme.borders.datepicker.borderRadius,
        }),

        weekDay: css({
            userSelect: "none",
            ...typography.caption[2],
            fontWeight: 500,
        }),

        title: css({
            background: theme.background.hex,
            color: theme.text.hex,
            borderRadius: theme.borders.datepicker.borderRadius,
            padding: '0.25rem'
        }),

        monthTitle: css({
            userSelect: "none",
            ...typography.caption[1],
            fontWeight: 500,
        }),

        yearTitle: css({
            userSelect: "none",
            ...typography.caption[2],
        }),

        /**
         * Styles for day squire
         */
        day: (isActive: Boolean, isCurrent: boolean, isDisabled: boolean, isCurrentMonth: boolean) => {
            const st = {
                transition: "all 0.3s",
                fontWeight: 500,
                width: '2rem',
                height: '2rem',
                cursor: "pointer",
                opacity: 1,
                background: theme.interface.hex,
                ...theme.borders.datepicker,
                borderColor: theme.background.hex,
                color: theme.text.hex,
                userSelect: "none" as "none",
                ...typography.text[1]
            };
            /**
             * This day is from current month
             */
            if (isCurrentMonth) {
                st.background = theme.interface.rgba(0.3)
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
            return css(st);
        }
    }
}