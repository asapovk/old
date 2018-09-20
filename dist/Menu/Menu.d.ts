interface Props {
    header?: any;
    search?: boolean;
    toolsLeft?: any[];
    toolsRight?: any[];
    pin?: boolean;
    style?: any;
    searchDefaultValue?: string;
    searchValue?: string;
    onSearch?: (value: string) => void;
    onSearchSubmit?: (value: string) => void;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
