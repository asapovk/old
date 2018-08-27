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
var __1 = require("../");
var util_1 = require("util");
var FinderFilter = /** @class */ (function (_super) {
    __extends(FinderFilter, _super);
    function FinderFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinderFilter.prototype.onChange = function (event) {
        if (util_1.isNull(event)) {
            this.props.onChange("");
            this.input.value = "";
            return;
        }
        this.props.onChange(event.target.value);
    };
    FinderFilter.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, clearable = _a.clearable;
        return (react_1.default.createElement("div", { className: "ui-finder2-filter" },
            react_1.default.createElement(__1.Flexbox, { alignItems: "center", className: "ui-finder2-filter-input" },
                react_1.default.createElement(__1.Icon, { className: "ui-finder2-filter-search-icon", type: "search" }),
                react_1.default.createElement("input", { ref: function (ref) { return _this.input = ref; }, placeholder: placeholder, onChange: this.onChange.bind(this) }),
                clearable && (react_1.default.createElement(__1.Flexbox, { className: "ui-finder2-filter-clear", alignItems: "center", justifyContent: "center", onClick: function () { return _this.onChange(null); } },
                    react_1.default.createElement(__1.Icon, { type: 'close' }))))));
    };
    return FinderFilter;
}(react_1.default.Component));
exports.default = FinderFilter;
