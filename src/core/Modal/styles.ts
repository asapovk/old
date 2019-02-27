import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import ModalTypes from './types';

export default (props: ModalTypes.StyleProps) => {
    const theme = useTheme().theme;
    const { visible, center } = props;

    return {
        overlay: css({
            opacity: visible ? 1 : 0,
            zIndex: 500,
            position: 'fixed',
            width: "100%",
            height: "100%",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,.5)",
            display: center ? "flex" : "block",
            justifyContent: "center",
            alignItems: "center",
            overflowY: 'auto',
            backdropFilter: "blur(4px)",
            transition: 'opacity 0.25s',
            backfaceVisibility: "hidden",
        }),
        window: css({
            opacity: visible ? 1 : 0,
            zIndex: 500,
            backgroundColor: theme.interface.hex,
            minHeight: '1rem',
            minWidth: '15rem',
            maxWidth: '40rem',
            padding: '1.25rem',
            margin: '0 auto',
            borderRadius: theme.radius.window,
            transition: 'all 0.5s',
            transform: visible ? 'translateY(0)' : 'translateY(-20px)'
        }),
        header: css({
            marginTop: '-0.5rem',
        }),
        cross: css({
            marginTop: '0.25rem',
            cursor: 'pointer',
            transition: 'all 0.25s',
            transform: "scale(1)",
            ':hover': {
                transform: "scale(1.1)"
            },
            ':active': {
                transform: "scale(1)"
            }
        })
    }
}