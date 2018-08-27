import React from 'react';
interface FinderFilterProps {
    placeholder?: string;
    clearable?: boolean;
    onChange: (value: any, level: any) => void;
    level: number;
}
declare class FinderFilter extends React.Component<FinderFilterProps> {
    input: HTMLInputElement;
    onChange(event: any): void;
    render(): JSX.Element;
}
export default FinderFilter;
