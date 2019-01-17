/** @jsx jsx */
import { jsx } from '@emotion/core';
import createStyles from './styles';
import Types from './types';

export default (props: Types.ISpinner) => {
    const { spinning, center, className, dark, children, style } = props;
    const styles = createStyles();

    if (!spinning) {
        return children || null;
    }

    if (center) {
        return (
            <div css={styles.centeredContainer} style={style} className={className}>
                <div children={<Spin {...props} />} />
            </div>
        )
    }

    return <Spin {...props} />
}

const Spin = (props: Types.ISpinner) => {
    const styles = createStyles();

    return (
        <div css={styles.spinner} style={props.style} className={props.className}>
            {Array(12).fill("").map((e, i) => <div key={i} />)}
        </div>
    );
}