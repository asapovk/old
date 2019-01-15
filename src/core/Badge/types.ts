import { CSSProperties, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/core';

declare namespace BadgeTypes {
    export interface IBadge {
        children: ReactNode
        value?: string | number
        color?: 'highlight' | 'red' | 'green' | 'orange' | 'blue'
        loading?: boolean
        top?: number | string
        right?: number | string
        left?: number | string
        onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void
        style?: CSSProperties,
        className?: string
    }
}

export default BadgeTypes