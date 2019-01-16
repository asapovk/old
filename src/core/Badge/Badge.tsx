/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Spin, Icon } from '..';

import createStyles from './styles';
import Types from './types';

export default (props: Types.IBadge) => {
    const { onClick, value, children, style, loading, decoration, top, right, left, className } = props;
    const styles = createStyles(decoration, top, right, left);

    return (
        <div css={styles.container} style={style} onClick={onClick} className={className}>
            <div css={styles.counter} children={!loading ? <Spin children={<Icon type="sync" />} /> : value} />
            {children}
        </div>
    );
}