import React from 'react';
interface FinderNavProps {
    label: string;
    badge?: string | number;
    filter?: boolean;
    filterPlaceholder?: string;
    setFinderMenu?: (level: any, index: any, filter: any, filterPlaceholder: any) => void;
    finderLevel?: number;
    finderIndex?: number;
    active?: boolean;
}
declare class FinderNav extends React.Component<FinderNavProps> {
    static componentName: string;
    expand(): void;
    render(): JSX.Element;
}
export default FinderNav;
