/**
 * MonthGridDay.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Flexbox } from '../../../';
import moment from 'moment';
import DatePickerProps from './types';
import createStyles from './Styles';

export default (props: DatePickerProps.MonthGridDayProps) => {
    const { active, day, onClick, minValue, maxValue } = props;

    const isDisabled = (minValue && minValue > day) || (maxValue && maxValue < day) || false;
    const isActive = (day.format("YYYYMMDD") === active.format("YYYYMMDD"));
    const isCurrent = (day.format("YYYYMMDD") === moment().format("YYYYMMDD"));
    const isCurrentMonth = (day.format("MM") === moment().format("MM"));

    const styles = createStyles().day(isActive, isCurrent, isDisabled, isCurrentMonth);

    return (
        <Flexbox
            justifyContent="center"
            alignItems="center"
            onClick={() => {
                if (!isDisabled && onClick) {
                    onClick();
                }
            }}
            css={styles}
            children={day.date()}
        />

    )
};