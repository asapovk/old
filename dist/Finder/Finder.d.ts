import React, { CSSProperties } from 'react';
interface Props {
    filter?: boolean;
    tip?: boolean;
    filterPlaceholder?: string;
    style?: CSSProperties;
    children?: any;
}
declare class Finder extends React.Component<Props> {
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
    passProps(children: any, level: any): React.ReactElement<any>[];
    getCurrentChildren(children: any, filterValue: any, level: any): any;
    render(): JSX.Element;
}
export default Finder;
