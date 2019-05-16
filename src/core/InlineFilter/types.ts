import { Moment } from 'moment'

/**
 * types.tsx
 * author: I.Trikoz
 */
declare namespace InlineFilterProps {

    export interface Value {
        index: string | number
        label: string | number
        selected: boolean
    }
    export interface Props {
        title?: string
        values?: Value[][]
        defaultValues?: Value[][]
        disabled?: boolean
        onChange?: (value: Value) => void
    }
    export interface RowProps {
        last: boolean
        values: Value[]
        disabled?: boolean
        onChange: (value: Value) => void
    }
}

export default InlineFilterProps;