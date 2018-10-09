import React, { Component, CSSProperties } from 'react';
import { Spin, Icon, Styles } from '../index';

export interface Props {
    label?: string
    outline?: true | undefined
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue'
    loading?: boolean
    icon?: Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: (MouseEvent?) => void
    className?: string
    style?: CSSProperties
}

class Button extends Component<Props> {
    render() {

        const { labelCase, onClick, label, children, style, loading, decoration } = this.props;

        let classes = 'ui-button';

        if (labelCase == 'upper') classes += ' uppercase';
        if (loading) classes += ' loading';

        return (
            <Styles>
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
            </Styles>
        );
    }
}

export default Button;
