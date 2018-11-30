"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
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
var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chart.prototype.render = function () {
        var _this = this;
        var _a = this.props, labels = _a.labels, data = _a.data, responsive = _a.responsive, type = _a.type, tension = _a.tension, loading = _a.loading, style = _a.style, legendDisplay = _a.legendDisplay;
        chart_js_1.defaults.global.defaultFontSize = 14;
        var chartData = function (style) {
            return {
                labels: labels,
                datasets: data.map(function (item) {
                    return __assign({ label: item.title, data: item.values }, chartTypes[type || 'default'](item, style));
                })
            };
        };
        return (react_1.default.createElement(index_1.Styles, null, function (styles) { return (react_1.default.createElement(index_1.Flexbox, { column: true, flex: 1, justifyContent: "center", className: "ui-chart", style: style }, loading ? (react_1.default.createElement(index_1.Flexbox, { column: true, className: "ui-chart-loading", alignItems: "center", alignSelf: "center", justifyContent: "center" },
            react_1.default.createElement(index_1.Spin, null,
                react_1.default.createElement(index_1.Icon, { type: "sync" })),
            typeof loading === "string" && react_1.default.createElement("div", { className: "ui-chart-loadingtext", style: { color: styles.widget.lowlight } }, loading))) :
            react_1.default.createElement(react_chartjs_2_1.Line, { data: chartData(styles.chart), options: {
                    responsive: responsive !== undefined ? responsive : true,
                    animation: _this.props.noAnimation ? false : {
                        animateScale: true,
                        duration: _this.props.animationDuration || 1000,
                        onComplete: _this.props.onAnimationComplete,
                        onProgress: _this.props.onAnimationProgress
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                gridLines: {
                                    color: styles.chart.accent,
                                    lineWidth: 0.2,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: styles.chart.chartTextColor
                                }
                            }],
                        yAxes: [{
                                display: true,
                                gridLines: {
                                    color: styles.chart.accent,
                                    lineWidth: 0.2,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: styles.chart.chartTextColor
                                }
                            }],
                    },
                    legend: {
                        display: legendDisplay !== undefined ? legendDisplay : true,
                        labels: {
                            fontColor: styles.chart.chartTextColor
                        }
                    }
                } }))); }));
    };
    return Chart;
}(react_1.default.Component));
exports.default = Chart;
