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
        fetching: boolean;
    };
    componentWillMount(): void;
    updateChildren(): void;
    passFinderProps(children: any, level: any): any[];
    filterChange(value: any, level: any): void;
    submenu(children: any, filter: any, level: any, filterPlaceholder: any, updateChildren: any, update: any): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
export default Finder;
