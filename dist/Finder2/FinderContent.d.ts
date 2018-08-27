import React from 'react';
interface FinderContentProps {
    filter?: boolean;
    filterPlaceholder?: string;
}
declare class FinderContent extends React.Component<FinderContentProps> {
    state: {
        filter: string;
    };
    render(): JSX.Element;
}
export default FinderContent;
