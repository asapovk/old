import React from 'react';
import { Moment } from 'moment';
interface Props {
    date: Moment;
    disaplayWeeks?: boolean;
    onChange?: (date: Moment) => void;
}
declare class MonthGridTitle extends React.Component<Props> {
    render(): JSX.Element;
}
export default MonthGridTitle;
