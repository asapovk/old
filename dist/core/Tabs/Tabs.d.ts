import React, { CSSProperties } from 'react';
import { TabTypes } from './';
interface Props {
    type?: TabTypes;
    style?: CSSProperties;
    mobileCurrentPageTitle?: string;
    children: any;
}
declare class Tabs extends React.Component<Props> {
    view: HTMLElement;
    tabRefs: any[];
    maxDesktopWidth: 900;
    state: {
        currentTab: number;
        mobileActive: boolean;
    };
    constructor(props: any);
    updateLayout: (e: any) => void;
    onSelect(currentTab: any): void;
    private setBodyScroll;
    private mobileDeactivateTabIfNeeded;
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    update(i: any): void;
    render(): JSX.Element;
}
export default Tabs;
