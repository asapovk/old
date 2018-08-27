import React from 'react';
interface FinderFilterProps {
    placeholder?: string;
    clearable?: boolean;
    onChange: (value: any) => void;
}
declare class FinderFilter extends React.Component<FinderFilterProps> {
    input: HTMLInputElement;
    onChange(event: any): void;
    render(): JSX.Element;
}
export default FinderFilter;
