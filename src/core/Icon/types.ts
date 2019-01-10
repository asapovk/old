import React from 'react';

declare namespace IconTypes {

    type Type =
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
        'text-right' |
        'user'

    interface Props {
        style?: React.CSSProperties
        className?: string
        type: Type
    }

}

export default IconTypes;