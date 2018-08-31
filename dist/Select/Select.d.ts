import React, { CSSProperties } from 'react';
interface SelectOption {
    text: string;
    value: string;
}
interface SelectProps {
    search?: boolean;
    style?: CSSProperties;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    options?: SelectOption[];
    clearable?: boolean;
    multiselect?: boolean;
    defaultValue?: string | string[];
    dontClose?: boolean;
    onChange?: (value: string | string[] | null) => void;
}
declare class Select extends React.Component<SelectProps> {
    private: any;
    holderRef: HTMLDivElement | null;
    searchRef: HTMLInputElement | null;
    state: {
        selectedValues: string[];
        menuVisible: boolean;
        filteredValues: string[];
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
