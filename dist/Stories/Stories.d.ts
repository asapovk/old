interface Story {
    image: any;
    label: string;
    labelColor: any;
    read: boolean;
    onClick?: () => void;
}
interface IStories {
    title: string;
    stories: Story[];
}
declare const _default: (props: IStories) => JSX.Element | null;
export default _default;
