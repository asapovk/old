/**
 * MonthGrid.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react';
import { Flexbox } from '../../../';
import moment, { Moment } from 'moment';
import MonthGridTitle from './MonthGridTitle';
import MonthGridDay from './MonthGridDay';
import DatePickerProps from './types';
import createStyles from './styles';

export default (props: DatePickerProps.MonthGridProps) => {

    const [date, setDate] = useState(props.value);
    const [activeDate, setActiveDate] = useState(moment());

    const grid: Moment[][] = [];
    const start = date.clone().startOf('month').startOf('week').subtract(1, 'day');
    const end = date.clone().endOf('month').endOf('week');
    while (start.isBefore(end, 'day')) {
        grid.push(
            Array(7).fill(null).map(() => start.add(1, 'day').clone())
        )
    }

    useEffect(() => setActiveDate(props.value), [props.value]);

    const styles = createStyles();

    return (
        <div>
            <Flexbox column css={styles.monthGrid}>
                <MonthGridTitle
                    date={date}
                    onChange={setDate}
                    disaplayWeeks={true}
                />
                {grid.map((week: Moment[], index: number) =>
                    <Flexbox key={index}>
                        {week.map((day: Moment, index: number) => {
                            return (
                                <MonthGridDay
                                    key={index}
                                    day={day}
                                    active={activeDate}
                                    minValue={props.minValue}
                                    maxValue={props.maxValue}
                                    onClick={() => {
                                        props.onChange(day.clone());
                                    }}
                                />
                            )
                        })}
                    </Flexbox>
                )}
            </Flexbox>
        </div>
    )
};
