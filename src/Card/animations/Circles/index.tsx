import React, { CSSProperties, Fragment, useEffect, useLayoutEffect } from "react";
import Circle from './Circle';
import useClass from "../../../hooks/useClass";
interface IProps {
    active?: boolean
    color?: string
}
export default (props: IProps) => {
    const [circleClass1, circle1Modifiers] = useClass('ui-card-animation-circle1');
    const [circleClass2, circle2Modifiers] = useClass('ui-card-animation-circle2');

    useEffect(() => {
        if (props.active) {
            circle1Modifiers.addModifier('init');
            circle2Modifiers.addModifier('init');
        } else {
            circle1Modifiers.removeModifier('init');
            circle2Modifiers.removeModifier('init');
        }
    }, [props.active])

    return (
        <Fragment>
            <Circle
                className={circleClass1}
                color={props.color}
                size={0.4}
                style={{
                    position: "absolute",
                    right: "-5rem",
                    top: "-2rem",
                }}
            />
            <Circle
                className={circleClass2}
                color={props.color}
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