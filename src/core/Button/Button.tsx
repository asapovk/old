/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styels';
import React from 'react';
import { Spin, Icon } from '../index';

export interface ButtonProps {
    label?: string
    outline?: true | undefined
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale' | 'inverse' | 'outline'
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
    thin?: boolean
}

export default (props: ButtonProps) => {

    const { labelCase, label, children, style, loading, decoration, disabled, size, inversion, className, thin } = props;
    const styles = createStyles(size, loading, disabled, labelCase, decoration, inversion, thin);

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
