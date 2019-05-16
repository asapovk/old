/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from 'react';
import Types from './types';
import createStyles from './styles';
import textFieldCreateStyles from '../TextField/styles';
import SelectItems from "./SelectItems";
import { TextField } from "../TextField";

export default (props: Types.Props) => {

    const { search, clearable, multiselect, onChange, placeholder, disabled, options } = props;

    const [selectedValues, setSelectedValues] = useState<Types.Option[]>([]);
    const [open, setOpen] = useState(false);

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

    const toggle = () => setOpen(!open)
    const onSelect = (option: Types.Option) => {
        setSelectedValues([option]);
        toggle();
    }

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
                    _tags={['Раз', 'Два', 'Три', 'Четыре', 'Пять']}
                    _onTagClose={(tagIndex) => {
                        console.log(tagIndex)
                    }}
                />
                {open && (
                    <div css={[textFieldStyles.wrapper, styles.dropMenu]}>
                        <SelectItems
                            options={options}
                            cssItemStyle={[textFieldStyles.field(true), styles.dropItem]}
                            onSelect={onSelect}
                        />
                    </div>
                )}
            </div>
        </div>
    )
};
