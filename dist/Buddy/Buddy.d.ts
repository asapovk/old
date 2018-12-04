import { Component, CSSProperties } from 'react';
export interface Props {
    style?: CSSProperties;
    size?: number;
    defaultFace?: "happy" | "sad";
}
declare class Buddy extends Component<Props> {
    timeline: any;
    buddy: HTMLElement;
    buddyContainer: HTMLElement;
    buddyMouth: HTMLElement;
    buddyBrouwLeft: HTMLElement;
    buddyBrouwRight: HTMLElement;
    buddyEyes: HTMLCollection;
    buddyBrouws: HTMLCollection;
    PATH_STATES: any;
    cursorPos: {
        x: number;
        y: number;
    };
    BUDDY_ID: string;
    constructor(props: any);
    init(): void;
    /**
     * Счастливый
     */
    makeHappy(instant?: boolean): void;
    /**
     * Обычный
     */
    makeNormal(instant?: boolean): void;
    /**
     * Грустный
     */
    makeSad(instant?: boolean): void;
    /**
     * Попрыгун
     */
    makeJumpy(repeat?: number): void;
    stopAnimation(): void;
    private setListenersEnabled;
    private moveEyes;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Buddy;
