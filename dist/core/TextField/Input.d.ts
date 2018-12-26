import React, { ReactElement } from 'react';
import { Flexbox } from '../';
import { InputProps } from './TextField';
interface Props {
    style: any;
    leftIcon?: ReactElement<Flexbox>;
    rightIcon?: ReactElement<Flexbox>;
    loading?: ReactElement<Flexbox>;
    placeholder?: string;
}
declare class Input extends React.Component<Props & InputProps> {
    state: {
        value: string;
    };
    onChange(value: string): void;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Input;
