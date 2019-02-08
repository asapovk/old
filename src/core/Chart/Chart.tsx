/** @jsx jsx */
import { jsx } from '@emotion/core';
import useStyles from './useStyles';
import React from 'react';
import { Spin, Icon, Flexbox } from '../../index';
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
export default (props: Props) => {

    const { labels, data, responsive, type, tension, loading, style, legendDisplay } = props;
    const styles = useStyles();
    defaults.global.defaultFontSize = 14;

    const chartData = (style) => {
        return {
            labels: labels,
            datasets: data.map(item => {
                return {
                    label: item.title,
                    data: item.values,
                    ...chartTypes[type || 'default'](item, style),
                }
            })
        }
    };

    return (
        <Flexbox column flex={1} justifyContent="center" css={styles.main} style={style}>
            {loading ? (
                <Flexbox column css={styles.loading} alignItems="center" alignSelf="center" justifyContent="center">
                    <Spin>
                        <Icon type="sync" />
                    </Spin>
                    {typeof loading === "string" && <div css={styles.loadingtext} style={{ color: styles.lowlight }}>{loading}</div>}
                </Flexbox>
            ) :
                <Line data={chartData(styles)} options={{
                    responsive: responsive !== undefined ? responsive : true,
                    animation: props.noAnimation ? (false as any) : {
                        animateScale: true,
                        duration: props.animationDuration || 1000,
                        onComplete: props.onAnimationComplete,
                        onProgress: props.onAnimationProgress
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                color: styles.accent,
                                lineWidth: 0.2,
                            },
                            ticks: {
                                beginAtZero: true,
                                fontColor: styles.chartTextColor
                            }
                        }],
                        yAxes: [{
                            display: true,

                            gridLines: {
                                color: styles.accent,
                                lineWidth: 0.2,
                            },
                            ticks: {
                                beginAtZero: true,
                                fontColor: styles.chartTextColor
                            }
                        }],
                    },
                    legend: {
                        display: legendDisplay !== undefined ? legendDisplay : true,
                        labels: {
                            fontColor: styles.chartTextColor
                        }
                    }
                }} />
            }
        </Flexbox>
    );
}