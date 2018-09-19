import React from 'react';
import { Popup } from '../Popup';
import Theme from '../Themes';

interface Props {
    name: any
    fullname?: any
    avatar?: any
    login?: any
    role?: any
    children?: any
}
export interface ThemedProps {
    theme
}
interface Login {
    tooltip: any
}
class Login extends React.Component<Props & ThemedProps> {

    render() {
        const { name, fullname, login, role, children, avatar } = this.props;

        const MenuTSX = (
            <div className='ui-login-menu'>
                {fullname && <div className='ui-login-menu-fullname'>{fullname}</div>}
                {login && <div style={{ color: this.props.theme.textColor }} className='ui-login-menu-login'>{'@' + login}</div>}
                {role && <div className='ui-login-menu-role'>Роль: {role}</div>}
                {children && <div className='ui-login-menu-actions'>{children}</div>}
            </div>
        )

        const AvatarTSX = (
            <div className='ui-login-avatar'>
                {avatar ? avatar :
                    <div className='ui-login-avatar-generated' style={{ textShadow: this.props.theme.textShadow }}>{login.charAt(0)}</div>
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

export default (props: Props) => (
    <Theme>
        {theme => (
            <Login {...props} theme={{
                textColor: theme.text,
                textShadow: `0px 1px 6px rgba(${theme.shadow}, 0.5)`

            }} />
        )}
    </Theme>
);