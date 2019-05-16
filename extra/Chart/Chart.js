"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var index_1 = require("../../index");
var chart_js_1 = require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
var chartTypes = {
    'default': function (item, theme) { return ({
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
    }); },
    'miniProc': function (item, theme) { return ({
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
    }); }
};
exports.default = (function (props) {
    var labels = props.labels, data = props.data, responsive = props.responsive, type = props.type, tension = props.tension, loading = props.loading, style = props.style, legendDisplay = props.legendDisplay;
    var styles = styles_1.default();
    chart_js_1.defaults.global.defaultFontSize = 14;
    var chartData = function (style) {
        return {
            labels: labels,
            datasets: data.map(function (item) {
                return __assign({ label: item.title, data: item.values }, chartTypes[type || 'default'](item, style));
            })
        };
    };
    return (core_1.jsx(index_1.Flexbox, { column: true, flex: 1, justifyContent: "center", css: styles.main, style: style }, loading ? (core_1.jsx(index_1.Flexbox, { column: true, css: styles.loading, alignItems: "center", alignSelf: "center", justifyContent: "center" },
        core_1.jsx(index_1.Spin, null,
            core_1.jsx(index_1.Icon, { type: "sync" })),
        typeof loading === "string" && core_1.jsx("div", { css: styles.loadingtext, style: { color: styles.lowlight } }, loading))) :
        core_1.jsx(react_chartjs_2_1.Line, { data: chartData(styles), options: {
                responsive: responsive !== undefined ? responsive : true,
                animation: props.noAnimation ? false : {
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
            } })));
});
