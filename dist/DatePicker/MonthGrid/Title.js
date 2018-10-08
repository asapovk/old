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
var __1 = require("../../");
var moment_1 = __importDefault(require("moment"));
var MonthGridTitle = /** @class */ (function (_super) {
    __extends(MonthGridTitle, _super);
    function MonthGridTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthGridTitle.prototype.render = function () {
        var _a = this.props, date = _a.date, disaplayWeeks = _a.disaplayWeeks, onChange = _a.onChange;
        var Next = function (props) { return (react_1.default.createElement(__1.Flexbox, { flexBasis: 20, alignItems: "center", onClick: function () { return onChange && onChange(date.clone().add(props.previous ? -1 : 1, "month")); }, children: react_1.default.createElement(__1.Icon, { type: props.previous ? "left" : "right" }) })); };
        var Back = function () { return react_1.default.createElement(Next, { previous: true }); };
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(__1.Flexbox, { className: "ui-datepicker-monthgrid-title", style: styles.datePicker.title.style },
                react_1.default.createElement(Back, null),
                react_1.default.createElement(__1.Flexbox, { column: true, flex: 1, alignItems: "center", justifyContent: "center" },
                    react_1.default.createElement("div", { className: "ui-datepicker-monthgrid-title-month" }, date.format("MMMM")),
                    react_1.default.createElement("div", { className: "ui-datepicker-monthgrid-title-year" }, date.format("YYYY"))),
                react_1.default.createElement(Next, null)),
            disaplayWeeks && (react_1.default.createElement(__1.Flexbox, { className: "ui-datepicker-monthgrid-title-weeks" }, moment_1.default.weekdaysShort(true).map(function (day) { return (react_1.default.createElement(__1.Flexbox, { key: day, style: styles.datePicker.title.weekDayStyle, className: "ui-datepicker-monthgrid-title-weeks-day", justifyContent: "center", alignItems: "center", children: day.slice(0, 2) })); }))))); }));
    };
    return MonthGridTitle;
}(react_1.default.Component));
exports.default = MonthGridTitle;
