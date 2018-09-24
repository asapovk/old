import { CSSProperties } from 'react';
import { Moment } from 'moment';
interface Props {
    value: Moment;
    style?: CSSProperties;
    active?: boolean;
    onChange?: (date: Moment) => void;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
