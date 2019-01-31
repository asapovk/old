import { Component, CSSProperties } from 'react';
interface SelectOption {
    text: string;
    value: any;
}
export interface SelectProps {
    search?: boolean;
    style?: CSSProperties;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    options?: SelectOption[];
    clearable?: boolean;
    multiselect?: boolean;
    defaultValue?: any;
    dontClose?: boolean;
    onChange?: (value: any) => void;
    children?: any;
}
declare class Select extends Component<SelectProps> {
    private: any;
    holderRef: HTMLDivElement | null;
    searchRef: HTMLInputElement | null;
    state: {
        selectedValues: any[];
        menuVisible: boolean;
        filteredValues: any[];
        isFilterActive: boolean;
    };
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleClickOutside(event: any): void;
    toggleMenu(): void;
    onSelect(selectedValue: string): void;
    onUnselect(unselectedValue: string): void;
    filterOptions(searchText: string): void;
    searchKeyDown(event: any): void;
    render(): JSX.Element;
}
export default Select;
