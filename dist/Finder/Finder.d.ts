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
            filter: boolean;
            filterValue: string;
            filterPlaceholder: string;
            getChildren: () => void;
            level: number;
            index: number;
        }[];
    };
    findComponentByIndex(childs: any, index: any): any;
    passFinderProps(children: any, menu?: any): any[];
    setMenues(filter: any, level: any, filterPlaceholder: any, getChildren: any, index: any): void;
    onChange(value: any, level: any): void;
    render(): JSX.Element;
}
export default Finder;
