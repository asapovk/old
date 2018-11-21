import React, { Component, CSSProperties } from 'react';
import { Spin, Icon, Styles } from '../index';

export interface ButtonProps {
    label?: string
    outline?: true | undefined
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale'
    loading?: boolean
    icon?: Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: (MouseEvent?) => void
    className?: string
    style?: CSSProperties
    disabled?: boolean
    size?: 'small' | 'large'
}

class Button extends Component<ButtonProps> {
    onClick() {
        if (!this.props.disabled && !this.props.loading) {
            this.props.onClick && this.props.onClick();
        }
    }

    render() {
        const { labelCase, label, children, style, loading, decoration, disabled, size } = this.props;

        let classes = 'ui-button';

        if (labelCase == 'upper') classes += ' uppercase';
        if (loading) classes += ' loading';
        if (disabled) classes += ' disabled';
        if (size) classes += ` ${size}`;

        return (
            <Styles>
                {styles => (
                    <button
                        className={classes}
                        onClick={() => this.onClick()}
                        style={{ ...styles.button.main(decoration), ...style }}
                    >
                        <span className='ui-button-label'>{label || children}</span>

                        {loading && (
                            <Spin>
                                <Icon type="sync" />
                            </Spin>
                        )}

                    </button>
                )}
            </Styles>
        );
    }
}

export default Button;
