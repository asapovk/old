import React from 'react';
interface FinderNavProps {
    label: string;
    badge?: string | number;
    filter?: boolean;
    filterPlaceholder?: string;
    setMenu?: (level: any, index: any, filter: any, filterPlaceholder: any) => void;
    level?: number;
    index?: number;
}
declare class FinderNav extends React.Component<FinderNavProps> {
    static componentName: string;
    expand(): void;
    render(): JSX.Element;
}
export default FinderNav;
