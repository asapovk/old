import React from 'react';
interface FinderNavProps {
    label: string;
    filter?: boolean;
    render: (children: any, filter: any, level: any) => void;
    level: number;
}
declare class FinderNav extends React.Component<FinderNavProps> {
    expand(children: any): void;
    render(): JSX.Element;
}
export default FinderNav;
