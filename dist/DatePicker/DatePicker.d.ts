import { Moment } from 'moment';
interface Props {
    format?: string;
    value?: Moment | string;
    minValue?: Moment;
    maxValue?: Moment;
    onChange?: (date: Moment | string) => void;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
