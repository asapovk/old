/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import Types from '../types';

import GroupHeaderRow from './GroupHeaderRow';
import DataRows from './DataRows';

interface TableBodyProps {
    data: Object[]
    columns: Types.Column[]
    style: any
    groups?: Types.Group[]
    groupKey?: string
}

export default (props: TableBodyProps) => {
    const { data, columns, groupKey, groups, style } = props;

    const cols = columns.map(col => {
        if (!col.render) {
            col.render = (row: Object, value: string) => value;
        }
        return col;
    });

    if (groupKey && groups) {
        return (
            <Fragment>
                {groups.map((group, index) => (
                    <div key={`group-${index}`}>
                        <GroupHeaderRow
                            columns={cols}
                            title={group.title}
                            containerStyle={style.group.container}
                            headerCellStyle={style.group.cell}
                            groupTitleStyle={style.group.title}
                        />
                        <DataRows
                            data={data.filter(i => i[groupKey] === group.value)}
                            columns={cols}
                            rowStyle={style.data.row}
                            cellStyle={style.data.cell}
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
            rowStyle={style.data.row}
            cellStyle={style.data.cell}
        />
    )
}