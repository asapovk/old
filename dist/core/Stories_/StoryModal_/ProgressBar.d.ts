interface IProps {
    duration: number;
    isPlaying: boolean;
    isCurrent: boolean;
    isPassed: boolean;
    onPassed: () => void;
}
export default function TestApp(props: IProps): JSX.Element;
export {};
