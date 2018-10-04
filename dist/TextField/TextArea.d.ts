import React, { ReactElement } from 'react';
import { Flexbox } from '../';
import { TextAreaProps } from './TextField';
interface Props {
    style: any;
    loading?: ReactElement<Flexbox>;
}
declare class TextArea extends React.Component<Props & TextAreaProps> {
    render(): JSX.Element;
}
export default TextArea;
