import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import SelectTypes from './types';

export default (opt: SelectTypes.StyleOptions) => {
    const theme = useTheme().theme;
    return {
        root: css({
            position: 'relative'
        }),
        input: css({
            zIndex: 10,
            ...(opt.open && {
                '> div': {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }
            })
        }),
        dropMenu: css({
            position: 'absolute',
            width: '100%',
            height: '10rem',
            zIndex: 15,
            padding: 0,
            paddingTop: 1,
            marginTop: -1,
            ...(opt.open && {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
            })
        }),
        dropItem: css({
            cursor: 'pointer',
            padding: '0.5rem 0.75rem',
            height: 'auto',
            ':hover': {
                background: theme.background.hex
            }
        })
    }
}