/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Leaflet, Flexbox } from '../../../src';

export default () => {

    return (
        <Flexbox pr={35} pl={50} pt={100} pb={100} column flex={1}>
            <Leaflet
            />
        </Flexbox>
    )
}
