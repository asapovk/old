/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import Types from '../types';
import { SubHeader, Row } from '.';

export default (props: Types.Props & { currentPage: number }) => {
    const { groups, groupKey, columns, hideHeaders, data, currentPage, expandForm } = props;

    if (groupKey && (Array.isArray(groups) && groups.length > 0)) {
        return (
            <Fragment>
                {groups.map((group, index) => (
                    <Fragment key={`${group.value}-${index}`}>
                        <SubHeader
                            key={`sh-${group.value}-${index}`}
                            title={group.title}
                            columnsLength={columns.length}
                            hideHeaders={hideHeaders}
                        />
                        {data.filter(row => row.groupId === group.value).map((row, index) => (
                            <Row
                                key={(JSON.stringify(columns) + group.value.toString() + currentPage.toString() + index).hashCode()}
                                row={row}
                                columns={columns}
                                expandForm={expandForm}
                            />
                        ))}
                    </Fragment>
                ))}
            </Fragment>
        )
    }

    return (
        <Fragment>
            {data.map((row, index) => (
                <Row
                    key={(JSON.stringify(columns) + currentPage.toString() + index).hashCode()}
                    row={row}
                    columns={columns}
                    expandForm={expandForm}
                />
            ))}
        </Fragment>
    )
}