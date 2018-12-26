interface IDot {
    value: string;
    bottomTitle: string;
    color?: string;
}
interface ITimeline {
    leftTitle?: string;
    rightTitle?: string;
    dots: IDot[];
}
declare const _default: (props: ITimeline) => JSX.Element;
export default _default;
