import { IStories } from './Stories';
interface IStoriesListProps {
    setStory: (storyIndex: number) => void;
    setModalActive: (active: boolean) => void;
}
declare type IStoriesList = IStories & IStoriesListProps;
declare const _default: (props: IStoriesList) => JSX.Element;
export default _default;
