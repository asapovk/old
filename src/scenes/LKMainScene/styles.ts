import { css } from '@emotion/core'
import { useTheme, useTypography } from '../../hooks';

export default () => {
    const theme = useTheme().theme
    const typography = useTypography();

    const breakpoints = [414, 768, 1024]

    const mq = breakpoints.map(
        bp => `@media (max-width: ${bp}px)`
    )

    return {
        theme: theme,

        container: css({

        }),

        mask: (display: boolean) => css({
            background: 'rgba(0,0,0,.3)',
            position: 'fixed',
            zIndex: 3,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 1,
            transition: 'all .25s ease-out',
            visibility: 'visible',
        }, !display && {
            visibility: 'hidden',
            opacity: 0,
        }),

        main: {
            container: css({
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                boxSizing: 'border-box',
                padding: '2.75rem 4.5rem',
                overflow: 'hidden',
                [mq[1]]: {
                    padding: '2.5rem',
                    // position: displaySidebar ? 'fixed' : 'relative'
                    position: 'relative',
                },
                [mq[0]]: {
                    padding: '1.25rem',
                },
            }),

            holder: css({
                display: 'flex',
                flex: '1 1 960px',
                maxWidth: '960px',
                minWidth: 0,
                flexDirection: 'column',
                [mq[1]]: {
                    display: 'block',
                    width: '100%'
                },
            }),

            menu: css({
                display: 'flex',
                alignItems: 'center',
                height: '4.5rem',
                width: '100%',
                marginBottom: '2.75rem',
            }),

            back: (needDisplay: boolean) => css({
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                width: 0,
                margin: 0,
                padding: 0,
                border: 'none',
                transition: 'all .2s ease-out',
                opacity: 0,
                transform: 'translateX(-40px)'
            }, needDisplay && {
                transform: 'translateX(0px)',
                opacity: 1,
                width: '6.25rem',
                paddingRight: '1rem',
                marginRight: '1rem',
                borderRight: '1px solid ' + theme.pale.rgb,
            }),
        },

        sidebar: {
            container: (isMobile, display) => css({
                // display: display ? 'flex' : 'none',
                display: 'flex',
                position: 'sticky',
                flexDirection: 'column',
                top: 0,
                width: '15rem',
                boxSizing: 'border-box',
                padding: '2.75rem 0 2.75rem 2.75rem',
                // maxHeight: 'max-content',
                // minHeight: '100vh',
                minHeight: '100%',
                justifyContent: 'space-between',
                zIndex: 4,

                /*
                *  Chrome scroll lag repair   
                */
                WebkitBackfaceVisibility: 'hidden',
                WebkitTransform: 'translateZ(0)',
            }, isMobile && {
                position: 'absolute',
                // top: 0,
                // left: 0,
                // bottom: 0,
                transition: 'transform .25s ease-out',
                willChange: 'transform',
                transform: 'translateX(-20rem)'
            }, display && {
                transform: 'translateX(0)'
            }),

            background: css({
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                width: '15rem',
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: theme.pale.hex,
                background: 'linear-gradient(270deg, #F2F0F5 0%, #FAF7FC 100%)',
                zIndex: 3
            }),

            user: {
                container: css({
                    position: 'absolute',
                    zIndex: 4
                }),

                avatar: {
                    container: css({
                        width: '4.5rem',
                        height: '4.5rem',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        cursor: 'pointer'
                    }),

                    picture: (image) => css({
                        display: 'flex',
                        flex: 1,
                        background: `url(${image}) no-repeat center center`,
                        backgroundSize: 'cover',
                    }),

                    shortname: css({
                        display: 'flex',
                        flex: 1,
                        color: '#FFFFFF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(180deg, #A567C2 0%, #6B368F 100%)',
                        "> div": {
                            ...typography.display[2],
                            width: 'inherit',
                            textAlign: 'center',
                            textTransform: 'uppercase'
                        }
                    }),

                    hover: css({
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        background: 'black',
                        opacity: .8,
                        color: 'white',
                        fontSize: '2rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }),

                    input: css({
                        opacity: 0,
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        fontSize: '1000px !important',
                        height: '300px',
                        cursor: 'inherit',
                        zIndex: 5
                    })
                },

                name: css({
                    display: 'block',
                    marginTop: '.75rem',
                    paddingRight: '1rem'
                })
            },

            content: css({
                zIndex: 4,
                marginTop: '11.25rem'
            }),

            logo: css({
                paddingTop: '3.5rem',
                width: '8rem',
                marginLeft: '.75rem',
                zIndex: 4
            }),
        },
    }

}