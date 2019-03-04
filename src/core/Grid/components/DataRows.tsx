/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import Types from '../types';
import { Row } from '.';
import { subHeaderStyles } from '../styles';

export default (props: Types.Props & { currentPage: number }) => {
    const { groups, groupKey, columns, hideHeaders, data, currentPage, expandForm } = props;

    const styles = subHeaderStyles({
        columnsLength: props.columns.length,
        hideHeaders: props.hideHeaders
    });

    if (groupKey && Array.isArray(groups)) {
        const uniqueDataGroups = data.filter((v, i, a) => a.indexOf(v) === i);
        const currentGroups = groups.filter(group => uniqueDataGroups.some(udg => udg.groupId === group.value));

        return (
            <Fragment>
                {currentGroups && currentGroups.map((group, index) => (
                    <Fragment key={`${group.value}-${index}`}>
                        <div
                            key={`sh-${group.value}-${index}`}
                            css={styles.subheader}
                            children={group.title}
                        />
                        {data
                            .filter(row => row.groupId === group.value)
                            .map((row, index) => (
                                <Row
                                    key={(JSON.stringify(columns) + group.value.toString() + currentPage.toString() + index).hashCode()}
                                    row={row}
                                    columns={columns}
                                    expandForm={expandForm}
                                    onRowClick={props.onRowClick}
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
                    onRowClick={props.onRowClick}
                />
            ))}
        </Fragment>
    )
}