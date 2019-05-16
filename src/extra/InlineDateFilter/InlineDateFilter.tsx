import React, { useState, useLayoutEffect } from "react";
import { InlineFilter } from "../..";
import moment from 'moment'
import Types from './types'
import InlineFilterTypes from "../../core/InlineFilter/types";

const currentYear = new Date().getFullYear()
const months = [0].concat(Array.apply(0, Array(11)).map((_: any, i: number) => i + 1))

export default (props: Types.InlineDateFilterProps) => {
    const [currentM, setM] = useState('')
    const [currentY, setY] = useState('')

    const years: string[] = []

    useLayoutEffect(() => {
        setM(props.defaultMonth || props.month || moment().format('MM'))
        setY(props.defaultYear || props.year || moment().format('YYYY'))
        for (let year = 0; year < (props.yearsCount || 2); year++) {
            years.push((currentYear + year).toString())
        }
    }, [])

    /**
     * For controlled component
     */
    useLayoutEffect(() => {
        if (typeof props.month !== 'undefined') setM(props.month)
        if (typeof props.year !== 'undefined') setY(props.year)
    }, [props.month, props.year])

    const onChangeFilter = (value: InlineFilterTypes.Value) => {
        let newM: string = currentM
        let newY: string = currentY
        if (typeof value.index === 'string') {
            newY = value.index
        }
        if (typeof value.index === 'number') {
            if (value.index >= 0) {
                newM = moment().month(value.index).format('MM')
            } else {
                newM = 'ALL'
            }
        }
        /**
         * For uncontrolled component
         */
        if (typeof props.month === 'undefined') setM(newM)
        if (typeof props.year === 'undefined') setY(newY)

        props.onChange && props.onChange(newY, newM)
    }

    return (
        <InlineFilter
            title={props.title}
            disabled={props.disabled}
            values={[
                years.map(year =>
                    ({
                        index: year,
                        label: year,
                        selected: currentY === year,
                    })
                ),
                [-1].concat(months).map(month =>
                    ({
                        index: month >= 0 ? month : -1,
                        label: month >= 0 ? moment().month(month).format('MMMM') : 'все',
                        selected: month >= 0 ? (moment(currentM, 'MM').month() === month) : currentM === 'ALL',
                    })
                )
            ]}
            onChange={onChangeFilter}
        />
    );
}
