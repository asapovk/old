import React, { Component, CSSProperties } from 'react';
import { Spin, Icon, Styles } from '../index';

export interface ButtonProps {
    value?: string | number
    color?: 'highlight' | 'red' | 'green' | 'orange' | 'blue'
    loading?: boolean
    top?: number | string
    right?: number | string
    left?: number | string
    onClick?: (MouseEvent?) => void
    style?: CSSProperties
}

class Badge extends Component<ButtonProps> {
    render() {

        const { onClick, value, children, style, loading, color, top, right, left } = this.props;

        let classes = 'ui-badge';

        // if (loading) classes += ' loading';

        return (
            <Styles>
                {styles => {

                    return (
                        <div className={classes} style={{ ...styles.badge.container, ...style }} onClick={onClick}>
                            <div className="ui-badge-content" style={styles.badge.main(color, top, right, left)}>{value}</div>
                            {children}
                        </div>
                    )
                }}
            </Styles>
        );
    }
}

export default Badge;
