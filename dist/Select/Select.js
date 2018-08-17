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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = require("../Icon");
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        _this.state = {
            options: [],
            selected: undefined,
            menuVisible: false
        };
        return _this;
    }
    Select.prototype.componentWillMount = function () {
        var _this = this;
        var selected = this.props.options && this.props.defaultValue && this.props.options.find(function (option) { return option.value == _this.props.defaultValue; });
        this.setState({
            selected: selected && [selected],
            options: this.props.options
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
        this.setState({
            menuVisible: this.state.menuVisible ? false : true
        });
    };
    Select.prototype.onSelect = function (option) {
        var selected = this.state.selected ? this.state.selected : [];
        var isAlreadySelect = (selected.find(function (select) { return select == option; }));
        if (!isAlreadySelect) {
            this.props.multiselect ? selected.push(option) : selected = [option];
            this.setState({
                selected: selected,
                menuVisible: this.state.menuVisible ? false : true
            });
        }
    };
    Select.prototype.onUnselect = function (option) {
        this.setState({ selected: this.state.selected && this.state.selected.filter(function (select) { return select != option; }) });
    };
    Select.prototype.filterOptions = function (value) {
        var filteredOptions = this.props.options ? this.props.options.filter(function (option) { return option.text.includes(value); }) : [];
        this.setState({ options: filteredOptions, menuVisible: filteredOptions.length > 0 ? true : false });
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, search = _a.search, style = _a.style, label = _a.label, clearable = _a.clearable, multiselect = _a.multiselect;
        var _b = this.state, options = _b.options, selected = _b.selected, menuVisible = _b.menuVisible;
        var unselected = selected ? options && options.filter(function (option) { return selected.findIndex(function (select) { return select == option; }) < 0; }) : options;
        var MultiSelectTSX = (multiselect && selected && selected.map(function (option) { return (react_1.default.createElement("div", { onClick: function (event) {
                event.stopPropagation();
                _this.onUnselect(option);
            } },
            react_1.default.createElement(Icon_1.Icon, { type: 'close' }),
            option.text)); }));
        var SearchBarTSX = (react_1.default.createElement("input", { className: 'ui-select-holder-value-input', defaultValue: multiselect ? '' : selected && selected[0].text, onChange: function (event) { return _this.filterOptions(event.target.value); }, ref: function (ref) { return _this.inputRef = ref; } }));
        var ClearButtonTSX = (react_1.default.createElement("span", { className: 'ui-select-holder-clear', onClick: function (event) {
                event.stopPropagation();
                _this.setState({ selected: undefined });
            } },
            react_1.default.createElement(Icon_1.Icon, { type: 'close' })));
        var StateIconTSX = (react_1.default.createElement("span", { className: 'ui-select-holder-down' },
            react_1.default.createElement(Icon_1.Icon, { type: menuVisible ? 'up' : 'down' })));
        var MenuTSX = (unselected && unselected.map(function (option, index) { return (react_1.default.createElement("div", { className: 'ui-select-menu-item', children: option.text, onClick: function () { return _this.onSelect(unselected[index]); }, key: option.key ? option.key : option.text })); }));
        return (react_1.default.createElement("div", { className: 'ui-select', style: style },
            react_1.default.createElement("div", { className: 'ui-select-label' }, label),
            react_1.default.createElement("div", { className: 'ui-select-holder' + (menuVisible ? ' active' : ''), onClick: function () { return _this.toggleMenu(); }, ref: function (ref) { return _this.holderRef = ref; } },
                react_1.default.createElement("div", { className: 'ui-select-holder-value' },
                    MultiSelectTSX,
                    search ? SearchBarTSX : !multiselect && selected && selected[0].text),
                clearable && ClearButtonTSX,
                " ",
                StateIconTSX,
                react_1.default.createElement("div", { className: 'ui-select-menu' + (menuVisible ? ' visible' : '') }, MenuTSX))));
    };
    return Select;
}(react_1.default.Component));
exports.default = Select;
