"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * styles.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var Row_1 = __importDefault(require("./Row"));
var react_1 = require("react");
exports.default = (function (props) {
    var values = props.values, defaultValues = props.defaultValues, disabled = props.disabled, onChange = props.onChange;
    var _a = react_1.useState([[]]), state = _a[0], setState = _a[1];
    var css = styles_1.default({
        rowsCount: state.length,
        hasTitle: typeof props.title === 'string'
    });
    react_1.useLayoutEffect(function () {
        setState(values || defaultValues || [[]]);
    }, []);
    /**
     * For controlled component
     */
    react_1.useEffect(function () {
        if (typeof values !== 'undefined') {
            setState(values);
        }
    }, [values]);
    var onRowChange = function (value) {
        /**
         * For uncontrolled component
         */
        if (typeof values === 'undefined') {
            setState(state.map(function (rows) { return rows.map(function (item) {
                if (item.index === value.index) {
                    return value;
                }
                return item;
            }); }));
        }
        onChange && onChange(value);
    };
    /**
     * div's are @important
     */
    return (core_1.jsx("div", { css: css },
        typeof props.title === 'string' && (core_1.jsx("span", null, props.title)),
        core_1.jsx("div", null,
            core_1.jsx("div", null, state.map(function (rowValues, index) {
                return core_1.jsx(Row_1.default, { key: index, values: rowValues, disabled: disabled, last: state.length > index + 1, onChange: onRowChange });
            })))));
});
