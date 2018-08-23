import React from 'react';
interface FinderFilterProps {
    placeholder?: string;
    clearable?: boolean;
    filterChange?: (value: any, level: any) => void;
    level?: number;
}
declare class FinderFilter extends React.Component<FinderFilterProps> {
    onChange(value: any): void;
    render(): JSX.Element;
}
export default FinderFilter;
