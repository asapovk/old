/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { Fragment } from 'react';

export default (props) => {
    let float, integer, fraction, unit

    if (typeof props.children === 'string') {
        float = parseFloat(props.children.replace(/[^0-9.,]/g, "").replace(/,/g, "."));
    } else if (typeof props.children === 'number') {
        float = props.children
    } else return props.children

    float = float.toString().split('.');
    integer = float[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00a0');
    fraction = float[1] && float[1];

    switch (props.format) {
        case 'rub':
            unit = '₽'
            fraction = fraction ? fraction : '00';
            break;
        case 'volume':
            unit = <span>м<sup key={1}>3</sup></span>
    }

    return (
        <Fragment>
            {integer}
            {fraction && <span css={css({ fontSize: '0.75em', opacity: .5 })}>{',' + fraction + '\u00a0'}{unit}</span>}
        </Fragment>
    )
}