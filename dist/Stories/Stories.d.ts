export interface IStorySlide {
    image: any;
    text: string;
    key: string;
}
export interface IStory {
    image: any;
    label: string;
    labelColor: any;
    read: boolean;
    onClick?: () => void;
    slides: IStorySlide[];
}
export interface IStories {
    title: string;
    stories: IStory[];
}
declare const _default: (props: IStories) => JSX.Element;
export default _default;
