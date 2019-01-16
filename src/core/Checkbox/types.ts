declare namespace CheckboxTypes {
    export interface CheckboxProps {
        label?: string
        radio?: boolean
        checked?: boolean
        onChange?: (checked) => void
        style?: any
        defaultValue?: boolean
        uppercase?: boolean
        className?: string
        size?: string
    }

    export interface Checkbox {
        checked: boolean
    }
}

export default CheckboxTypes;