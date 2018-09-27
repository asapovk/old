import React, { CSSProperties } from 'react';
interface Props {
    loading?: boolean;
    center?: boolean;
    style?: CSSProperties;
    title?: string;
    subtitle?: string;
    wrapperReference?: any;
}
declare class ModalView extends React.Component<Props> {
    render(): JSX.Element;
}
export default ModalView;
