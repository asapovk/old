interface DataSet {
    title: string;
    values: number[];
    borderColor?: string;
    backgroundColor?: string;
    borderCapStyle?: "butt" | "round" | "square";
    borderJoinStyle?: "bevel" | "round" | "miter";
}
export interface Props {
    labals: string[];
    data: DataSet[];
    responsive?: boolean;
    tension?: number;
}
export interface ThemedProps extends Props {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
