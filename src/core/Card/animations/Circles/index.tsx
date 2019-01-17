/** @jsx jsx */
import { jsx } from '@emotion/core';
import createStyles from '../../Styles';
import { Fragment } from "react";
import Circle from './Circle';
interface IProps {
    active?: boolean
    color?: string
}
export default (props: IProps) => {

    const styles = createStyles(props.active);

    return (
        <Fragment>
            <Circle
                css={styles.animation.circle[1]}
                color={styles.color}
                size={0.4}
                style={{
                    position: "absolute",
                    right: "-5rem",
                    top: "-2rem",
                }}
            />
            <Circle
                css={styles.animation.circle[2]}
                color={styles.color}
                size={0.8}
                style={{
                    position: "absolute",
                    right: "-13rem",
                    top: "-5rem",
                }}
            />
        </Fragment>
    );
}