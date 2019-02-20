/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import { Flexbox } from '../..';
import Types from './types'

import Form from './Form';
import Story from './Story';

export default (props: Types.Props) => {

    const styles = createStyles();

    return (
        <Flexbox css={styles.container}>
            <Form {...{ ...props, styles: styles }} />
            <Story {...{ ...props, styles: styles }} />
        </Flexbox>
    );
}