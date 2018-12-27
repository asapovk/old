import React, { CSSProperties } from 'react';
interface FinderSectionProps {
    label?: string;
    style?: CSSProperties;
    children?: any;
}
declare class FinderSection extends React.Component<FinderSectionProps> {
    static componentName: string;
    state: {
        expand: boolean;
    };
    render(): JSX.Element;
}
export default FinderSection;