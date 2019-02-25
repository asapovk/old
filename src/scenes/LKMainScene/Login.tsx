/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flexbox, Icon, C1, C2 } from '../..';
import { useState, useRef, Fragment } from 'react';

export default (props) => {

    const imagePicker = useRef<HTMLInputElement>(null);
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

    const Hover = props.user.onAvatarChange && (
        <Fragment>
            <input
                type='file'
                ref={imagePicker}
                accept='.png,.jpg'
                css={css({ display: 'none' })}
                onChange={(event) => {
                    event.target.files && props.user.onAvatarChange(event.target.files[0]);
                }}
            />
            {hovered && (
                <Flexbox
                    css={props.styles.sidebar.user.avatar.change}
                    onClick={() => imagePicker.current && imagePicker.current.click()}
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
                {Hover}
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