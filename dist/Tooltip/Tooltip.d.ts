import React from 'react';
declare enum TooltipTypes {
    error = "error"
}
declare enum TooltipPositions {
    'Bottom Left' = "bottom-left",
    'Bottom Rigth' = "bottom-right",
    'Bottom Center' = "bottom-center",
    'Top Left' = "top-left",
    'Top Rigth' = "top-right",
    'Top Center' = "top-center",
    'Left top' = "left-top",
    'Left middle' = "left-middle",
    'Left bottom' = "left-bottom",
    'Right top' = "right-top",
    'Right middle' = "right-middle",
    'Right bottom' = "right-bottom"
}
interface TargetCoordinates {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
interface TooltipCoordinates {
    top: number;
    left: number;
}
interface TooltipProps {
    type?: TooltipTypes;
}
declare class Tooltip extends React.Component<TooltipProps> {
    state: {
        targetCoord: TargetCoordinates;
        tooltipStyle: TooltipCoordinates;
        content: Element | undefined;
        position: TooltipPositions;
        show: boolean;
    };
    tooltipRef: HTMLDivElement | null;
    targetRef: HTMLElement | null;
    handleClickOutside: (event: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateTooltipCoord(position: TooltipPositions): void;
    show(content: Element, position: TooltipPositions): void;
    hide(): void;
    render(): JSX.Element;
}
export default Tooltip;
