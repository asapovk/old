/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment } from 'react';
import createStyles from './styles';
import Types from './types';

export default (props: Types.ISpinner) => {
    const { spinning, center, className, dark, children, style, defaultElement } = props;
    const styles = createStyles(dark);

    if (!spinning) {
        return children || null;
    }

    const El = defaultElement ? <Spin {...props} /> : <Logo />;

    if (center) {
        return (
            <div css={styles.centeredContainer} style={style} className={className}>
                <div children={El} />
            </div>
        )
    }

    return El;
}

const Spin = (props: Types.ISpinner) => {
    const styles = createStyles();
    const startDelay = 1.1;

    return (
        <div css={styles.spinner} style={props.style} className={props.className}>
            {Array(12).fill("").map((e, i) =>
                <div
                    key={i}
                    css={css({
                        transform: `rotate(${i * 30}deg)`,
                        animationDelay: `-${(startDelay - i / 10).toFixed(1)}s !important`
                    })}
                />
            )}
        </div>
    );
}

const Logo = () => {
    const styles = createStyles();

    return (
        <div css={styles.container}>
            <div css={styles.triangleContainer}>
                <div>
                    {Array(3)
                        .fill("")
                        .map((_, i) =>
                            <div
                                key={i}
                                css={styles.circle(i)}
                            />
                        )}
                </div>
            </div>
        </div>
    )
}