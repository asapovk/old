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
var Themes_1 = __importDefault(require("../Themes"));
var chart_js_1 = require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chart.prototype.render = function () {
        var _this = this;
        chart_js_1.defaults.global.defaultFontColor = "#fff";
        chart_js_1.defaults.global.defaultFontSize = 14;
        chart_js_1.defaults.global.scales = {
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
        };
        chart_js_1.defaults.global.responsive = this.props.responsive || true;
        var data = {
            labels: this.props.labals,
            datasets: this.props.data.map(function (item) {
                return {
                    label: item.title,
                    data: item.values,
                    fill: false,
                    lineTension: _this.props.tension || 0.4,
                    backgroundColor: item.backgroundColor || _this.props.theme.background,
                    borderColor: item.borderColor || _this.props.theme.accent,
                    borderCapStyle: item.borderCapStyle || 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: item.borderJoinStyle || 'miter',
                    pointBorderColor: _this.props.theme.accent,
                    pointBackgroundColor: _this.props.theme.background,
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHitRadius: 6,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: item.backgroundColor || _this.props.theme.background,
                    pointHoverBorderColor: item.borderColor || _this.props.theme.text,
                    pointHoverBorderWidth: 2,
                };
            }),
        };
        return (react_1.default.createElement("div", null,
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
                                }
                            }],
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
