import { ClassNames } from "@emotion/core";

declare namespace TimelineTypes {
    export interface IDot {
        value: string
        bottomTitle: string
        color?: string
    }

    export interface ITimeline {
        leftTitle?: string
        rightTitle?: string
        dots: IDot[]
        className?: string
    }
}

export default TimelineTypes;