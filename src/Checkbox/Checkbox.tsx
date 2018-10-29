import React from 'react';
import { Icon, Styles } from '..';

export interface CheckboxProps {
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
        this.setState({
            checked: this.props.checked || this.props.defaultValue || false
        });
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.checked !== "undefined") {
            this.setState({
                checked: nextProps.checked
            });
        }
    }

    onChange() {
        this.props.onChange && this.props.onChange(!this.state.checked);

        if (typeof this.props.checked === "undefined") {
            this.setState({
                checked: !this.state.checked
            });
        }
    }

    render() {
        const { label, radio, style, uppercase } = this.props;

        const InputTSX = (style) => (
            <div className='ui-checkbox-input' style={this.state.checked ? { ...style.inputActive(radio) } : { ...style.input(radio) }}>
                {
                    this.state.checked ? (
                        radio ? <span className='ui-checkbox-circle' style={...style.circle}></span> : <Icon type='check' />
                    ) : null
                }
            </div>
        )

        return (
            <Styles>
                {styles => (
                    <div className='ui-checkbox' onClick={() => this.onChange()} style={{ ...style, ...styles.checkbox.main }}>
                        {InputTSX(styles.checkbox)}
                        <div className={'ui-checkbox-label noselect' + (uppercase ? ' uppercase' : '')}>{label}</div>
                    </div>
                )}
            </Styles>
        )
    }
}

export default Checkbox;
