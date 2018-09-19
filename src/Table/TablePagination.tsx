import React, { Component, ComponentElement } from 'react';
import Theme from '../Themes';

export interface PaginationProps {
    pageSize: number
}

interface Props {
    pagination: PaginationProps
    page: number
    data: any[]
    onChange: (page: number) => void
    children?: any
}
export interface ThemedProps {
    theme
}
class TableCheckbox extends React.Component<Props & ThemedProps> {

    render() {
        const { data, pagination, page, theme } = this.props;
        const { pageSize } = pagination;
        const buttons = Math.ceil(data.length / pageSize);

        if (buttons <= 1) {
            return null;
        }

        let buttonsComponents: JSX.Element[] = [];

        for (let i = 0; i < buttons; i++) {
            buttonsComponents.push(
                <div
                    onClick={() => this.props.onChange(i + 1)}
                    className={`ui-table-paggination-button`}
                    style={{
                        color: theme.textColor,
                        backgroundColor: theme.backgroundColor,
                        opacity: page === i + 1 ? 1 : 0.5
                    }}
                    key={i}
                    children={`${i * pageSize}–${i * pageSize + pageSize}`}
                />
            )
        }

        return (
            <div className='ui-table-paggination'>
                {buttonsComponents}
            </div>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <TableCheckbox {...props} theme={{
                textColor: theme.text,
                backgroundColor: theme.interface,
            }} />
        )}
    </Theme>
);