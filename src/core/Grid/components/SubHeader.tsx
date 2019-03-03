/** @jsx jsx */
import { jsx } from '@emotion/core';

import { subHeaderStyles } from '../styles';
import Types from '../types';

export default (props: Types.SubHeaderProps) => {
    const styles = subHeaderStyles({
        columnsLength: props.columnsLength,
        hideHeaders: props.hideHeaders
    });

    return <div css={styles.subheader} children={props.title} />
}
