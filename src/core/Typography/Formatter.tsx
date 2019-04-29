/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { Fragment } from 'react';
import { ThemeInterface } from '../../styles';

export default (props) => {
    let number, integer, fraction, unitSymbol

    number = getPositions(props.children, props.toFixed);

    if (!number) return props.children;

    switch (props.format) {
        case 'currency':
            number = getPositions(props.children, 2)
            fraction = number.fraction ? number.fraction : '00';
            break;
        default:
            fraction = number.fraction;
    }

    switch (props.unit) {
        case 'rub':
            unitSymbol = '₽'
            break;
        case 'volume':
            unitSymbol = <span>м<sup key={1}>3</sup></span>
            break;
        case 'power':
            unitSymbol = 'кВт⋅ч'
            break;
    }

    integer = number.integer;

    return (
        <Fragment>
            {integer}
            {<span css={(theme: ThemeInterface) => css({
                fontSize: '0.75em',
                // opacity: .5
            }, props.fractionColor && {
                color: theme[props.fractionColor].hex
            })}>
                {fraction && ',' + fraction}{'\u00a0'}{unitSymbol}
            </span>}
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

    if (fixed || fixed === 0) {
        float = float.toFixed(fixed)
    }

    float = float.toString().split('.');

    return {
        integer: float[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00a0'),
        fraction: float[1] && float[1]
    }
}