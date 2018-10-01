import React, { ReactElement } from 'react';
import { InputProps } from './TextField';
interface Props {
    style: any;
    leftIcon?: ReactElement<any>;
    rightIcon?: ReactElement<any>;
}
declare class Input extends React.Component<Props & InputProps> {
    render(): JSX.Element;
}
export default Input;
