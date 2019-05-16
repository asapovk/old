/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState, useLayoutEffect } from 'react'
import Types from './types'
import createStyles from './styles'
import textFieldCreateStyles from '../TextField/styles'
import SelectItems from "./SelectItems"
import { TextField } from "../TextField"

export default (props: Types.Props) => {

    const { search, clearable, multiselect, onChange, disabled, options } = props

    const [selectedValues, setSelectedValues] = useState<Types.Option[]>([])
    const [open, setOpen] = useState(false)

    const styles = createStyles({
        disabled,
        open,
    })

    const textFieldStyles = textFieldCreateStyles({
        size: props.size,
        decoration: props.decoration,
        disabled: disabled,
        floatingLabel: false,
        multiline: false,
        leftIcon: false
    })

    const toggle = () => !disabled && setOpen(!open)

    const onSelect = (option: Types.Option) => {
        let newValues = [option]
        if (multiselect) {
            newValues = [option].concat(selectedValues)
            typeof props.value === 'undefined' && setSelectedValues(newValues)
        } else {
            typeof props.value === 'undefined' && setSelectedValues(newValues)
        }
        onChange && onChange(newValues)
        toggle()
    }

    useLayoutEffect(() => {
        let value = props.value || props.defaultValue || []

        if (multiselect) {
            setSelectedValues(Array.isArray(value) ? value : [value])
        } else {
            setSelectedValues(Array.isArray(value) ? ([value[0]] || []) : [value])
        }
    }, [])

    return (
        <div style={props.style}>
            <div css={styles.root}>
                <TextField
                    css={styles.input}
                    label={props.label}
                    size={props.size}
                    decoration={props.decoration}
                    placeholder={props.placeholder}
                    floatingLabel={props.floatingLabel}
                    disabled={disabled}
                    disableEditing={true}
                    onClick={toggle}
                    rightIcon={open ? 'up' : 'down'}
                    value={!multiselect && selectedValues[0] ? selectedValues[0].text : undefined}
                    _tags={multiselect ? selectedValues.map(value => value.text) : undefined}
                    _onTagClose={(tagIndex) => {
                        setSelectedValues(
                            selectedValues.filter((_, index) => index !== tagIndex)
                        )
                    }}
                />
                {open && (
                    <div css={[textFieldStyles.wrapper, styles.dropMenu]}>
                        <SelectItems
                            options={options.filter(option =>
                                0 > selectedValues.findIndex(value => value.value === option.value)
                            )}
                            cssItemStyle={[textFieldStyles.field(true), styles.dropItem]}
                            onSelect={onSelect}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
