import React from 'react';
import { Spin, Icon, Flexbox } from '../index';
import Theme from '../Themes';
import { defaults } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface DataSet {
    title: string
    values: number[]
    color?: string
    borderColor?: string
    backgroundColor?: string
    fill?: boolean
    borderCapStyle?: "butt" | "round" | "square"
    borderJoinStyle?: "bevel" | "round" | "miter"
}
export interface Props {
    labels: string[]
    data: DataSet[]
    responsive?: boolean
    tension?: number
    loading?: boolean
    style?: any
    legendDisplay?: boolean
    noAnimation?: boolean
    animationDuration?: number
    onAnimationComplete?: () => void
    onAnimationProgress?: () => void

    type?: "default" | "miniProc"
}

export interface ThemedProps {
    theme
}

const chartTypes: any = {
    'default': (item, theme) => ({
        pointHoverBackgroundColor: item.backgroundColor || theme.background,
        pointHoverBorderColor: item.borderColor || theme.text,
        backgroundColor: item.backgroundColor || theme.background,
        borderColor: item.color || item.borderColor || theme.accent,
        borderJoinStyle: item.borderJoinStyle || 'miter',
        borderCapStyle: item.borderCapStyle || 'butt',
        fill: item.fill || false,
        lineTension: 0.4,
        borderDash: [],
        borderWidth: 3,
        borderDashOffset: 0.0,
        pointBorderColor: item.color || theme.accent,
        pointBackgroundColor: theme.background,
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
    }),
    'miniProc': (item, theme) => ({
        pointHoverBackgroundColor: item.backgroundColor || theme.background,
        pointHoverBorderColor: item.borderColor || theme.text,
        backgroundColor: item.backgroundColor || theme.background,
        borderColor: item.color || item.borderColor || theme.accent,
        borderJoinStyle: item.borderJoinStyle || 'miter',
        borderCapStyle: item.borderCapStyle || 'butt',
        fill: item.fill || false,
        lineTension: 0,
        borderDash: [],
        borderWidth: 1,
        borderDashOffset: 0.0,
        pointBorderColor: item.color || theme.accent,
        pointBackgroundColor: theme.background,
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 1,
    })
}
class Chart extends React.Component<Props & ThemedProps> {
    render() {
        const { labels, data, responsive, type, tension, loading, style, legendDisplay, theme } = this.props;

        defaults.global.defaultFontSize = 14;

        const chartData = {
            labels: labels,
            datasets: data.map(item => {
                return {
                    label: item.title,
                    data: item.values,
                    ...chartTypes[type || 'default'](item, theme),
                }
            })
        };

        return (
            <Flexbox column flex={1} justifyContent="center" className="ui-chart" style={style}>
                {loading ? (
                    <Flexbox column className="ui-chart-loading" alignItems="center" alignSelf="center" justifyContent="center">
                        <Spin>
                            <Icon type="sync" />
                        </Spin>
                        {typeof loading === "string" && <div className="ui-chart-loadingtext">{loading}</div>}
                    </Flexbox>
                ) :
                    <Line data={chartData} options={{
                        responsive: responsive !== undefined ? responsive : true,
                        animation: this.props.noAnimation ? (false as any) : {
                            animateScale: true,
                            duration: this.props.animationDuration || 1000,
                            onComplete: this.props.onAnimationComplete,
                            onProgress: this.props.onAnimationProgress
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    color: theme.accent,
                                    lineWidth: 0.2,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: theme.chartTextColor
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
                                    fontColor: theme.chartTextColor
                                }
                            }],
                        },
                        legend: {
                            display: legendDisplay !== undefined ? legendDisplay : true,
                            labels: {
                                fontColor: theme.chartTextColor
                            }
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
                text: theme.text.hex,
                accent: theme.highlight.hex,
                background: theme.background.hex,
                chartTextColor: "#777777"
            }} />
        )}
    </Theme>
);