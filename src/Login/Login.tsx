import React from 'react';
import { Popup, Styles } from '../';

interface Props {
    name: any
    fullname?: any
    avatar?: any
    login?: any
    role?: any
    children?: any
}

interface Login {
    tooltip: any
}
class Login extends React.Component<Props> {

    render() {
        const { name, fullname, login, role, children, avatar } = this.props;

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
                    <div className='ui-login-avatar-generated' style={{ textShadow: style.textShadow }}>{login.charAt(0)}</div>
                }
            </div>
        )

        const LoginTSX = (style) => (
            <div className='ui-login'>
                {AvatarTSX(style)}
                {name}
            </div>
        )

        return (
            <Styles>
                {styles => (
                    <Popup trigger={LoginTSX(styles.login)}>
                        {MenuTSX(styles.login)}
                    </Popup>
                )}
            </Styles>
        )
    }
}

export default Login;