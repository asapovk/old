import React, { CSSProperties } from 'react';
interface FinderNavProps {
    label: string;
    badge?: number;
    filter?: boolean;
    filterPlaceholder?: string;
    setMenu?: (filter: any, level: any, filterPlaceholder: any, updateChildren: any, index: any) => void;
    level?: number;
    index?: number;
    style?: CSSProperties;
}
declare class FinderNav extends React.Component<FinderNavProps> {
    expand(): void;
    getChildren(): React.ReactNode;
    render(): JSX.Element;
}
export default FinderNav;
