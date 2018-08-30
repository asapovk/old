import React, { CSSProperties } from 'react';
interface FinderProps {
    filter?: boolean;
    tip?: boolean;
    filterPlaceholder?: string;
    style?: CSSProperties;
}
declare class Finder extends React.Component<FinderProps> {
    constructor(props: any);
    state: {
        menues: {
            index: string;
            filter: boolean;
            filterValue: string;
            filterPlaceholder: string;
        }[];
        filterValue: string;
    };
    componentWillMount(): void;
    setMenues(level: any, index: any, filter: any, filterPlaceholder: any): void;
    onFilterChange(value: any, level: any): void;
    filterChildren(children: any, filterValue: any): any;
    passFinderProps(children: any, level: any): React.ReactElement<any>[];
    getCurrentChildren(children: any, menu: any, level: any): any;
    render(): JSX.Element;
}
export default Finder;
