import React from 'react';
import { Popup } from '../';
import useStyles from '../hooks/useStyles';

export interface ILogin {
    name: any
    fullname?: any
    avatar?: any
    login?: any
    role?: any
    children?: any
}

export default (props: ILogin) => {

    const styles = useStyles();

    const { name, fullname, login, role, children, avatar } = props;

    const MenuTSX = (style) => (
        <div className='ui-login-menu'>
            {fullname && <div className='ui-login-menu-fullname'>{fullname}</div>}
            {login && <div style={{ color: style.textColor }} className='ui-login-menu-login'>{'@' + login}</div>}
            {role && <div className='ui-login-menu-role'>Роль: {role}</div>}
            {children && <div className='ui-login-menu-actions'>{children}</div>}
        </div>
    )

    const AvatarTSX = (style) => (
        <div className='ui-login-avatar'>
            {avatar ? avatar :
                <div className='ui-login-avatar-generated' style={{ textShadow: style.textShadow }}>
                    {login.charAt(0)}
                </div>
            }
        </div>
    )

    const LoginTSX = (style) => (
        <div className='ui-login'>
            {AvatarTSX(style)}
        </div>
    )

    return (
        <Popup trigger={LoginTSX(styles.login)}>
            {MenuTSX(styles.login)}
        </Popup>
    )
}