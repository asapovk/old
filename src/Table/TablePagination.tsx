import React, { Component, ComponentElement } from 'react';
import Theme from '../Themes';
import Table from '../Themes/styles/Table';

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

class TableCheckbox extends React.Component<Props> {

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
                <Theme>
                    {styles => (
                        <div
                            onClick={() => this.props.onChange(i + 1)}
                            className={`ui-table-paggination-button`}
                            style={{
                                color: styles.table.pagination.textColor,
                                backgroundColor: styles.table.pagination.backgroundColor,
                                opacity: page === i + 1 ? 1 : 0.5
                            }}
                            key={i}
                            children={`${i * pageSize}–${i * pageSize + pageSize}`}
                        />
                    )}
                </Theme>
            )
        }

        return (
            <div className='ui-table-paggination'>
                {buttonsComponents}
            </div>
        )
    }
}

export default TableCheckbox;