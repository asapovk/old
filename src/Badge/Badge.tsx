/** @jsx jsx */
import { jsx } from '@emotion/core'
import useStyles from './useStyles';
import { CSSProperties, ReactNode } from 'react';
import { Spin, Icon } from '../index';

export interface BageProps {
    value?: string | number
    color?: 'highlight' | 'red' | 'green' | 'orange' | 'blue'
    loading?: boolean
    top?: number | string
    right?: number | string
    left?: number | string
    onClick?: (MouseEvent?) => void
    style?: CSSProperties
    children: ReactNode
}

export default (props: BageProps) => {

    const { onClick, value, children, style, loading, color, top, right, left } = props;
    const styles = useStyles();

    return (
        <div css={{ ...styles.container, ...style }} onClick={onClick}>
            <div css={styles.main(color, top, right, left)}>{value}</div>
            {children}
        </div>
    );
}