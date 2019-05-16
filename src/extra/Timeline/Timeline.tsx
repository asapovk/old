/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, C1 } from '../../';
import createStyles from './styles';
import Types from './types';


//TODO: remove absolute positions
export default (props: Types.ITimeline) => {
    const styles = createStyles();

    return (
        <Flexbox flex={1} alignItems='center' className={props.className}>
            <div css={styles.layout}>
                {props.leftTitle && (
                    <div css={styles.titleLeft} children={props.leftTitle} />
                )}
                <div css={styles.line} />
                {props.rightTitle && (
                    <div css={styles.titleRight} children={props.rightTitle} />
                )}
            </div>
            <div css={styles.dotsContainer}>
                {props.dots.map((dot, index) => (
                    <div key={index}>
                        <div css={styles.dotTopText} children={<C1 format='rub'>{dot.value}</C1>} />
                        <div css={styles.dotContainer} children={<div />} />
                        <div css={styles.dotBottomText} children={dot.bottomTitle} />
                    </div>
                ))}
            </div>
        </Flexbox>
    )
}