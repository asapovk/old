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
    defaultValue?: any;
    onChange?: (options: any) => void;
}
interface Select {
    holderRef: any;
    menuVisible: any;
    inputRef: any;
    state: {
        options: any;
        chosen: any;
        menuVisible: any;
    };
}
declare class Select extends React.Component<SelectProps> {
    constructor(props: any);
    static defaultProps: {
        placeholder: string;
    };
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleClickOutside(event: any): void;
    toggleMenu(): void;
    filterOptions(value: any): void;
    render(): JSX.Element;
}
export default Select;
