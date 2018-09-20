interface Props {
    label: string;
    badge?: string | number;
    filter?: boolean;
    filterPlaceholder?: string;
    setFinderMenu?: (level: any, index: any, filter: any, filterPlaceholder: any) => void;
    finderLevel?: number;
    finderIndex?: number;
    active?: boolean;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
