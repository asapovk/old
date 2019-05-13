/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Fragment, useState } from 'react';
import { Flexbox, Widget } from '..';
import { C1 } from '../..';
import ShowMore from './components/ShowMore';
import createStyles from './styles';
import Types from './types';
import PendingList from './components/PendingList';

String.prototype.stringHashCode = function () {
    var hash = 0;
    if (this.length == 0) {
        return hash.toString();
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

const Div = (props) => <div {...props} />

export default (props: Types.Props) => {
    const styles = createStyles(props.narrowed);

    const [minified, setMinified] = useState(props.minified || false);
    const { pending, pendingRows, className, rowRender, groupKey, groups, dataIndex,
        onRowClick, expandForm, moreLabel, lessLabel, noDataText, minifiedRowsCount } = props;

    if (pending) {
        return <PendingList {...props} />
    }

    if (!props.data.length) {
        return (
            <Flexbox flex={1} alignItems='center' justifyContent='center'>
                <C1 ellipsis color='lowlight' css={styles.groupTitle}>
                    {noDataText || 'Нет данных для отображения'}
                </C1>
            </Flexbox>
        )
    }

    const data = minified ? props.data.filter((_, index) => index < (minifiedRowsCount || 3)) : props.data;
    const needShowMore = props.minified && props.data.length > (minifiedRowsCount || 3);

    const Wrapper = props.narrowed ? Widget : Div;
    const RowWrapper = props.narrowed ? Flexbox : Widget;

    if (groupKey && Array.isArray(groups)) {
        /**
         * Filter unique groups before render
         * show groups whose exists in current rows stack
         */
        const uniqueDataGroups = data.filter((v, i, a) => a.indexOf(v) === i);
        const currentGroups = groups
            .filter(group => uniqueDataGroups
                .some(udg => udg.groupId === group.value));

        return (
            <div className={className}>
                <Wrapper decoration='none'>
                    {currentGroups.map((group, index) => (
                        <Fragment key={`${group.value}-${index}`}>
                            <Flexbox flex={1} css={styles.groupTitleContainer}>
                                <C1 ellipsis color='lowlight' css={styles.groupTitle} children={group.title} />
                            </Flexbox>
                            {data
                                .filter(row => row.groupId === group.value)
                                .map((row, index) => {
                                    const rowId = dataIndex
                                        ? (row[dataIndex] + index).stringHashCode()
                                        : (JSON.stringify(row) + index).stringHashCode();
                                    return (
                                        <RowWrapper
                                            onClick={() => onRowClick && onRowClick(row)}
                                            css={styles.row}
                                            key={`listrow-${rowId}`}
                                        >
                                            {rowRender(row)}
                                        </RowWrapper>
                                    )
                                })}
                        </Fragment>
                    ))}
                </Wrapper>
                {needShowMore && (
                    <ShowMore
                        moreLabel={moreLabel}
                        lessLabel={lessLabel}
                        minified={minified}
                        setMinified={() => setMinified(!minified)}
                    />
                )}
            </div>
        )
    }

    return (
        <div className={className}>
            <Wrapper decoration='none'>
                {data.map((row, index) => {
                    const rowId = dataIndex
                        ? (row[dataIndex] + index).stringHashCode()
                        : (JSON.stringify(row) + index).stringHashCode();
                    return (
                        <RowWrapper
                            onClick={() => onRowClick && onRowClick(row)}
                            css={styles.row}
                            key={`listrow-${rowId}`}
                        >
                            {rowRender(row)}
                        </RowWrapper>
                    )
                })}
            </Wrapper>
            {needShowMore && (
                <ShowMore
                    moreLabel={moreLabel}
                    lessLabel={lessLabel}
                    minified={minified}
                    setMinified={() => setMinified(!minified)}
                />
            )}
        </div>
    )
}