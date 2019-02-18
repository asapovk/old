/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import createStyles from './styles';
import { Flexbox } from '../..';
import Types from './types'

import Login from './Login';
import Story from './Story';

export default (props: Types.Props) => {

    const styles = createStyles();

    return (
        <Flexbox css={styles.container}>
            <Login {...{ ...props, styles: styles }} />
            <Story {...{ ...props, styles: styles }} />
        </Flexbox>
    );
}