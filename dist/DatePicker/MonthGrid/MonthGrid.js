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
var __1 = require("../../");
var moment_1 = __importDefault(require("moment"));
var Title_1 = __importDefault(require("./Title"));
var Day_1 = __importDefault(require("./Day"));
var MonthGrid = /** @class */ (function (_super) {
    __extends(MonthGrid, _super);
    function MonthGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            date: moment_1.default(),
            active: moment_1.default()
        };
        return _this;
    }
    MonthGrid.prototype.componentWillMount = function () {
        this.setState({
            date: this.props.value
        });
    };
    MonthGrid.prototype.getMonthGrid = function () {
        var grid = [];
        var start = this.state.date.clone().startOf('month').startOf('week').subtract(1, 'day');
        var end = this.state.date.clone().endOf('month').endOf('week');
        while (start.isBefore(end, 'day')) {
            grid.push(Array(7).fill(null).map(function () { return start.add(1, 'day').clone(); }));
        }
        return grid;
    };
    MonthGrid.prototype.render = function () {
        var _this = this;
        var grid = this.getMonthGrid();
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement("div", { className: "ui-datepicker " + (_this.props.active ? "ui-datepicker-active" : ""), style: __assign({}, styles.datePicker.monthGrid.style, _this.props.style) },
            react_1.default.createElement(__1.Flexbox, { column: true, className: "ui-datepicker-monthgrid" },
                react_1.default.createElement(Title_1.default, { date: _this.state.date, onChange: function (date) {
                        _this.setState({ date: date });
                    }, disaplayWeeks: true }),
                grid.map(function (week, index) {
                    return react_1.default.createElement(__1.Flexbox, { key: index, className: "ui-datepicker-monthgrid-week" }, week.map(function (day, index) {
                        return (react_1.default.createElement(Day_1.default, { key: index, day: day, active: _this.state.active, minValue: _this.props.minValue, maxValue: _this.props.maxValue, onClick: function () {
                                _this.setState({ active: day.clone() });
                                _this.props.onChange && _this.props.onChange(day.clone());
                            } }));
                    }));
                })))); }));
    };
    return MonthGrid;
}(react_1.default.Component));
exports.default = MonthGrid;
