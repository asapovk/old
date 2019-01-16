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
        /**
         * Month grid container styles
         */
        container: css({
            position: "relative",
        }),

        underTextFieldWrapper: css({
            padding: '0.25rem',
            background: theme.interface.hex,
            borderRadius: theme.radius.default,
            border: '0.5px solid ' + theme.pale.hex,
            borderTop: 0,
            position: 'relative',
            top: "-" + theme.radius.default,
        }),

        weekDay: css({
            userSelect: "none",
            ...typography.caption[1],
            fontWeight: 500,
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
                border: "0.5px solid",
                fontWeight: 500,
                width: 30,
                height: 30,
                cursor: "pointer",
                opacity: 1,
                borderRadius: theme.radius.default,
                background: theme.interface.hex,
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