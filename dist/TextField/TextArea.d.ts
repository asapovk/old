import React from 'react';
import { TextAreaProps } from './TextField';
interface Props {
    style: any;
}
declare class TextArea extends React.Component<Props & TextAreaProps> {
    render(): JSX.Element;
}
export default TextArea;
