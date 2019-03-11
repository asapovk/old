import React from 'react';

declare namespace IconTypes {

    export type Type =
        'add' |
        'more' |
        'pin' |
        'close' |
        'search' |
        'right' |
        'left' |
        'down' |
        'up' |
        'check' |
        'sync' |
        'filter' |
        'settings' |
        'chart' |
        'calendar' |
        'spin' |
        'smorodina' |
        'clock' |
        'card' |
        'counter' |
        'counter_gas' |
        'counter_water' |
        'counter_electricity' |
        'text-right' |
        'arrow-left' |
        'user' |
        'equal' |
        'photo' |
        'bell' |
        'water' |
        'tv' |
        'repair' |
        'electricity' |
        'insurance' |
        'other' |
        'intercom' |
        'garbage' |
        'gas' |
        'heat' |
        'minus' |
        'grid' |
        'list'


    interface Props {
        style?: React.CSSProperties
        className?: string
        type: Type
        onClick?: () => void,
        shape?: 'cirle' | 'oval',
        backgroud?: string,
        size?: string
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent' | 'lowlight' | 'light'
        background?: string
    }

}

export default IconTypes;