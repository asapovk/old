declare namespace TimelineTypes {
    interface IDot {
        value: string;
        bottomTitle: string;
        color?: string;
    }
    interface ITimeline {
        leftTitle?: string;
        rightTitle?: string;
        dots: IDot[];
        className?: string;
    }
}
export default TimelineTypes;
