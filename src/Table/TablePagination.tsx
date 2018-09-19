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
        const { data, pagination, page } = this.props;
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
                    className={`ui-table-paggination-button${page === i + 1 ? ' pgn-active' : ''}`}
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

            }} />
        )}
    </Theme>
);