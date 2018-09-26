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
var __1 = require("../../");
var moment_1 = __importDefault(require("moment"));
var MonthGridDay = /** @class */ (function (_super) {
    __extends(MonthGridDay, _super);
    function MonthGridDay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthGridDay.prototype.render = function () {
        var _a = this.props, active = _a.active, day = _a.day, onClick = _a.onClick, minValue = _a.minValue, maxValue = _a.maxValue;
        var style = this.props.theme.default;
        var disabled = false;
        if (day.format("YYYYMMDD") === active.format("YYYYMMDD")) {
            style = __assign({}, style, this.props.theme.active);
        }
        if (day.format("YYYYMMDD") === moment_1.default().format("YYYYMMDD")) {
            style = __assign({}, style, this.props.theme.current);
        }
        if (day.format("MM") !== moment_1.default().format("MM")) {
            style = __assign({}, style, this.props.theme.anotherMonth);
        }
        if (minValue && minValue > day) {
            disabled = true;
            style = __assign({}, style, this.props.theme.disabledDay);
        }
        if (maxValue && maxValue < day) {
            disabled = true;
            style = __assign({}, style, this.props.theme.disabledDay);
        }
        return (react_1.default.createElement(__1.Flexbox, { justifyContent: "center", alignItems: "center", className: "ui-datepicker-monthgrid-day", onClick: function () {
                if (!disabled)
                    onClick && onClick();
            }, children: day.date(), style: style }));
    };
    return MonthGridDay;
}(react_1.default.Component));
exports.default = (function (props) { return (react_1.default.createElement(__1.Theme, null, function (theme) { return (react_1.default.createElement(MonthGridDay, __assign({}, props, { theme: {
        default: {
            fontSize: 14,
            borderRadius: theme.corner,
            background: theme.interface.hex,
            borderColor: theme.background.hex,
            color: theme.text.hex,
        },
        active: {
            borderColor: theme.highlight.hex,
        },
        current: {
            background: theme.highlight.hex,
            color: "#ffffff"
        },
        anotherMonth: {
            background: theme.interface.rgba(0.3),
        },
        disabledDay: {
            opacity: 0.3
        }
    } }))); })); });
