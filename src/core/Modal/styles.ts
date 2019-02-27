import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import ModalTypes from './types';

export default (props: ModalTypes.StyleProps) => {
    const theme = useTheme().theme;
    const { visible, center } = props;

    return {
        overlay: css({
            visibility: visible ? 'visible' : 'hidden',
            opacity: visible ? 1 : 0,
            zIndex: 500,
            position: 'fixed',
            width: "100%",
            height: "100%",
            backgroundColor: theme.text.rgba(0.2),
            display: center ? "flex" : "block",
            justifyContent: "center",
            alignItems: "center",
            overflowY: 'auto',
        }),
        window: css({
            visibility: visible ? 'visible' : 'hidden',
            opacity: visible ? 1 : 0,
            zIndex: 500,
            backgroundColor: theme.interface.hex,
            minHeight: '10rem',
            minWidth: '15rem',
            maxWidth: '40rem',
            padding: '1.25rem',
            margin: '0 auto',

        }),
        header: css({
            marginTop: '-0.5rem',
        }),
        title: css({

        }),
        subtitle: css({

        }),
    }
}