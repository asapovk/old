/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flexbox, Icon, C1, C2 } from '../../../../core';
import { useState, Fragment } from 'react';
import { useTypography } from '../../../../hooks';
import { ThemeInterface } from '../../../../styles';

export interface LoginProps {
    name?: string
    shortname?: string
    avatar?: string
    onLogout?: () => void
    onAvatarChange?: (file: File) => void
}


export default (props: LoginProps) => {

    const [hovered, setHovered] = useState<boolean>(false);
    const styles = createStyles();

    const Avatar = props.avatar
        ? <div css={styles.user.avatar.picture(props.avatar)} />
        : props.shortname
        && <div
            css={styles.user.avatar.shortname}
            children={(
                <div children={props.shortname.slice(0, 2)} />
            )}
        />

    const Input = (
        <input
            type='file'
            role='button'
            accept='image/png, image/jpeg'
            css={styles.user.avatar.input}
            onChange={(event) => {
                if (event.target.files && props.onAvatarChange) {
                    props.onAvatarChange(event.target.files[0]);
                }
            }}
            onClick={(event) => event.currentTarget.value = ''}
        />
    )

    const Hover = props.onAvatarChange && (
        <Fragment>
            {Input}
            {hovered && (
                <Flexbox
                    css={styles.user.avatar.hover}
                    children={<Icon type='photo' />}
                />
            )}
        </Fragment>
    )

    return (
        <Flexbox column css={styles.user.container}>
            <Flexbox
                css={styles.user.avatar.container}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* {props.isMobile
                    ? Input
                    : Hover
                } */}
                {Avatar}
            </Flexbox>
            <C1
                bold
                css={styles.user.name}
                children={props.name}
            />
            <C2
                onClick={props.onLogout}
                children='Выйти'
                pt='.25rem'
                css={css({ cursor: 'pointer' })}
            />
        </Flexbox>
    )
}

const createStyles = () => {
    const typography = useTypography();
    return {
        user: {
            container: (theme: ThemeInterface) => css({
                position: 'relative',
                zIndex: 4,
                color: theme.textOnAccent.hex
            }),

            avatar: {
                container: (theme: ThemeInterface) => css({
                    width: '4.5rem',
                    height: '4.5rem',
                    borderRadius: '50%',
                    borderWidth: '0.125rem',
                    borderColor: theme.textOnAccent.hex,
                    borderStyle: 'solid',
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
    }
}