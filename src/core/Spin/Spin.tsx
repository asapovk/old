/** @jsx jsx */
import { jsx } from '@emotion/core';
import createStyles from './Styles';
import Types from './types';

export default (props: Types.ISpin) => {
    const { children, style, className } = props;
    const styles = createStyles();

    return (
        <span css={styles.container} className={className} style={style} children={children} />
    );
}