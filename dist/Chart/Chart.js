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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: 0
        };
        return _this;
    }
    Chart.prototype.componentWillMount = function () {
        if (this.props.data) {
            this.setState({
                value: this.props.data.length - 1
            });
        }
    };
    Chart.prototype.changeDataSet = function () {
        var item = this.props.data[this.state.value];
        if (!item)
            return;
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
    };
    Chart.prototype.render = function () {
        var _this = this;
        chart_js_1.defaults.global.defaultFontColor = "#fff";
        chart_js_1.defaults.global.defaultFontSize = 14;
        chart_js_1.defaults.global.responsive = this.props.responsive || true;
        var data = {
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
        return (react_1.default.createElement(index_1.Flexbox, { column: true, flex: 1, justifyContent: "center", style: this.props.style, className: "ui-chart" }, this.props.loading ? (react_1.default.createElement(index_1.Flexbox, { column: true, className: "ui-chart-loading", alignItems: "center", alignSelf: "center", justifyContent: "center" },
            react_1.default.createElement(index_1.Spin, null,
                react_1.default.createElement(index_1.Icon, { type: "sync" })),
            typeof this.props.loading === "string" && react_1.default.createElement("div", { className: "ui-chart-loadingtext" }, "loading"))) : react_1.default.createElement(index_1.Flexbox, null,
            react_1.default.createElement(index_1.Select, { style: { position: 'absolute', width: '120px', top: 30, left: 80 }, options: this.props.data.map(function (item, i) {
                    return {
                        text: item.title,
                        value: i.toString()
                    };
                }), defaultValue: this.state.value.toString(), onChange: function (val) { return _this.setState({
                    value: val
                }); } }),
            react_1.default.createElement(react_chartjs_2_1.Line, { data: data, options: {
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
                } }))));
    };
    return Chart;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(Chart, __assign({}, props, { theme: {
        text: theme.text,
        accent: theme.accents.blue,
        background: theme.background
    } }))); })); });
