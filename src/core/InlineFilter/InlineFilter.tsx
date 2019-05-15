/**
 * styles.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles'
import Types from './types'
import Row from './Row'
import { useState, useEffect, useLayoutEffect, Fragment } from 'react'

export default (props: Types.Props) => {
    const { values, defaultValues, disabled, onChange } = props
    const [state, setState] = useState<Types.Value[][]>([[]])

    const css = createStyles({
        rowsCount: state.length,
        hasTitle: typeof props.title === 'string'
    })


    useLayoutEffect(() => {
        setState(values || defaultValues || [[]])
    }, [])

    /**
     * For controlled component
     */
    useEffect(() => {
        if (typeof values !== 'undefined') {
            setState(values)
        }
    }, [values])

    const onRowChange = (value: Types.Value) => {
        /**
         * For uncontrolled component
         */
        if (typeof values === 'undefined') {
            setState(
                state.map(rows => rows.map(item => {
                    if (item.index === value.index) {
                        return value;
                    }
                    return item;
                }))
            )
        }
        onChange && onChange(value)
    }
    /**
     * div's are @important
     */
    return (
        <div css={css}>
            {typeof props.title === 'string' && (
                <span>{props.title}</span>
            )}
            <div>
                <div>
                    {state.map((rowValues, index) =>
                        <Row
                            key={index}
                            values={rowValues}
                            disabled={disabled}
                            last={state.length > index + 1}
                            onChange={onRowChange}
                        />
                    )}
                </div>
            </div>
        </div>

    )
}