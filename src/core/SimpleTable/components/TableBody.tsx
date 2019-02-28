/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment } from 'react';
import Types from '../types';
import { TableStyles } from '../styles';

import GroupHeaderRow from './GroupHeaderRow';
import DataRows from './DataRows';

interface TableBodyProps {
    data: Object[]
    columns: Types.Column[]
    groups?: Types.Group[]
    groupKey?: string
    styles: TableStyles
    expandForm?: Types.ExpandForm
    hideHeaders?: boolean
    onRowClick?: (row: any) => void
    currentPage: number
}

export default (props: TableBodyProps) => {
    const { data, columns, groupKey, groups, styles, expandForm, hideHeaders, onRowClick, currentPage } = props;

    const cols = columns.map(col => {
        if (!col.render) {
            col.render = (row: Object, value: string) => value;
        }
        return col;
    });

    if (groupKey && (Array.isArray(groups) && groups.length > 0)) {
        return (
            <Fragment>
                {groups.map((group, index) => (
                    <div key={`group-${index}`} id={`group-${index}`} css={styles.groupContainer({ hideHeaders })}>
                        <GroupHeaderRow
                            columns={cols}
                            title={group.title}
                            styles={styles}
                            expandForm={expandForm}
                            hideHeaders={hideHeaders}
                        />
                        <DataRows
                            data={data.filter(i => i[groupKey] === group.value)}
                            columns={cols}
                            styles={styles}
                            expandForm={expandForm}
                            hideHeaders={hideHeaders}
                            onRowClick={onRowClick}
                            currentPage={currentPage}
                        />
                    </div>
                ))}
            </Fragment>
        )
    }

    return (
        <DataRows
            data={data}
            columns={cols}
            styles={styles}
            expandForm={expandForm}
            hideHeaders={hideHeaders}
            onRowClick={onRowClick}
            currentPage={currentPage}
        />
    )
}