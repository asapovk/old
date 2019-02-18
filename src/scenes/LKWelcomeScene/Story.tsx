/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Flexbox } from '../..';
import useBrowser from '../../hooks/useBrowser';
import Types from './types';

export default (props: Types.Props) => {

    const size = useBrowser();
    const styles = props.styles;

    return (
        <div css={styles.story.container}>
            {props.story}
        </div>
    );
}