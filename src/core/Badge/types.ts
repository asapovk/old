import { CSSProperties, ReactNode } from 'react';
import { DecorationTypes } from '../types';

declare namespace BadgeTypes {
    export interface IBadge {
        children: ReactNode
        value?: string | number
        decoration?: DecorationTypes
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