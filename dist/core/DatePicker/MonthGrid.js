"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MonthGrid.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../../../");
var moment_1 = __importDefault(require("moment"));
var MonthGridTitle_1 = __importDefault(require("./MonthGridTitle"));
var MonthGridDay_1 = __importDefault(require("./MonthGridDay"));
var Styles_1 = __importDefault(require("./Styles"));
exports.default = (function (props) {
    var _a = react_1.useState(props.value), date = _a[0], setDate = _a[1];
    var _b = react_1.useState(moment_1.default()), activeDate = _b[0], setActiveDate = _b[1];
    var grid = [];
    var start = date.clone().startOf('month').startOf('week').subtract(1, 'day');
    var end = date.clone().endOf('month').endOf('week');
    while (start.isBefore(end, 'day')) {
        grid.push(Array(7).fill(null).map(function () { return start.add(1, 'day').clone(); }));
    }
    react_1.useEffect(function () { return setActiveDate(props.value); }, [props.value]);
    var styles = Styles_1.default();
    return (core_1.jsx("div", null,
        core_1.jsx(__1.Flexbox, { column: true, css: styles.monthGrid },
            core_1.jsx(MonthGridTitle_1.default, { date: date, onChange: setDate, disaplayWeeks: true }),
            grid.map(function (week, index) {
                return core_1.jsx(__1.Flexbox, { key: index }, week.map(function (day, index) {
                    return (core_1.jsx(MonthGridDay_1.default, { key: index, day: day, active: activeDate, minValue: props.minValue, maxValue: props.maxValue, onClick: function () {
                            props.onChange(day.clone());
                        } }));
                }));
            }))));
});
