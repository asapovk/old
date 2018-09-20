import React from 'react';
import { Icon } from '../Icon';
import Theme from '../Themes';

interface Props {
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
export interface ThemedProps {
    theme
}
class Checkbox extends React.Component<Props & ThemedProps> {

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
        const { label, radio, style, uppercase, theme } = this.props;

        const InputTSX = (
            <div className='ui-checkbox-input' style={this.state.checked ? { ...theme.checkboxInputActive } : { ...theme.checkboxInput }}>
                {
                    this.state.checked ? (
                        radio ? <span className='ui-checkbox-circle' style={...theme.checkboxCircle}></span> : <Icon type='check' />
                    ) : null
                }
            </div>
        )

        return (
            <div className='ui-checkbox' onClick={() => this.onChange()} style={{ ...style, ...theme.checkbox }}>
                {InputTSX}
                <div className={'ui-checkbox-label noselect' + (uppercase ? ' uppercase' : '')}>{label}</div>
            </div>

        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <Checkbox {...props} theme={{
                checkbox: {
                    color: theme.text.rgb
                },
                checkboxInput: {
                    borderColor: theme.text.rgb,
                    borderRadius: props.radio ? '15px' : theme.corner
                },
                checkboxInputActive: {
                    borderColor: theme.highlight.rgb,
                    borderRadius: props.radio ? '15px' : theme.corner
                },
                checkboxCircle: {
                    background: theme.text.rgb
                }
            }} />
        )}
    </Theme>
);
