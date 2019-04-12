/** @jsx jsx */
import { jsx } from '@emotion/core'
import Types from './types';

export default (props: Types.Props) => {

    const styles = props.styles;

    return (
        <div data-story css={styles.story.container}>
            {props.story}
        </div>
    );
}