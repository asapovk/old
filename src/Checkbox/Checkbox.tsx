import React from 'react';
import { Icon } from '../Icon';

interface CheckboxProps {
    label?: string
    radio?: boolean
    checked?: boolean
    onChange?: (checked) => void
    style?: any
    defaultValue?: boolean
    uppercase?: boolean
}
interface Checkbox {
    checked: boolean
}
class Checkbox extends React.Component<CheckboxProps> {

    state = {
        checked: false
    }

    componentWillMount() {
        if (this.props.defaultValue || this.props.checked) this.setState({ checked: true })
    }

    onChange() {
        const checked = this.state.checked ? false : true;
        this.setState({ checked: typeof this.props.checked != 'undefined' ? this.props.checked : checked });
        this.props.onChange && this.props.onChange(checked);
    }

    render() {
        const { label, radio, checked, style, uppercase } = this.props;
        const isChecked = this.state.checked || checked;

        let classes = 'ui-checkbox-input';
        if (radio) classes += ' ch-radio';
        if (isChecked) classes += ' ch-checked';

        const InputTSX = (
            <div className={classes}>
                {
                    isChecked ? radio ? <span className='circle'></span>
                        : <Icon type='check' /> : ''
                }
            </div>
        )

        return (
            <div className='ui-checkbox' onClick={() => this.onChange()} style={style}>
                {InputTSX}
                <div className={'ui-checkbox-label noselect' + (uppercase ? ' uppercase' : '')}>{label}</div>
            </div>

        )
    }
}

export default Checkbox;