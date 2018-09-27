import React from 'react';
interface DataSet {
    title: string;
    values: number[];
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    fill?: boolean;
    borderCapStyle?: "butt" | "round" | "square";
    borderJoinStyle?: "bevel" | "round" | "miter";
}
export interface Props {
    labels: string[];
    data: DataSet[];
    responsive?: boolean;
    tension?: number;
    loading?: boolean;
    style?: any;
    legendDisplay?: boolean;
    noAnimation?: boolean;
    animationDuration?: number;
    onAnimationComplete?: () => void;
    onAnimationProgress?: () => void;
    type?: "default" | "miniProc";
}
declare class Chart extends React.Component<Props> {
    render(): JSX.Element;
}
export default Chart;
