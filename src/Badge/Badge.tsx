/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { CSSProperties, ReactNode } from 'react';
import useStyles from '../hooks/useStyles';
import { Spin, Icon } from '../index';
import styles from './styles';

export interface ButtonProps {
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

export default (props: ButtonProps) => {

    const { onClick, value, children, style, loading, color, top, right, left } = props;
    const theme = useStyles().theme;
    const themedStyles = styles(theme);

    return (
        <div css={{ ...themedStyles.container, ...style }} onClick={onClick}>
            <div css={themedStyles.main(color, top, right, left)}>{value}</div>
            {children}
        </div>
    );
}