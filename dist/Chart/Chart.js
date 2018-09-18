"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
var Themes_1 = __importDefault(require("../Themes"));
var chart_js_1 = require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chart.prototype.render = function () {
        var _a = this.props, labels = _a.labels, data = _a.data, responsive = _a.responsive, tension = _a.tension, loading = _a.loading, style = _a.style, legendDisplay = _a.legendDisplay, theme = _a.theme;
        chart_js_1.defaults.global.defaultFontColor = "#fff";
        chart_js_1.defaults.global.defaultFontSize = 14;
        chart_js_1.defaults.global.responsive = responsive || true;
        var chartData = {
            labels: labels,
            datasets: data.map(function (item) {
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
                };
            })
        };
        return (react_1.default.createElement(index_1.Flexbox, { column: true, flex: 1, justifyContent: "center", className: "ui-chart" }, loading ? (react_1.default.createElement(index_1.Flexbox, { column: true, className: "ui-chart-loading", alignItems: "center", alignSelf: "center", justifyContent: "center" },
            react_1.default.createElement(index_1.Spin, null,
                react_1.default.createElement(index_1.Icon, { type: "sync" })),
            typeof loading === "string" && react_1.default.createElement("div", { className: "ui-chart-loadingtext" }, "loading"))) :
            react_1.default.createElement(react_chartjs_2_1.Line, { data: chartData, options: {
                    scales: {
                        xAxes: [{
                                display: true,
                                gridLines: {
                                    color: theme.accent,
                                    lineWidth: 0.2,
                                }
                            }],
                        yAxes: [{
                                display: true,
                                gridLines: {
                                    color: theme.accent,
                                    lineWidth: 0.2,
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                    },
                    legend: {
                        display: legendDisplay || true
                    }
                } })));
    };
    return Chart;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(Chart, __assign({}, props, { theme: {
        text: theme.text,
        accent: theme.accents.blue,
        background: theme.background
    } }))); })); });
