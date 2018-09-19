import React, { Component } from 'react';
import { Spin, Icon } from '../index';
import Theme from '../Themes';

export interface Props {
    label?: string
    outline?: boolean
    decoration?: 'none' | 'accent'
    loading?: boolean
    icon?: Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: (MouseEvent?) => any
    className?: string
    style?: any
    children?: any
}

interface ThemedProps {
    theme
}

class Button extends Component<Props & ThemedProps> {
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

export default (props: Props) => (
    <Theme>
        {theme => (
            <Button {...props} theme={{
                btnStyle: props.decoration === 'none'
                    ? {
                        background: 'none',
                        padding: 0,
                        color: theme.text
                    }
                    : {
                        background: props.decoration === 'accent' ? theme.highlight : theme.interface,
                        boxShadow: '0px 2px 4px 0px ' + theme.shadow,
                        borderRadius: theme.corner,
                        color: theme.text,
                        border: '1px solid ' + theme.pale
                    },
            }} />
        )}
    </Theme>
);
