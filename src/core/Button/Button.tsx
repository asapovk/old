/** @jsx jsx */
import { jsx } from '@emotion/core'
import useStyles from './useStyles';
import React from 'react';
import { Spin, Icon } from '../index';

export interface ButtonProps {
    label?: string
    outline?: true | undefined
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale'
    loading?: boolean
    icon?: React.Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: (MouseEvent?) => void
    className?: string
    style?: React.CSSProperties
    disabled?: boolean
    size?: 'small' | 'large'
    inversion?: boolean,
    children?: React.ReactNode
}

export default (props: ButtonProps) => {

    const { labelCase, label, children, style, loading, decoration, disabled, size, inversion, className } = props;
    const styles = useStyles(size, loading, disabled, labelCase, decoration, inversion);

    const onClick = (event) => {
        if (!props.disabled && !props.loading) {
            event.stopPropagation();
            props.onClick && props.onClick();
        }
    }

    return (
        <button css={styles} className={className} style={style} onClick={(event) => onClick(event)}>
            <span>{label || children}</span>
            {loading && (<Spin><Icon type="sync" /></Spin>)}
        </button>
    );
}
