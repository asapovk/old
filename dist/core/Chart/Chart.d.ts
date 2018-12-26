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
declare const _default: (props: Props) => JSX.Element;
export default _default;
