import { Moment } from 'moment';
interface Props {
    active: Moment;
    day: Moment;
    onClick?: () => void;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
