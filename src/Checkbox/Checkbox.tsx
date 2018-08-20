import React from 'react';
import { Tooltip } from '../Tooltip';

interface CheckboxProps {
    label?: string
    indeterminate?: boolean
    disabled?: boolean
    radio?: boolean
    toggle?: boolean
    checked?: true
    onChange?: (checked) => void
    styles?: any
    defaultValue?: boolean
}
interface Checkbox {
    checked: boolean
}
class Checkbox extends React.Component<CheckboxProps> {

    state = {
        checked: false
    }

    componentWillMount() {
        this.props.defaultValue && this.setState({ checked: true })
    }

    onChange() {
        const checked = this.state.checked ? false : true as boolean;
        this.setState({ checked: checked });
        this.props.onChange && this.props.onChange(checked);
    }

    render() {
        const { label, indeterminate, disabled, radio, toggle, checked, onChange, styles } = this.props;

        let classes = 'ui-checkbox-input';
        if (radio) classes += ' ch-radio';
        if (radio) classes += ' ch-toggle';
        if (disabled) classes += ' ch-disbaled';
        if (this.state.checked || checked) classes += ' ch-checked';

        const InputTSX = (<div className={classes}></div>)

        return (
            <div className='ui-checkbox' onClick={() => this.onChange()}>
                {InputTSX}
                <div className='ui-checkbox-label noselect'>{label}</div>
            </div>

        )
    }
}

export default Checkbox;