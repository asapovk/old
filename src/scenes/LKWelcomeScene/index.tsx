/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Flexbox } from '../..';
import { GuestSceneProps } from './types'

import Login from './Login';
import Story from './Story';

export default (props: GuestSceneProps) => {

    return (
        <Flexbox css={css({ minHeight: '100%' })}>
            <Login {...props} />
            <Story {...props} />
        </Flexbox>
    );
}