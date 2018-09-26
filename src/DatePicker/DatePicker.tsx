import React, { Fragment } from 'react';
import { Icon, Flexbox, TextField, Theme } from '../';
import moment, { Moment } from 'moment';
import { MonthGrid } from './MonthGrid';

moment.locale("ru_RU");

interface Props {
    format?: string
    value?: Moment | string
    minValue?: Moment
    maxValue?: Moment
    label?: string
    // locale?: string
    onChange?: (date: Moment | string) => void
}

export interface ThemedProps {
    theme
}
class DatePicker extends React.Component<Props & ThemedProps> {

    state = {
        active: false,
        value: moment(),
        format: "",
    }

    componentWillMount() {
        if (this.props.value) {
            if (this.props.format) {
                this.setState({
                    value: moment(this.props.value, this.props.format),
                    format: this.props.format
                });
            } else {
                this.setState({
                    value: this.props.value
                });
            }
        } else {
            if (this.props.format) {
                this.setState({
                    format: this.props.format
                });
            }
        }
    }
    render() {
        return (
            <Flexbox column style={{ lineHeight: 1 }}>
                <div style={{
                    color: this.props.theme.labelColor, fontSize: 12,
                    marginBottom: 5,
                    textTransform: 'uppercase',
                }}>
                    {this.props.label}
                </div>
                <TextField
                    value={this.state.value.format(this.state.format || "DD • MMMM • YYYY")}
                    onClick={() => this.setState({ active: !this.state.active })}
                    // onChange={value => {
                    //     if (moment(value).isValid()) {
                    //         this.setState({ value });
                    //     }
                    // }}
                    rightIcon="calendar"
                />
                {this.state.active &&
                    <MonthGrid
                        active={this.state.active}
                        value={this.state.value}
                        minValue={this.props.minValue}
                        maxValue={this.props.maxValue}
                        onChange={value => {
                            this.setState({ value, active: false });
                            if (this.props.onChange) {
                                if (this.state.format) {
                                    this.props.onChange(value.format(this.state.format));
                                } else {
                                    this.props.onChange(value);
                                }
                            }
                        }}
                    />
                }
            </Flexbox>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <DatePicker {...props} theme={{
                labelColor: theme.lowlight.rgb
            }} />
        )}
    </Theme>
);
