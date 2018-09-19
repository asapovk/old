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
    legendDisplay?: boolean
}

export interface ThemedProps {
    theme
}

class Chart extends React.Component<Props & ThemedProps> {
    render() {
        const { labels, data, responsive, tension, loading, style, legendDisplay, theme } = this.props;

        defaults.global.defaultFontColor = "#fff";
        defaults.global.defaultFontSize = 14;

        defaults.global.responsive = responsive || true;

        const chartData = {
            labels: labels,
            datasets: data.map(item => {
                return {
                    label: item.title,
                    data: item.values,

                    pointHoverBackgroundColor: item.backgroundColor || theme.background,
                    pointHoverBorderColor: item.borderColor || theme.text,
                    backgroundColor: item.backgroundColor || theme.background,
                    borderColor: item.borderColor || theme.accent,
                    borderJoinStyle: item.borderJoinStyle || 'miter',
                    borderCapStyle: item.borderCapStyle || 'butt',
                    fill: false,
                    lineTension: tension || 0.4,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBorderColor: theme.accent,
                    pointBackgroundColor: theme.background,
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHitRadius: 6,
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 2,
                }
            })
        };

        return (
            <Flexbox column flex={1} justifyContent="center" className="ui-chart">
                {loading ? (
                    <Flexbox column className="ui-chart-loading" alignItems="center" alignSelf="center" justifyContent="center">
                        <Spin>
                            <Icon type="sync" />
                        </Spin>
                        {typeof loading === "string" && <div className="ui-chart-loadingtext">loading</div>}
                    </Flexbox>
                ) :
                    <Line data={chartData} options={{
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    color: theme.accent,
                                    lineWidth: 0.2,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: theme.text
                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    color: theme.accent,
                                    lineWidth: 0.2,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: "#F00000"
                                }
                            }],
                        },
                        legend: {
                            display: legendDisplay || true
                        }
                    }} />
                }
            </Flexbox>
        );
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <Chart {...props} theme={{
                text: theme.text,
                accent: theme.highlight,
                background: theme.background
            }} />
        )}
    </Theme>
);