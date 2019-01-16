/**
 * types.tsx
 * author: I.Trikoz
 */
import { Moment } from 'moment';

declare namespace DatePickerProps {
    export interface Props {
        /**
         * Type of render
         */
        type?: 'textfield' | 'display'
        /**
         * Property value could be a string
         * if you pass format property aswell
         * otherwise value should be instance of Moment
         */
        value?: Moment | string
        /**
         * String like YYYY-MM-DD etc
         */
        format?: string
        /**
         * Min datetime that could be selected
         */
        minValue?: Moment
        /**
         * Max datetime that could be selected
         */
        maxValue?: Moment
        /**
         * Label for DatePicker
         */
        label?: string
        /**
         * Callback function will with Moment object
         * or string if format property was passed.
         */
        onChange?: (date: Moment | string) => void
    }

    export interface MonthGridDayProps {
        /**
         * Currect active day
         * should be moment object
         */
        active: Moment
        /**
         * Day that should be render
         */
        day: Moment
        minValue?: Moment
        maxValue?: Moment
        onClick?: () => void
    }

    export interface MonthGridTitleProps {
        /**
         * Current date
         */
        date: Moment
        /**
         * Turn off weeks
         */
        disaplayWeeks?: boolean
        /**
         * Callback function with Moment object
         * of changed date, calls after Next or Prev pressed
         */
        onChange?: (date: Moment) => void
    }
}

export default DatePickerProps;