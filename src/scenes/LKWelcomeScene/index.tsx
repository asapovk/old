/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import { Flexbox } from '../..';
import Types from './types'

import Form from './Form';
import Story from './Story';

export default (props: Types.Props) => {

    const styles = createStyles();

    const onStoryClick = () => {
        const story = document.querySelector('[data-story]');
        if (story) {
            story.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    return (
        <Flexbox css={styles.container}>
            <Form onStoryClick={onStoryClick} {...{ ...props, styles: styles }} />
            <Story {...{ ...props, styles: styles }} />
        </Flexbox>
    );
}