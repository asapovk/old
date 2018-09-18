import React from 'react';
import { Spin, Icon, Flexbox, Select } from '../index';
import Theme from '../Themes';
import { defaults } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface DataSet {
    title: string,
    values: number[],
    borderColor?: string,
    backgroundColor?: string,
    borderCapStyle?: "butt" | "round" | "square"
    borderJoinStyle?: "bevel" | "round" | "miter";
}
export interface Props {
    labels: string[]
    data: DataSet[]
    responsive?: boolean
    tension?: number,
    loading?: boolean,
    style?: any,
    selectLabel?: string
}

export interface ThemedProps extends Props {
    theme
}

class Chart extends React.Component<ThemedProps> {
    state = {
        value: 0
    }

    componentWillMount() {
        if (this.props.data) {
            this.setState({
                value: this.props.data.length - 1
            });
        }
    }

    changeDataSet() {
        const item = this.props.data[this.state.value];
        if (!item) return;

        return {
            label: item.title,
            data: item.values,

            pointHoverBackgroundColor: item.backgroundColor || this.props.theme.background,
            pointHoverBorderColor: item.borderColor || this.props.theme.text,
            backgroundColor: item.backgroundColor || this.props.theme.background,
            borderColor: item.borderColor || this.props.theme.accent,
            borderJoinStyle: item.borderJoinStyle || 'miter',
            borderCapStyle: item.borderCapStyle || 'butt',
        };
    }

    render() {

        defaults.global.defaultFontColor = "#fff";
        defaults.global.defaultFontSize = 14;

        defaults.global.responsive = this.props.responsive || true;

        const data = {
            labels: this.props.labels,
            datasets: [Object.assign({}, this.changeDataSet(), {
                fill: false,
                lineTension: this.props.tension || 0.4,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBorderColor: this.props.theme.accent,
                pointBackgroundColor: this.props.theme.background,
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHitRadius: 6,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
            })]
        };
        return (
            <Flexbox column flex={1} justifyContent="center" style={this.props.style} className="ui-chart">
                {this.props.loading ? (
                    <Flexbox column className="ui-chart-loading" alignItems="center" alignSelf="center" justifyContent="center">
                        <Spin>
                            <Icon type="sync" />
                        </Spin>
                        {typeof this.props.loading === "string" && <div className="ui-chart-loadingtext">loading</div>}
                    </Flexbox>
                ) : <Flexbox>
                        <Select
                            style={{ position: 'absolute', width: '120px', top: 30, left: 80 }}
                            options={this.props.data.map((item, i) => {
                                return {
                                    text: item.title,
                                    value: i.toString()
                                }
                            })}
                            defaultValue={this.state.value.toString()}
                            onChange={(val) => this.setState({
                                value: val
                            })}
                            label={this.props.selectLabel}
                        />
                        <Line data={data} options={{
                            scales: {
                                xAxes: [{
                                    display: true,
                                    gridLines: {
                                        color: this.props.theme.accent,
                                        lineWidth: 0.2,
                                    }
                                }],
                                yAxes: [{
                                    display: true,
                                    gridLines: {
                                        color: this.props.theme.accent,
                                        lineWidth: 0.2,
                                    },
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }],
                            },
                            legend: {
                                display: false
                            }
                        }} />
                    </Flexbox>}
            </Flexbox>
        );
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <Chart {...props} theme={{
                text: theme.text,
                accent: theme.accents.blue,
                background: theme.background
            }} />
        )}
    </Theme>
);