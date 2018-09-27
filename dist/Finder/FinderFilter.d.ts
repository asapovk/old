import React from 'react';
interface Props {
    placeholder?: string;
    clearable?: boolean;
    onChange: (value: any, level: any) => void;
    level: number;
}
declare class FinderFilter extends React.Component<Props> {
    input: HTMLInputElement;
    onChange(event: any): void;
    render(): JSX.Element;
}
export default FinderFilter;
