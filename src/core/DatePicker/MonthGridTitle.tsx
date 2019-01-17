/**
 * MonthGridTitle.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment } from 'react';
import { Flexbox, Icon } from '../../';
import moment from 'moment';
import createStyles from './styles';
import DatePickerProps from './types';

export default (props: DatePickerProps.MonthGridTitleProps) => {

    const styles = createStyles();

    const Action = (actionProps: { next?: true, previous?: true }) => (
        <Flexbox
            flexBasis={20}
            alignItems="center"
            onClick={() => {
                props.onChange && props.onChange(
                    props.date.clone().add(actionProps.previous ? -1 : 1, "month")
                )
            }}
            children={<Icon type={actionProps.previous ? "left" : "right"} />}
        />
    );

    return (
        <Fragment>
            <Flexbox css={styles.title}>
                <Action previous />
                <Flexbox column flex={1} alignItems="center" justifyContent="center">
                    <div css={styles.monthTitle}>{props.date.format("MMMM")}</div>
                    <div css={styles.yearTitle}>{props.date.format("YYYY")}</div>
                </Flexbox>
                <Action next />
            </Flexbox>
            {props.disaplayWeeks && (
                <Flexbox>
                    {moment.weekdaysShort(true).map(day => (
                        <Flexbox
                            key={day}
                            flex={1}
                            css={styles.weekDay}
                            justifyContent="center"
                            alignItems="center"
                            children={day.slice(0, 2)}
                        />
                    ))}
                </Flexbox>
            )}
        </Fragment>
    )
};