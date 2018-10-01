import React, { Component } from 'react';
import { Spin, Icon, Theme } from '../index';

export interface Props {
    label?: string
    outline?: boolean
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue'
    loading?: boolean
    icon?: Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: (MouseEvent?) => any
    className?: string
    style?: any
    children?: any
}

class Button extends Component<Props> {
    render() {

        const { labelCase, onClick, label, children, className, style, loading, decoration } = this.props;

        let classes = 'ui-button';

        if (labelCase == 'upper') classes += ' uppercase';
        if (loading) classes += ' loading';

        return (
            <Theme>
                {styles => (
                    <button className={classes} onClick={onClick} style={{ ...styles.button.main(decoration), ...style }}>
                        <span className='ui-button-label'>{label || children}</span>
                        {loading && (
                            <Spin>
                                <Icon type="sync" />
                            </Spin>
                        )}
                    </button>
                )}
            </Theme>
        );
    }
}

export default Button;
