import React from 'react';
import { Moment } from 'moment';
interface Props {
    active: Moment;
    day: Moment;
    minValue?: Moment;
    maxValue?: Moment;
    onClick?: () => void;
}
declare class MonthGridDay extends React.Component<Props> {
    render(): JSX.Element;
}
export default MonthGridDay;
