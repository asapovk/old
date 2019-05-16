import { css } from '@emotion/core';
import { useTheme } from '../../hooks';

export default () => {
    const theme = useTheme().theme;
    return {
        wrapper: {
            padding: '1rem',
        },
        title: css({
            fontSize: '1.125rem',
            textTransform: 'uppercase',
        }),
        subtitle: css({
            fontSize: '0.75rem',
        }),
        subtitle2: css({
            fontSize: '0.75rem',
            textAlign: 'right',
        }),
        value1: css({
            fontWeight: 600,
            fontSize: '1.75rem',
            textTransform: 'uppercase',
        }),
        value2: css({
            fontSize: '1.125',
            textTransform: 'uppercase',
        }),
        link: css({
            fontSize: 14,
            textDecoration: 'underline',
            ':hover': {
                cursor: 'pointer',
            }
        }),
        extra: css({
            margin: '1rem',
            borderTop: "0.5px solid " + theme.pale.hex,
        })
    }
}