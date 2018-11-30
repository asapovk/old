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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../");
var FinderFilter = /** @class */ (function (_super) {
    __extends(FinderFilter, _super);
    function FinderFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinderFilter.prototype.onChange = function (event) {
        if (!event) {
            this.props.onChange("", this.props.level);
            this.input.value = "";
            return;
        }
        this.props.onChange(event.target.value, this.props.level);
    };
    FinderFilter.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, clearable = _a.clearable;
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement("div", { className: "ui-finder-filter", style: {
                borderColor: styles.finder.filter.borderColor,
            } },
            react_1.default.createElement(__1.Flexbox, { alignItems: "center", className: "ui-finder-filter-input", style: {
                    background: styles.finder.filter.inputBackground,
                    borderColor: styles.finder.filter.borderColor,
                    color: styles.finder.filter.color
                } },
                react_1.default.createElement(__1.Icon, { className: "ui-finder-filter-search-icon", type: "search" }),
                react_1.default.createElement("input", { ref: function (ref) { return _this.input = ref; }, placeholder: placeholder, onChange: _this.onChange.bind(_this) }),
                clearable && (react_1.default.createElement(__1.Flexbox, { className: "ui-finder-filter-clear", alignItems: "center", justifyContent: "center", onClick: function () { return _this.onChange(null); } },
                    react_1.default.createElement(__1.Icon, { type: 'close' })))))); }));
    };
    return FinderFilter;
}(react_1.default.Component));
exports.default = FinderFilter;
