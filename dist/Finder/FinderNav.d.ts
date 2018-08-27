import React from 'react';
interface FinderNavProps {
    label: string;
    filter?: boolean;
    filterPlaceholder?: string;
    render?: (children: any, filter: any, level: any, filterPlaceholder: any, updateChildren: any, update: any) => void;
    level?: number;
}
declare class FinderNav extends React.Component<FinderNavProps> {
    constructor(props: any);
    expand(children: any, update: any): void;
    updateChildren(): void;
    render(): JSX.Element;
}
export default FinderNav;
