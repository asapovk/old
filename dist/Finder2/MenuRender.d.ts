import React from 'react';
interface MenuRenderProps {
    filter?: boolean;
    filterPlaceholder?: string;
}
declare class MenuRender extends React.Component<MenuRenderProps> {
    state: {
        filter: string;
        csk: null;
        cgk: null;
    };
    isValid(child: any, cls: any): boolean;
    isNav(child: any): boolean;
    isSection(child: any): boolean;
    private getAllSections;
    private FinderNavs;
    private finderContent;
    private filterSection;
    render(): JSX.Element;
}
export default MenuRender;
