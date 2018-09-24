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
var Icon_1 = require("../Icon");
var Themes_1 = __importDefault(require("../Themes"));
var SelectMenuItem_1 = __importDefault(require("./SelectMenuItem"));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.holderRef = null;
        _this.searchRef = null;
        _this.state = {
            selectedValues: [],
            menuVisible: false,
            filteredValues: [],
            isFilterActive: false
        };
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        return _this;
    }
    Select.prototype.componentWillMount = function () {
        var _this = this;
        var defaultValue = Array.isArray(this.props.defaultValue) ? this.props.defaultValue : [this.props.defaultValue];
        defaultValue = defaultValue.filter(function (value) { return _this.props.options && _this.props.options.find(function (option) { return option.value === value; }); });
        this.setState({
            selectedValues: defaultValue
        });
        document.addEventListener('mousedown', this.handleClickOutside);
    };
    Select.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleClickOutside);
    };
    Select.prototype.handleClickOutside = function (event) {
        if (this.holderRef && !this.holderRef.contains(event.target)) {
            this.setState({ menuVisible: false });
        }
    };
    Select.prototype.toggleMenu = function () {
        if (this.props.disabled)
            return;
        this.setState({
            menuVisible: this.state.menuVisible ?
                this.props.dontClose ? true : false
                : true
        });
    };
    Select.prototype.onSelect = function (selectedValue) {
        var selectedValues = this.state.selectedValues;
        var isValueSelect = (selectedValues.find(function (value) { return value == selectedValue; }));
        if (!isValueSelect) {
            if (this.props.multiselect) {
                selectedValues.push(selectedValue);
                this.props.onChange && this.props.onChange(selectedValues);
            }
            else {
                selectedValues = [selectedValue];
                this.props.onChange && this.props.onChange(selectedValue);
            }
            this.setState({
                selectedValues: selectedValues,
                menuVisible: this.state.menuVisible ?
                    this.props.dontClose ? true : false
                    : true
            });
            if (this.searchRef)
                this.searchRef.value = '';
        }
    };
    Select.prototype.onUnselect = function (unselectedValue) {
        var selectedValues = this.state.selectedValues;
        var isValueSelect = (selectedValues.find(function (value) { return value == unselectedValue; }));
        if (isValueSelect) {
            selectedValues = selectedValues.filter(function (item) { return item != unselectedValue; });
            this.props.onChange && this.props.multiselect && this.props.onChange(selectedValues);
            this.setState({ selectedValues: selectedValues });
        }
    };
    Select.prototype.filterOptions = function (searchText) {
        var filteredOptions = this.props.options && searchText ?
            this.props.options.filter(function (option) { return option.text.toUpperCase().includes(searchText.toUpperCase()); }) : [];
        var filteredValues = filteredOptions.map(function (option) { return option.value; });
        this.setState({ filteredValues: filteredValues, menuVisible: true, isFilterActive: searchText ? true : false });
    };
    Select.prototype.searchKeyDown = function (event) {
        if (!event.target.value && this.props.multiselect) {
            if (event.keyCode == 8) {
                var selectedValues = this.state.selectedValues;
                selectedValues.pop();
                this.setState({ selectedValues: selectedValues });
                this.props.onChange && this.props.onChange(selectedValues);
            }
        }
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, search = _a.search, style = _a.style, label = _a.label, clearable = _a.clearable, multiselect = _a.multiselect, onChange = _a.onChange, placeholder = _a.placeholder, disabled = _a.disabled, options = _a.options, theme = _a.theme;
        var _b = this.state, selectedValues = _b.selectedValues, filteredValues = _b.filteredValues, menuVisible = _b.menuVisible, isFilterActive = _b.isFilterActive;
        var selectedItems = [];
        var availableItems = [];
        if (options) {
            selectedItems = selectedValues.map(function (value) {
                return options.find(function (option) { return option.value === value; });
            });
            if (multiselect) {
                availableItems = options.filter(function (option) {
                    return !(isFilterActive && !filteredValues.find(function (value) { return option.value === value; }))
                        && !selectedValues.find(function (value) { return option.value === value; });
                });
            }
            else {
                availableItems = options.filter(function (option) {
                    return !(isFilterActive && !filteredValues.find(function (value) { return option.value === value; }));
                });
            }
        }
        var somethingSelected = (selectedItems.length > 0);
        var MenuItemsTSX = (availableItems.length > 0 ?
            availableItems.map(function (option, index) { return (react_1.default.createElement(SelectMenuItem_1.default, { children: option.text, onClick: function () { return _this.onSelect(option.value); }, key: index, theme: theme.SelectMenuItem, active: !multiselect && selectedValues.find(function (value) { return option.value === value; }) })); }) : react_1.default.createElement("div", { className: 'ui-select-menu-item-nofound' }, isFilterActive ? 'Не найдено' : 'Нет доступных значений'));
        var MultiSelectItemsTSX = (selectedItems.map(function (option) { return (react_1.default.createElement("div", { className: 'ui-select-holder-value-option', key: option.text, style: {
                background: theme.background,
                borderColor: theme.borderColor,
                color: theme.textColor,
            } },
            react_1.default.createElement("div", { className: 'ui-select-holder-value-option-close', style: {
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                }, onClick: function (event) {
                    if (disabled)
                        return;
                    event.stopPropagation();
                    _this.onUnselect(option.value);
                } },
                react_1.default.createElement(Icon_1.Icon, { type: 'close' })),
            react_1.default.createElement("span", null, option.text))); }));
        var SearchTSX = (react_1.default.createElement("input", { disabled: disabled, className: 'ui-select-holder-value-input', placeholder: !somethingSelected ? placeholder : undefined, onChange: function (event) { return _this.filterOptions(event.target.value); }, onKeyDown: this.searchKeyDown.bind(this), ref: function (ref) { return _this.searchRef = ref; }, style: { position: !multiselect ? 'absolute' : "relative", color: theme.textColor, } }));
        var HolderTSX = (somethingSelected ?
            multiselect ? MultiSelectItemsTSX : !isFilterActive && react_1.default.createElement("div", { className: 'ui-select-holder-value-text' }, selectedItems[0].text)
            : (!search && placeholder) && react_1.default.createElement("div", { className: 'ui-select-holder-value-placeholder' }, placeholder));
        var ClearButtonTSX = (react_1.default.createElement("span", { style: { color: theme.labelColor }, className: 'ui-select-holder-clear', onClick: function (event) {
                if (disabled) {
                    return;
                }
                event.stopPropagation();
                _this.setState({ selectedValues: [] });
                onChange && onChange(multiselect ? [] : null);
            } },
            react_1.default.createElement(Icon_1.Icon, { type: 'close' })));
        return (react_1.default.createElement("div", { className: 'ui-select' + (disabled ? ' disabled' : ''), style: __assign({}, style) },
            react_1.default.createElement("div", { className: 'ui-select-label', style: { color: theme.labelColor } }, label),
            react_1.default.createElement("div", { className: 'ui-select-holder' + (menuVisible ? ' active' : ''), onClick: function () { return _this.toggleMenu(); }, ref: function (ref) { return _this.holderRef = ref; }, style: {
                    background: theme.background,
                    borderColor: theme.borderColor,
                } },
                react_1.default.createElement("div", { className: 'ui-select-holder-value', style: { color: theme.textColor } },
                    HolderTSX,
                    search && SearchTSX),
                (clearable && somethingSelected) && ClearButtonTSX,
                react_1.default.createElement("span", { className: 'ui-select-holder-down', style: { color: theme.labelColor } },
                    react_1.default.createElement(Icon_1.Icon, { type: menuVisible ? 'up' : 'down' })),
                react_1.default.createElement("div", { className: 'ui-select-menu' + (menuVisible ? ' visible' : ''), style: { borderColor: theme.borderColor, background: theme.background } }, MenuItemsTSX))));
    };
    return Select;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(Select, __assign({}, props, { theme: {
        background: theme.interface.rgb,
        labelColor: theme.lowlight.rgb,
        textColor: theme.text.rgb,
        borderColor: theme.pale.rgb,
        SelectMenuItem: {
            text: theme.text.rgb,
            background: theme.pale.rgba(0.5)
        }
    } }))); })); });
