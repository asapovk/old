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
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        _this.state = {
            options: [],
            chosen: 0,
            menuVisible: false
        };
        return _this;
    }
    Select.prototype.componentWillMount = function () {
        var _this = this;
        var defaultIndex = this.props.options ? this.props.options.findIndex(function (option) { return option.value === _this.props.defaultValue; }) : -1;
        this.setState({ chosen: defaultIndex, options: this.props.options });
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
        if (this.state.menuVisible) {
            this.setState({ menuVisible: false });
        }
        else {
            this.setState({ menuVisible: true });
        }
    };
    Select.prototype.filterOptions = function (value) {
        var filteredOptions = this.props.options ? this.props.options.filter(function (option) { return option.text.includes(value); }) : [];
        this.setState({ options: filteredOptions, menuVisible: filteredOptions.length > 0 ? true : false });
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, search = _a.search, style = _a.style, label = _a.label, onChange = _a.onChange;
        var _b = this.state, options = _b.options, chosen = _b.chosen, menuVisible = _b.menuVisible;
        var ListJSX = (options && options.map(function (option, index) { return (react_1.default.createElement("div", { className: 'ui-select-menu-item', children: option.text, onClick: function (event) {
                _this.setState({ chosen: index });
                _this.toggleMenu();
                onChange && onChange(options[index].value);
                if (_this.inputRef) {
                    _this.inputRef.value = options[index].text;
                }
            }, key: option.key ? option.key : option.text })); }));
        var SearchJSX = (react_1.default.createElement("input", { className: 'ui-select-holder-input', defaultValue: chosen != -1 ? options[chosen].text : '', onChange: function (event) { return _this.filterOptions(event.target.value); }, ref: function (ref) { return _this.inputRef = ref; } }));
        return (react_1.default.createElement("div", { className: 'ui-select', style: style },
            react_1.default.createElement("div", { className: 'ui-select-label' }, label),
            react_1.default.createElement("div", { className: 'ui-select-holder' + (menuVisible ? ' active' : ''), onClick: function () { return _this.toggleMenu(); }, ref: function (ref) { return _this.holderRef = ref; } },
                search ? SearchJSX : chosen != -1 ? options[chosen].text : '',
                react_1.default.createElement("div", { className: 'ui-select-menu' + (menuVisible ? ' visible' : '') }, ListJSX))));
    };
    Select.defaultProps = {
        placeholder: 'Выберите значение'
    };
    return Select;
}(react_1.default.Component));
exports.default = Select;
