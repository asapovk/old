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
            childrens: any;
            filter: boolean;
            filterValue: string;
            filterPlaceholder: string;
            updateChildren: () => void;
        }[];
    };
    componentWillReceiveProps(): void;
    passFinderProps(children: any, level: any): any[];
    setMenues(children: any, filter: any, level: any, filterPlaceholder: any, updateChildren: any): void;
    filterChange(value: any, level: any): void;
    render(): JSX.Element;
}
export default Finder;
