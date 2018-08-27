import React from 'react';
interface FinderNavProps {
    label: string;
    filter?: boolean;
    filterPlaceholder?: string;
    render?: (filter: any, level: any, filterPlaceholder: any, updateChildren: any) => void;
    level?: number;
}
declare class FinderNav extends React.Component<FinderNavProps> {
    constructor(props: any);
    expand(): void;
    getChildren(): React.ReactNode;
    render(): JSX.Element;
}
export default FinderNav;
