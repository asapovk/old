/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import { Flexbox } from '../..';
import useBrowser from '../../hooks/useBrowser';
import { GuestSceneProps } from './types'

export default (props: GuestSceneProps) => {

    const size = useBrowser();
    const styles = createStyles();

    return (
        <div css={styles.story.main}>
            {props.story}
        </div>
    );
}