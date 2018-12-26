import React, { CSSProperties } from 'react';
import moment, { Moment } from 'moment';
interface Props {
    value: Moment;
    minValue?: Moment;
    maxValue?: Moment;
    style?: CSSProperties;
    active?: boolean;
    onChange?: (date: Moment) => void;
}
interface MonthGrid {
    state: {
        date: Moment;
        active: Moment;
    };
}
declare class MonthGrid extends React.Component<Props> {
    state: {
        date: moment.Moment;
        active: moment.Moment;
    };
    componentWillMount(): void;
    getMonthGrid(): moment.Moment[][];
    render(): JSX.Element;
}
export default MonthGrid;
