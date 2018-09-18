import React from 'react';
import { Icon } from '../Icon';
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
    labals: string[]
    data: DataSet[]
    responsive?: boolean
    tension?: number
}
export interface ThemedProps extends Props {
    theme
}

class Chart extends React.Component<ThemedProps> {

    render() {
        defaults.global.defaultFontColor = "#fff";
        defaults.global.defaultFontSize = 14;
        defaults.global.scales = {
            xAxes: [{
                display: true,
                gridLines: {
                    display: false,
                    color: "#FFFFFF"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
        }
        defaults.global.responsive = this.props.responsive || true;

        const data = {
            labels: this.props.labals,
            datasets: this.props.data.map(item => {
                return {
                    label: item.title,
                    data: item.values,

                    fill: false,
                    lineTension: this.props.tension || 0.4,
                    backgroundColor: item.backgroundColor || this.props.theme.background,
                    borderColor: item.borderColor || this.props.theme.accent,
                    borderCapStyle: item.borderCapStyle || 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: item.borderJoinStyle || 'miter',
                    pointBorderColor: this.props.theme.accent,
                    pointBackgroundColor: this.props.theme.background,
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHitRadius: 6,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: item.backgroundColor || this.props.theme.background,
                    pointHoverBorderColor: item.borderColor || this.props.theme.text,
                    pointHoverBorderWidth: 2,
                }
            }),
        };
        return (
            <div>
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
                            }
                        }],
                    }
                }} />
            </div>
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