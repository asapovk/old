interface DataSet {
    title: string;
    values: number[];
    borderColor?: string;
    backgroundColor?: string;
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
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
