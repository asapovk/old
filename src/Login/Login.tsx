import React from 'react';
import { Popup } from '../Popup';

interface LoginProps {
    name: any
    fullname?: any
    avatar?: any
    login?: any
    role?: any
}
interface Login {
    tooltip: any
}
class Login extends React.Component<LoginProps> {

    render() {
        const { name, fullname, login, role, children, avatar } = this.props;

        const MenuTSX = (
            <div className='ui-login-menu'>
                {fullname && <div className='ui-login-menu-fullname'>{fullname}</div>}
                {login && <div className='ui-login-menu-login'>{'@' + login}</div>}
                {role && <div className='ui-login-menu-role'>Роль: {role}</div>}
                {children && <div className='ui-login-menu-actions'>{children}</div>}
            </div>
        )

        const AvatarTSX = (
            <div className='ui-login-avatar'>
                {avatar ? avatar :
                    <div className='ui-login-avatar-generated'>{login.charAt(0)}</div>
                }
            </div>
        )

        const LoginTSX = (
            <div className='ui-login'>
                {AvatarTSX}
                {name}
            </div>
        )

        return (
            <Popup trigger={LoginTSX}>
                {MenuTSX}
            </Popup>
        )
    }
}

export default Login;