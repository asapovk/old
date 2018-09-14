import React, { Component } from 'react';
import { Spin, Icon } from '../index';

interface ButtonProps {
    label?: string
    outline?: boolean
    decoration?: 'none' | 'accent'
    loading?: boolean
    icon?: Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: (MouseEvent?) => any
    className?: string
    style?: any
}

class Button extends Component<ButtonProps> {
    render() {

        const { decoration, labelCase, onClick, label, children, className, style, loading } = this.props;
        let classes = 'ui-button';

        if (decoration == 'none') classes += ' btn-strip';
        if (labelCase == 'upper') classes += ' uppercase';
        if (loading) classes += ' loading';

        classes += className ? ' ' + className : '';

        return (
            <button className={classes} onClick={onClick} style={style}>
                <span>{label || children}</span>
                {loading && (
                    <Spin>
                        <Icon type="sync" />
                    </Spin>
                )}
            </button>
        );
    }
}

export default Button;