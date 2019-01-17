/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '..';
import createStyles from './Styles';
import Types from './types';


//TODO: remove absolute positions
export default (props: Types.ITimeline) => {
    const styles = createStyles();

    return (
        <Flexbox flex={1} alignItems='center'>
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
                        <div css={styles.dotTopText} children={dot.value} />
                        <div css={styles.dotContainer} children={<div />} />
                        <div css={styles.dotBottomText} children={dot.bottomTitle} />
                    </div>
                ))}
            </div>
        </Flexbox>
    )
}