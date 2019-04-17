/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flexbox, Icon, C1, C2 } from '../..';
import { useState, Fragment } from 'react';

export default (props) => {

    const [hovered, setHovered] = useState<boolean>(false);

    const Avatar = props.user.avatar
        ? <div css={props.styles.sidebar.user.avatar.picture(props.user.avatar)} />
        : props.user.shortname
        && <div
            css={props.styles.sidebar.user.avatar.shortname}
            children={(
                <div children={props.user.shortname.slice(0, 2)} />
            )}
        />

    const Input = (
        <input
            type='file'
            role='button'
            accept='image/png, image/jpeg'
            css={props.styles.sidebar.user.avatar.input}
            onChange={(event) => {
                event.target.files && props.user.onAvatarChange(event.target.files[0]);
            }}
            onClick={(event) => event.currentTarget.value = ''}
        />
    )

    const Hover = props.user.onAvatarChange && (
        <Fragment>
            {Input}
            {hovered && (
                <Flexbox
                    css={props.styles.sidebar.user.avatar.hover}
                    children={<Icon type='photo' />}
                />
            )}
        </Fragment>
    )

    return props.user && (
        <Flexbox column css={props.styles.sidebar.user.container}>
            <Flexbox
                css={props.styles.sidebar.user.avatar.container}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {props.isMobile
                    ? Input
                    : Hover
                }
                {Avatar}
            </Flexbox>
            <C1
                bold
                css={props.styles.sidebar.user.name}
                children={props.user.name}
            />
            <C2
                onClick={props.user.onLogout}
                children='Выйти'
                pt='.25rem'
                css={css({ cursor: 'pointer' })}
            />
        </Flexbox>
    )
}