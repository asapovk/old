import React from 'react';
interface SelectProps {
    search?: any;
    style?: any;
    label?: any;
    placeholder?: any;
    options?: {
        text: string;
        value: string;
    }[];
    clearable?: boolean;
    multiselect?: boolean;
    defaultValue?: any;
    onChange?: (options: any) => void;
}
interface Select {
    holderRef: any;
    menuVisible: any;
    inputRef: any;
    state: {
        options: any;
        menuVisible: any;
        selected: any;
    };
}
declare class Select extends React.Component<SelectProps> {
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleClickOutside(event: any): void;
    toggleMenu(): void;
    onSelect(option: any): void;
    onUnselect(option: any): void;
    filterOptions(value: any): void;
    render(): JSX.Element;
}
export default Select;
