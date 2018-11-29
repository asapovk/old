interface StorySlide {
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
interface IStoriesContext {
    modalClose: () => void;
    modalOpen: () => void;
    setStory: (storyIndex: number) => void;
    currentStoryIndex: number;
    active: boolean;
}
export declare function useStoriesContext(): IStoriesContext;
declare const _default: (props: IStories) => JSX.Element | null;
export default _default;
