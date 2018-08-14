import React from 'react';
import { Tooltip } from '../Tooltip';

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

        return (
            <Tooltip ref={ref => this.tooltip = ref}>
                <div className='ui-login' onClick={() => this.tooltip.show(MenuTSX)}>
                    {AvatarTSX}
                    {name}
                </div>
            </Tooltip>
        )
    }
}

export default Login;