import React from 'react';
import { Tooltip } from '../Tooltip';

interface CheckboxProps {
    label?: string
    indeterminate?: boolean
    disabled?: boolean
    radio?: boolean
    toggle?: boolean
    cheked?: true
    onChange?: (checked) => void
    styles?: any
}
interface Checkbox {
    checked: boolean
}
class Checkbox extends React.Component<CheckboxProps> {

    state = {
        checked: false
    }

    onChange() {

    }

    render() {
        const { label, indeterminate, disabled, radio, toggle, cheked, onChange, styles } = this.props;

        let classes = 'ui-checkbox-input';
        if (radio) classes += 'ch-radio';
        if (radio) classes += 'ch-toggle';
        if (disabled) classes += 'ch-disbaled';

        return (
            <div className='ui-checkbox' onClick={this.onChange}>
                <input type={'checkbox' + this.state.checked ? ' ch-checked' : ''} className={classes} />
                <div className='ui-checkbox-label'>{label}</div>
            </div>

        )
    }
}

export default Checkbox;