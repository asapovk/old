"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
var styles_2 = __importDefault(require("../TextField/styles"));
var SelectItems_1 = __importDefault(require("./SelectItems"));
var TextField_1 = require("../TextField");
exports.default = (function (props) {
    var search = props.search, clearable = props.clearable, multiselect = props.multiselect, onChange = props.onChange, disabled = props.disabled, options = props.options;
    var _a = react_1.useState([]), selectedValues = _a[0], setSelectedValues = _a[1];
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var styles = styles_1.default({
        disabled: disabled,
        open: open,
    });
    var textFieldStyles = styles_2.default({
        size: props.size,
        decoration: props.decoration,
        disabled: disabled,
        floatingLabel: false,
        multiline: false,
        leftIcon: false,
        focused: false
    });
    var toggle = function () { return !disabled && setOpen(!open); };
    var onSelect = function (option) {
        var newValues = [option];
        if (multiselect) {
            newValues = [option].concat(selectedValues);
            typeof props.value === 'undefined' && setSelectedValues(newValues);
        }
        else {
            typeof props.value === 'undefined' && setSelectedValues(newValues);
        }
        onChange && onChange(newValues);
        toggle();
    };
    react_1.useLayoutEffect(function () {
        var value = props.value || props.defaultValue || [];
        if (multiselect) {
            setSelectedValues(Array.isArray(value) ? value : [value]);
        }
        else {
            setSelectedValues(Array.isArray(value)
                ? value[0]
                    ? [value[0]]
                    : []
                : [value]);
        }
    }, []);
    return (core_1.jsx("div", { style: props.style },
        core_1.jsx("div", { css: styles.root },
            core_1.jsx(TextField_1.TextField, { css: styles.input, label: props.label, size: props.size, decoration: props.decoration, placeholder: props.placeholder, floatingLabel: props.floatingLabel, disabled: disabled, disableEditing: true, onClick: toggle, rightIcon: open ? 'up' : 'down', value: !multiselect && selectedValues[0] ? selectedValues[0].text : undefined, _tags: multiselect ? selectedValues.map(function (value) { return value.text; }) : undefined, _onTagClose: function (tagIndex) {
                    setSelectedValues(selectedValues.filter(function (_, index) { return index !== tagIndex; }));
                } }),
            open && (core_1.jsx("div", { css: [textFieldStyles.wrapper, styles.dropMenu] },
                core_1.jsx(SelectItems_1.default, { options: options.filter(function (option) {
                        return 0 > selectedValues.findIndex(function (value) { return value.value === option.value; });
                    }), cssItemStyle: [textFieldStyles.field(true), styles.dropItem], onSelect: onSelect }))))));
});
