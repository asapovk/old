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
        var _a = this.props, date = _a.date, disaplayWeeks = _a.disaplayWeeks, onChange = _a.onChange, theme = _a.theme;
        var Next = function (props) { return (react_1.default.createElement(__1.Flexbox, { flexBasis: 20, alignItems: "center", onClick: function () { return onChange && onChange(date.clone().add(props.previous ? -1 : 1, "month")); }, children: react_1.default.createElement(__1.Icon, { type: props.previous ? "left" : "right" }) })); };
        var Back = function () { return react_1.default.createElement(Next, { previous: true }); };
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(__1.Flexbox, { className: "ui-datepicker-monthgrid-title", style: theme.style },
                react_1.default.createElement(Back, null),
                react_1.default.createElement(__1.Flexbox, { column: true, flex: 1, alignItems: "center", justifyContent: "center" },
                    react_1.default.createElement("div", { className: "ui-datepicker-monthgrid-title-month" }, date.format("MMMM")),
                    react_1.default.createElement("div", { className: "ui-datepicker-monthgrid-title-year" }, date.format("YYYY"))),
                react_1.default.createElement(Next, null)),
            disaplayWeeks && (react_1.default.createElement(__1.Flexbox, { className: "ui-datepicker-monthgrid-title-weeks" }, moment_1.default.weekdaysShort(true).map(function (day) { return (react_1.default.createElement(__1.Flexbox, { key: day, style: theme.weekDayStyle, className: "ui-datepicker-monthgrid-title-weeks-day", justifyContent: "center", alignItems: "center", children: day.slice(0, 2) })); })))));
    };
    return MonthGridTitle;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(__1.Theme, null, function (theme) { return (react_1.default.createElement(MonthGridTitle, __assign({}, props, { theme: {
        style: {
            color: theme.lowlight.hex,
            background: theme.interface.hex,
            borderColor: theme.interface.hex,
        },
        weekDayStyle: {
            color: theme.lowlight.hex,
            background: theme.interface.hex,
            borderColor: theme.interface.hex,
        }
    } }))); })); });
