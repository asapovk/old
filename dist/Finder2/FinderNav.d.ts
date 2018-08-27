import React from 'react';
interface FinderNavProps {
    label?: string;
    badge?: number;
    filter?: boolean;
    filterPlaceholder?: string;
}
declare class FinderNav extends React.Component<FinderNavProps> {
    render(): JSX.Element;
}
export default FinderNav;
