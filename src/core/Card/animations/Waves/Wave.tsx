import React, { CSSProperties, useLayoutEffect, useEffect } from "react";
interface IProps {
    color?: string
    size?: number
    style?: CSSProperties
    className?: string
}
const width = 3900;
const height = 90;

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
                    <stop offset={0} stopOpacity={0} stopColor={props.color} />
                    <stop offset={1} stopOpacity={0.1} stopColor={props.color} />
                </linearGradient>
            </defs>
            <path className={`wave-animation-${id}`} d="M3900,90V17.4C3876.7,6.4,3848.8,0,3818.9,0s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4V17C2576.7,6,2548.8-.4,2518.9-.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4S2135.8,6,2112.5,17s-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2A205.393,205.393,0,0,0,893.9,0C864,0,835.8,6.5,812.5,17.5s-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2C626.7,6.4,598.8,0,568.9,0s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2C301.7,6.4,273.8,0,243.9,0s-58.1,6.5-81.4,17.5S111.1,34.9,81.1,34.9C51.2,34.9,23.3,28.5,0,17.5V90Z" />
        </svg>
    )
}
