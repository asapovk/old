/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { Fragment } from 'react';

export default (props) => {
    let number, integer, fraction, unit

    number = getPositions(props.children, props.toFixed);

    if (!number) return props.children;

    switch (props.format) {
        case 'rub':
            number = getPositions(props.children, 2)
            fraction = number.fraction ? number.fraction : '00';
            unit = '₽'
            break;
        case 'volume':
            fraction = number.fraction;
            unit = <span>м<sup key={1}>3</sup></span>
            break;
        case 'power':
            fraction = number.fraction;
            unit = 'кВт⋅ч'
            break;
    }

    integer = number.integer;

    return (
        <Fragment>
            {integer}
            {<span css={css({ fontSize: '0.75em', opacity: .5 })}>{fraction && ',' + fraction}{'\u00a0'}{unit}</span>}
        </Fragment>
    )
}

function getPositions(number, fixed?) {
    let float;

    if (typeof number === 'string') {
        float = parseFloat(number.replace(/[^0-9.,]/g, "").replace(/,/g, "."));
    } else if (typeof number === 'number') {
        float = number
    } else return null

    if (fixed) {
        float = float.toFixed(fixed)
    }

    float = float.toString().split('.');

    return {
        integer: float[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00a0'),
        fraction: float[1] && float[1]
    }
}