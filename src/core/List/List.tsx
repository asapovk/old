/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState } from 'react';
import { Flexbox, Widget } from '..';
import { C1 } from '../..';
import ShowMore from './components/ShowMore';
import createStyles from './styles';
import Types from './types';

export default (props: Types.Props) => {
    const styles = createStyles();

    const [minified, setMinified] = useState(props.minified || false);
    const { className, rowRender, groupKey, groups, minifiedRowsCount, onRowClick, expandForm, moreLabel, lessLabel } = props;

    if (!props.data.length) {
        return (
            <Flexbox css={styles.groupTitle} mt='1rem' alignSelf='center'>
                <C1 ellipsis color='lowlight' children='Нет данных для отображения' />
            </Flexbox>
        )
    }

    const data = minified ? props.data.filter((_, index) => index < (minifiedRowsCount || 3)) : props.data;
    const needShowMore = props.minified && props.data.length > (minifiedRowsCount || 3);

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
            <Flexbox flex={1} column className={className}>
                {currentGroups.map((group, index) => (
                    <Fragment key={`${group.value}-${index}`}>
                        <Flexbox css={styles.groupTitle}>
                            <C1 ellipsis color='lowlight' children={group.title} />
                        </Flexbox>
                        {data
                            .filter(row => row.groupId === group.value)
                            .map((row, index) => (
                                <Widget css={styles.row} key={`row-${index}`}>
                                    {rowRender(row)}
                                </Widget>
                            ))}
                    </Fragment>
                ))}
                {needShowMore && (
                    <ShowMore
                        moreLabel={moreLabel}
                        lessLabel={lessLabel}
                        minified={minified}
                        setMinified={() => setMinified(!minified)}
                    />
                )}
            </Flexbox>
        )
    }

    return (
        <Flexbox flex={1} column className={className}>
            {data.map((row, index) => (
                <Widget css={styles.row} key={`row-${index}`}>
                    {rowRender(row)}
                </Widget>
            ))}
            {needShowMore && (
                <ShowMore
                    moreLabel={moreLabel}
                    lessLabel={lessLabel}
                    minified={minified}
                    setMinified={() => setMinified(!minified)}
                />
            )}
        </Flexbox>
    )
}