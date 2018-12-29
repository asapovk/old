import React, { CSSProperties, useLayoutEffect, useEffect } from "react";
interface IProps {
    color?: string
    size?: number
    style?: CSSProperties
    className?: string
}
const width = 503;
const height = 339;

export default (props: IProps) => {
    let id = Math.trunc(Math.random() * 100000);

    return (
        <svg
            className={props.className}
            viewBox={`0 0 ${width} ${height}`}
            style={{
                width: width * (props.size || 1),
                height: height * (props.size || 1),
                ...props.style
            }}>
            <defs>
                <style>{`.wave-animation-${id}{fill:url(#wave-animation-${id});}`}</style>
                <linearGradient id={`wave-animation-${id}`} x1={0.5} y1={1} x2={0.5} gradientUnits="objectBoundingBox">
                    <stop offset={0} stopOpacity={0.1} stopColor={props.color} />
                    <stop offset={1} stopOpacity={0} stopColor={props.color} />
                </linearGradient>
            </defs>
            <ellipse className={`wave-animation-${id}`} cx={251.5} cy={169.5} rx={251.5} ry={169.5} />
        </svg>
    )
}