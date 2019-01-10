/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Popup, Icon } from '../';
import createStyles from './styles';
import { useRef, ReactInstance } from 'react';

export interface ILogin {
    name: any
    fullname?: any
    avatar?: any
    login?: any
    role?: any
    children?: any
}

export default (props: ILogin) => {

    const { name, fullname, login, role, children, avatar } = props;
    const styles = createStyles();

    function LoginInformation() {
        return (
            <div>{name}</div>
        )
    }

    return (
        <Popup trigger={(
            <div
                css={styles.wrapper}
                children={avatar ? avatar : <Icon type="user" css={styles.icon} />}
            />
        )}>
            <LoginInformation />
        </Popup>
    )
}