import React from 'react';
import { SpacingProps } from '../types';
declare namespace IconTypes {
    type Type = 'add' | 'more' | 'pin' | 'close' | 'search' | 'right' | 'left' | 'down' | 'up' | 'check' | 'sync' | 'filter' | 'settings' | 'chart' | 'calendar' | 'spin' | 'smorodina' | 'clock' | 'card' | 'counter' | 'counter_gas' | 'counter_water' | 'counter_electricity' | 'text-right' | 'arrow-left' | 'user' | 'equal' | 'photo' | 'bell' | 'water' | 'tv' | 'repair' | 'electricity' | 'insurance' | 'other' | 'intercom' | 'garbage' | 'gas' | 'heat' | 'minus' | 'grid' | 'list' | string;
    interface Props extends SpacingProps {
        style?: React.CSSProperties;
        className?: string;
        type: Type;
        onClick?: () => void;
        shape?: 'cirle' | 'oval';
        size?: string;
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent' | 'lowlight' | 'light';
        background?: string;
    }
}
export default IconTypes;
