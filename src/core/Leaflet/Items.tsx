/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment } from 'react';
import { Flexbox, D3, T1, HR } from '../index';
import Types from './types';

export default (props: Types.ItemsProps) => {

    const { data, styles, items, opened } = props;
    const breakpoints = props.breakpoints || [4, 6];

    return (
        <Fragment>
            {opened.map((dataIndex, index) => (
                <div
                    key={'li-' + index}
                    css={styles.item(opened.length > breakpoints[0])}
                    children={
                        items.map((item, gi) => (
                            <Flexbox key={'li-gr-' + gi} column pb='2.5rem'>
                                <Flexbox css={css({ width: '100%', overflow: 'hidden', minWidth: '0 !important' })}>
                                    <D3
                                        ellipsis
                                        underline
                                        children={
                                            item.title
                                                ? item.title
                                                : item.titleKey
                                                && data[dataIndex][item.titleKey]
                                        }
                                        icon={
                                            (item.iconKey
                                                && data[dataIndex][item.iconKey]
                                                && opened.length > 1
                                            )
                                                ? data[dataIndex][item.iconKey]
                                                : undefined
                                        }
                                    />
                                </Flexbox>
                                <Grid
                                    rows={item.rows}
                                    data={data}
                                    index={index}
                                    dataIndex={dataIndex}
                                    styles={styles}
                                    opened={opened}
                                    breakpoints={breakpoints}
                                />
                            </Flexbox>
                        ))
                    }
                />
            ))}
        </Fragment>
    )
}

const Grid = (props) => {
    const { rows, data, index, dataIndex, styles, opened, breakpoints } = props;
    const isFirst = index === 0;

    return rows
        .filter(row => data[dataIndex][row.dataKey])
        .map((row, ri) => (
            <Flexbox key={'li-gr-row-' + ri} css={styles.grid}>

                {(opened.length < breakpoints[0] || isFirst)
                    && row.name
                    && <T1
                        color='lowlight'
                        css={css({ flexShrink: 0 })}
                        children={row.name}
                    />
                }
                {(opened.length < breakpoints[1] || isFirst)
                    && <HR
                        dotted
                        color='light'
                        css={css({ margin: '0.35rem 0.5rem', flex: 1 })}
                    />
                }
                <T1
                    css={css({ flexShrink: 0 })}
                    children={data[dataIndex][row.dataKey]}
                    format={row.format}
                    unit={row.unit}
                />

            </Flexbox>
        ))
}