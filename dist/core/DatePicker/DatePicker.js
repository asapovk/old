"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var moment_1 = __importDefault(require("moment"));
var MonthGrid_1 = __importDefault(require("./MonthGrid"));
var TextField_1 = require("../TextField");
var __1 = require("..");
var Styles_1 = __importDefault(require("./Styles"));
exports.default = (function (props) {
    var _a = react_1.useState(moment_1.default()), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(false), isActive = _b[0], setActive = _b[1];
    var styles = Styles_1.default();
    react_1.useLayoutEffect(function () {
        moment_1.default.locale("ru_RU");
        if (props.value) {
            if (props.format) {
                setValue(moment_1.default(props.value, props.format));
            }
            else {
                if (moment_1.default.isMoment(props.value)) {
                    setValue(props.value);
                }
                else {
                    console.warn('DatePicker property value should be instanceof Moment, otherwise you should use format property.');
                }
            }
        }
    }, []);
    function onChange(value) {
        setValue(value);
        if (props.onChange) {
            if (props.format) {
                props.onChange(value.format(props.format));
            }
            else {
                props.onChange(value);
            }
        }
    }
    switch (props.type) {
        case 'display':
            return (core_1.jsx(MonthGrid_1.default, { value: value, minValue: props.minValue, maxValue: props.maxValue, onChange: onChange }));
        case 'textfield':
        default:
            return (core_1.jsx("div", null,
                core_1.jsx(TextField_1.TextField, { label: props.label, value: value.format(props.format || "YYYY-MM-DD"), onChange: function (e) {
                        var date = moment_1.default(e.target.value, props.format || "YYYY-MM-DD");
                        if (date.isValid()) {
                            setValue(date);
                        }
                    }, onClick: function () { return setActive(true); }, rightIcon: !isActive ? "calendar" : undefined }),
                isActive && (core_1.jsx("div", { css: styles.textFieldWrapper },
                    core_1.jsx(MonthGrid_1.default, { value: value, minValue: props.minValue, maxValue: props.maxValue, onChange: onChange }),
                    core_1.jsx(__1.Button, { onClick: function () { return setActive(false); }, size: "small", label: "OK", decoration: "none", css: styles.textFieldOkButton })))));
    }
});
