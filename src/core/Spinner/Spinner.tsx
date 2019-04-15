/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment } from 'react';
import createStyles from './styles';
import Types from './types';
import { C2 } from '../..';
import { Flexbox } from '../Flexbox';

export default (props: Types.ISpinner) => {
    const { spinning, center, className, dark, children, style, defaultElement } = props;
    const styles = createStyles(dark);

    if (!spinning) {
        return children || null;
    }

    const El = (
        <Flexbox column justifyContent='center' alignItems='center'>
            {defaultElement
                ? <Spin {...props} />
                : <Logo {...props} />}
            {props.loadingText && (
                <C2
                    bold
                    color="lowlight"
                    css={css({ marginTop: "2.5rem" })}
                    children={props.loadingText}
                />
            )}
        </Flexbox>
    )

    if (center) {
        return (
            <div css={styles.centeredContainer} style={style} className={className}>
                {El}
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

const Logo = (props: Types.ISpinner) => {
    const styles = createStyles();

    return (
        <div css={styles.container} className={props.className}>
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