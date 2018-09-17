import React, { Component } from 'react';
import { ButtonProps } from './ThemedButton';
import { Spin, Icon } from '../index';

interface ThemedButtonProps extends ButtonProps {
    theme
}

class Button extends Component<ThemedButtonProps> {
    render() {

        const { labelCase, onClick, label, children, className, style, loading, theme } = this.props;
        let classes = 'ui-button';

        if (labelCase == 'upper') classes += ' uppercase';
        if (loading) classes += ' loading';

        classes += className ? ' ' + className : '';

        return (
            <button className={classes} onClick={onClick} style={{ ...theme.btnStyle, ...style }}>
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