import React, { Component, ComponentElement } from 'react';

export interface PaginationProps {
    pageSize: number
}

interface Props {
    pagination: PaginationProps
    page: number
    data: any[]
    onChange: (page: number) => void
}

export default class TableCheckbox extends React.Component<Props> {

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