import React, { Component } from 'react';
import { Styles } from '../'

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

class TablePagination extends React.Component<Props> {

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
                <Styles key={i}>
                    {styles => (
                        <div
                            onClick={() => this.props.onChange(i + 1)}
                            className={`ui-table-paggination-button`}
                            style={{
                                color: styles.table.pagination.textColor,
                                backgroundColor: styles.table.pagination.backgroundColor,
                                opacity: page === i + 1 ? 1 : 0.5
                            }}
                            children={`${i * pageSize}–${i * pageSize + pageSize}`}
                        />
                    )}
                </Styles>
            )
        }

        return (
            <div className='ui-table-paggination'>
                {buttonsComponents}
            </div>
        )
    }
}

export default TablePagination;