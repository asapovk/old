import { css } from '@emotion/core'
import { useTheme, useTypography } from '../../hooks';

export default (displaySideBar?: boolean) => {
    const theme = useTheme().theme
    const typography = useTypography();

    return {
        sidebar: {
            container: css({
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                top: 0,
                bottom: 0,
                left: 0,
                width: '15rem',
                boxSizing: 'border-box',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.pale.hex,
                background: 'linear-gradient(270deg, #F2F0F5 0%, #FAF7FC 100%)',
                padding: '2.75rem 0 2.75rem 2.75rem',
                '@media (max-width: 768px)': {
                    position: 'relative',
                    width: '100%',
                    padding: '2.75rem',
                }
            }),

            user: {
                container: css({
                    marginBottom: '3.5rem',
                }),

                avatar: css({
                    display: 'flex',
                    color: theme.textOnAccent.hex,
                    alignItems: 'center',
                    width: '4.5rem',
                    height: '4.5rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, #A567C2 0%, #6B368F 100%)',
                    "> div": {
                        ...typography.display[2],
                        width: 'inherit',
                        textAlign: 'center',
                        textTransform: 'uppercase'
                    }
                }),

                name: css({
                    display: 'block',
                    marginTop: '.75rem',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingRight: '1rem'
                })
            },

            logo: css({
                paddingTop: '2.5rem',
                height: '3rem',
                marginLeft: '-2.75rem'
            }),
        },

        main: {
            container: css({
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                boxSizing: 'border-box',
                marginLeft: '15rem',
                padding: '2.75rem 4.5rem',
                '@media (max-width: 768px)': {
                    marginLeft: '0',
                }
            }),

            holder: css({
                display: 'flex',
                flexBasis: 960,
                flexDirection: 'column',
                '@media (max-width: 768px)': {
                    display: 'block',
                    width: '100%'
                }
            }),

            menu: css({
                display: 'flex',
                alignItems: 'center',
                height: '4.5rem',
                width: '100%',
            }),
        }
    }
}