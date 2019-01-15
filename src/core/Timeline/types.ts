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
    }
}

export default TimelineTypes;