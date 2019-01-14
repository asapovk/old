import React from 'react';
import Types from './types';

export default (props: Types.NavBarItemProps) => {

    const { onClick, text, value, className } = props;

    return (
        <div
            className={className}
            onClick={() => onClick && onClick(value)}
            children={text}
        />
    )
}
