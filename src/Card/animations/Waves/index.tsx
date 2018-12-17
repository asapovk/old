/** @jsx jsx */
import { jsx } from '@emotion/core';
import useStyles from '../../useStyles';
import React, { CSSProperties, Fragment, useEffect, useLayoutEffect } from "react";
import Wave from './Wave';
import useClass from "../../../hooks/useClass";
interface IProps {
    active?: boolean
    color?: string
}
export default (props: IProps) => {

    const styles = useStyles(props.active);

    return (
        <Fragment>
            <Wave
                css={styles.animation.wave[1]}
                color={styles.color}
                size={1}
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "0rem",
                }}
            />
            <Wave
                css={styles.animation.wave[2]}
                color={styles.color}
                size={1}
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-1.5rem",
                }}
            />
        </Fragment>
    );
}