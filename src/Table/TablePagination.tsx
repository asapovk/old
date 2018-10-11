import React, { Component } from 'react';
import { Styles } from '../'

export interface PaginationProps {
    pageSize: number
}

interface Props {
    pagination: PaginationProps
    page: number
    searchActive: boolean
    search?: boolean
    data: any[]
    onChange: (page: number, searchBar: boolean) => void
    children?: any
}

class TablePagination extends React.Component<Props> {

    render() {
        const { data, pagination, page, searchActive, search } = this.props;
        const { pageSize } = pagination;
        const buttons = Math.ceil(data.length / pageSize);

        if (buttons <= 1 && !search) {
            return null;
        }

        let buttonsComponents: JSX.Element[] = this.props.search ? [(
            <Styles key='search'>
                {styles => (
                    <div
                        onClick={() => this.props.onChange(1, true)}
                        className={`ui-table-paggination-button`}
                        style={{
                            color: styles.table.pagination.textColor,
                            backgroundColor: searchActive ? styles.theme.highlight.rgb : styles.table.pagination.backgroundColor,
                            opacity: searchActive ? 1 : 0.5
                        }}
                        children={`Найти`}
                    />
                )}
            </Styles>
        )] : [];

        for (let i = 0; i < buttons; i++) {
            buttonsComponents.push(
                <Styles key={i}>
                    {styles => (
                        <div
                            onClick={() => this.props.onChange(i + 1, false)}
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