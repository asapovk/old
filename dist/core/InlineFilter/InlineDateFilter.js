"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var InlineFilter_1 = __importDefault(require("./InlineFilter"));
var moment_1 = __importDefault(require("moment"));
var currentYear = new Date().getFullYear();
var months = [0].concat(Array.apply(0, Array(11)).map(function (_, i) { return i + 1; }));
var years = [];
exports.default = (function (props) {
    var _a = react_1.useState(''), currentM = _a[0], setM = _a[1];
    var _b = react_1.useState(''), currentY = _b[0], setY = _b[1];
    react_1.useLayoutEffect(function () {
        setM(props.defaultMonth || props.month || moment_1.default().format('MM'));
        setY(props.defaultYear || props.year || moment_1.default().format('YYYY'));
        for (var year = props.yearsCount || 2; year >= 0; year--) {
            years.push((currentYear + year).toString());
        }
    }, []);
    /**
     * For controlled component
     */
    react_1.useLayoutEffect(function () {
        if (typeof props.month !== 'undefined')
            setM(props.month);
        if (typeof props.year !== 'undefined')
            setY(props.year);
    }, [props.month, props.year]);
    var onChangeFilter = function (value) {
        var newM = currentM;
        var newY = currentY;
        if (typeof value.index === 'string') {
            newY = value.index;
        }
        if (typeof value.index === 'number') {
            if (value.index >= 0) {
                newM = moment_1.default().month(value.index).format('MM');
            }
            else {
                newM = 'ALL';
            }
        }
        /**
         * For uncontrolled component
         */
        if (typeof props.month === 'undefined')
            setM(newM);
        if (typeof props.year === 'undefined')
            setY(newY);
        props.onChange && props.onChange(newY, newM);
    };
    return (react_1.default.createElement(InlineFilter_1.default, { title: props.title, disabled: props.disabled, values: [
            years.map(function (year) {
                return ({
                    index: year,
                    label: year,
                    selected: currentY === year,
                });
            }),
            [-1].concat(months).map(function (month) {
                return ({
                    index: month >= 0 ? month : -1,
                    label: month >= 0 ? moment_1.default().month(month).format('MMMM') : 'все',
                    selected: month >= 0 ? (moment_1.default(currentM, 'MM').month() === month) : currentM === 'ALL',
                });
            })
        ], onChange: onChangeFilter }));
});
