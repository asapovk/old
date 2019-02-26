/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import React from 'react';
import { Spin, Icon } from '../index';
import { IconTypes } from '../types';

/**
 * @deprecated не нужон он 
 */
type highlightDecoration = 'highlight'

export interface ButtonProps {
    label?: string
    labelCase?: 'uppercase' | 'lowercase' | 'capitalize' | 'none'
    labelSize?: 'small' | 'large' | 'normal'
    labelWight?: string

    type?: 'submit'

    size?: 'small' | 'large'
    decoration?: 'none' | 'inverse' | 'outline' | highlightDecoration

    color?: 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale'
    loading?: boolean
    disabled?: boolean

    onClick?: (MouseEvent?) => void
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

export default (props: ButtonProps) => {

    const { label, children, style, loading, className, type } = props;
    const styles = createStyles(props);

    const onClick = (event) => {
        if (!props.disabled && !props.loading) {
            event.stopPropagation();
            props.onClick && props.onClick();
        }
    }

    return (
        <button css={styles} className={className} style={style} onClick={(event) => onClick(event)} type={type}>
            <span>{label || children}</span>
            {loading && <Spin><Icon type="sync" /></Spin>}
        </button>
    );
}
