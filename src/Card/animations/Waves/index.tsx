import React, { CSSProperties, Fragment, useEffect, useLayoutEffect } from "react";
import Wave from './Wave';
import useClass from "../../../hooks/useClass";
interface IProps {
    active?: boolean
    color?: string
}
export default (props: IProps) => {
    const [waveClass1, wave1Modifiers] = useClass('ui-card-animation-wave1');
    const [waveClass2, wave2Modifiers] = useClass('ui-card-animation-wave2');

    useEffect(() => {
        if (props.active) {
            wave1Modifiers.addModifier('init');
            wave2Modifiers.addModifier('init');
        } else {
            wave1Modifiers.removeModifier('init');
            wave2Modifiers.removeModifier('init');
        }
    }, [props.active])

    return (
        <Fragment>
            <Wave
                className={waveClass1}
                color={props.color}
                size={1}
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "0rem",
                }}
            />
            <Wave
                className={waveClass2}
                color={props.color}
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