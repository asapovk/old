import { Moment } from 'moment';
interface Props {
    date: Moment;
    disaplayWeeks?: boolean;
    onChange?: (date: Moment) => void;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
