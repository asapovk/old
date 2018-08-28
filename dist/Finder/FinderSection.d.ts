import React, { CSSProperties } from 'react';
interface FinderSectionProps {
    label?: string;
    style?: CSSProperties;
}
declare class FinderSection extends React.Component<FinderSectionProps> {
    state: {
        expand: boolean;
    };
    render(): JSX.Element;
}
export default FinderSection;
