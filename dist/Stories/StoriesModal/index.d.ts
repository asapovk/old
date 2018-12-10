import { IStory, IStories } from '../Stories';
export interface IStoriesModalProps {
    stories: IStory[];
    active: boolean;
    setModalActive: (active: boolean) => void;
    currentStoryIndex: number;
}
export declare type IStoriesModal = IStories & IStoriesModalProps;
declare const _default: (props: IStoriesModal) => JSX.Element;
export default _default;
