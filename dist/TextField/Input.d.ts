import React, { ReactElement } from 'react';
import { Flexbox } from '../';
import { InputProps } from './TextField';
interface Props {
    style: any;
    leftIcon?: ReactElement<Flexbox>;
    rightIcon?: ReactElement<Flexbox>;
    loading?: ReactElement<Flexbox>;
}
declare class Input extends React.Component<Props & InputProps> {
    render(): JSX.Element;
}
export default Input;
