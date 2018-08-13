import React from 'react';
interface Tooltip {
    targetRef: any;
    tooltipRef: any;
    targetCoord: any;
    state: {
        targetCoord: any;
        tooltipStyle: any;
        content: any;
        type: any;
        position: any;
        show: any;
    };
}
declare class Tooltip extends React.Component {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside(event: any): void;
    updateTooltipPosition(): void;
    show(content: any, type: any, position: any): void;
    hide(): void;
    render(): JSX.Element;
}
export default Tooltip;
