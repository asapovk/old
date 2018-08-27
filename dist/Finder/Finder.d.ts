import React from 'react';
interface FinderProps {
    filter?: boolean;
    tip?: boolean;
    filterPlaceholder?: string;
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
        }[];
    };
    passFinderProps(children: any, level: any): any[];
    setMenues(filter: any, level: any, filterPlaceholder: any, getChildren: any): void;
    filterChange(value: any, level: any): void;
    render(): JSX.Element;
}
export default Finder;
