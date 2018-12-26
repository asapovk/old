import React, { CSSProperties } from 'react';
import { Icon, Flexbox, Styles } from '../../../';
import moment, { Moment } from 'moment';
import Title from './Title';
import Day from './Day';

interface Props {
    value: Moment,
    minValue?: Moment
    maxValue?: Moment
    style?: CSSProperties
    active?: boolean
    onChange?: (date: Moment) => void
}

interface MonthGrid {
    state: {
        date: Moment
        active: Moment
    }
}
class MonthGrid extends React.Component<Props> {

    state = {
        date: moment(),
        active: moment()
    }

    componentWillMount() {
        this.setState({
            date: this.props.value
        });
    }

    getMonthGrid() {
        const grid: Moment[][] = [];
        const start = this.state.date.clone().startOf('month').startOf('week').subtract(1, 'day');
        const end = this.state.date.clone().endOf('month').endOf('week');
        while (start.isBefore(end, 'day')) {
            grid.push(
                Array(7).fill(null).map(() => start.add(1, 'day').clone())
            )
        }
        return grid;
    }

    render() {
        const grid = this.getMonthGrid();
        return (
            <Styles>
                {styles => (
                    <div className={`ui-datepicker ${this.props.active ? "ui-datepicker-active" : ""}`} style={{
                        ...styles.datePicker.monthGrid.style,
                        ...this.props.style
                    }}>
                        <Flexbox column className="ui-datepicker-monthgrid">
                            <Title
                                date={this.state.date}
                                onChange={date => {
                                    this.setState({ date })
                                }}
                                disaplayWeeks={true}
                            />
                            {grid.map((week, index) =>
                                <Flexbox key={index} className="ui-datepicker-monthgrid-week">
                                    {week.map((day, index) => {
                                        return (
                                            <Day
                                                key={index}
                                                day={day}
                                                active={this.state.active}
                                                minValue={this.props.minValue}
                                                maxValue={this.props.maxValue}
                                                onClick={() => {
                                                    this.setState({ active: day.clone() });
                                                    this.props.onChange && this.props.onChange(day.clone());
                                                }}
                                            />
                                        )
                                    })}
                                </Flexbox>
                            )}
                        </Flexbox>
                    </div>
                )}
            </Styles>

        )
    }
}

export default MonthGrid;
