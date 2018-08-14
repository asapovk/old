import React from 'react';
interface LoginProps {
    name: any;
    fullname?: any;
    avatar?: any;
    login?: any;
    role?: any;
}
interface Login {
    tooltip: any;
}
declare class Login extends React.Component<LoginProps> {
    render(): JSX.Element;
}
export default Login;
