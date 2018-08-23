import React from 'react';
interface FinderSectionProps {
    label?: string;
}
declare class FinderSection extends React.Component<FinderSectionProps> {
    state: {
        expand: boolean;
    };
    render(): JSX.Element;
}
export default FinderSection;
