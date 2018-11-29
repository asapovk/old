export interface StorySlide {
    image: any;
    text: string;
    key: string;
}
export interface Story {
    image: any;
    label: string;
    labelColor: any;
    read: boolean;
    onClick?: () => void;
    slides: StorySlide[];
}
export interface IStories {
    title: string;
    stories: Story[];
}
declare const _default: (props: IStories) => JSX.Element;
export default _default;
