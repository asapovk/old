import { css } from '@emotion/core'
import { useTheme } from '../../hooks'

export default (displaySideBar) => {
    const theme = useTheme().theme

    return {
        sidebar: {
            holder: css({
                width: '20rem',
                zIndex: 3,
                position: 'sticky',
                top: 0,
                alignSelf: 'flex-start',
                flexDirection: 'column',
                '@media (max-width: 768px)': {
                    position: 'relative',
                    width: '100%',
                    marginTop: '1.25rem'
                }

            }),
            content: css({
                width: '20rem',
                zIndex: 3,
                flexDirection: 'column',
                '@media (max-width: 768px)': {
                    width: '100%'
                }
            }),
            background: css({
                top: 0,
                left: 0,
                bottom: 0,
                position: 'fixed',
                zIndex: 2,
                width: '20rem',
                borderRight: '1px solid ' + theme.pale.hex,
                background: theme.interface.hex,
            }),
            logo: {
                container: css({
                    width: '20rem',
                    height: '8.5rem',
                }),
                holder: css({
                    position: 'fixed',
                    width: '20rem',
                    zIndex: 4,
                    alignItems: 'center',
                    flexDirection: 'column',
                    background: theme.interface.hex
                }),
                wrapper: css({
                    padding: '2.5rem 0',
                    height: '3.5rem',
                    width: '12rem',
                    justifyContent: 'center',
                })
            }
        },
        main: {
            container: css({
                position: 'sticky',
                top: 0,
                alignSelf: 'flex-start',
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                '@media (max-width: 768px)': {
                    display: 'none'
                },
            }),
            top: css({
                backgroundColor: theme.background2.hex,
                padding: '2.5rem 0',
                width: '100%',
                justifyContent: 'center',
            }),
            content: css({
                width: '100%',
                justifyContent: 'center',
            }),
            holder: css({
                width: '100%',
                maxWidth: '960px',
                margin: '0 2rem'
            }),
        },
        menu: {
            container: css({
                height: '4rem',
                width: '100%'
            }),
            holder: css({
                position: 'fixed',
                left: displaySideBar
                    ? '20rem'
                    : 0,
                right: 0,
                top: 0,
                zIndex: 1,
                '@media (max-width: 1023px)': {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    zIndex: 1,
                }
            }),
        }
    }
}