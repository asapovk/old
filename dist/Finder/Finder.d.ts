import React from 'react';
interface FinderProps {
    filter?: boolean;
    tip?: boolean;
}
declare class Finder extends React.Component<FinderProps> {
    constructor(props: any);
    state: {
        submenu: any[];
    };
    passProps(children: any, level: any): React.ReactElement<any>[];
    submenu(children: any, filter: any, level: any): void;
    render(): JSX.Element;
}
export default Finder;