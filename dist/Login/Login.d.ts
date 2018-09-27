import React from 'react';
interface Props {
    name: any;
    fullname?: any;
    avatar?: any;
    login?: any;
    role?: any;
    children?: any;
}
interface Login {
    tooltip: any;
}
declare class Login extends React.Component<Props> {
    render(): JSX.Element;
}
export default Login;
