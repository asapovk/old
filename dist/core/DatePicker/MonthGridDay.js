"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MonthGridDay.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../../");
var moment_1 = __importDefault(require("moment"));
var Styles_1 = __importDefault(require("./Styles"));
exports.default = (function (props) {
    var active = props.active, day = props.day, onClick = props.onClick, minValue = props.minValue, maxValue = props.maxValue;
    var isDisabled = (minValue && minValue > day) || (maxValue && maxValue < day) || false;
    var isActive = (day.format("YYYYMMDD") === active.format("YYYYMMDD"));
    var isCurrent = (day.format("YYYYMMDD") === moment_1.default().format("YYYYMMDD"));
    var isCurrentMonth = (day.format("MM") === moment_1.default().format("MM"));
    var styles = Styles_1.default().day(isActive, isCurrent, isDisabled, isCurrentMonth);
    return (core_1.jsx(__1.Flexbox, { justifyContent: "center", alignItems: "center", onClick: function () {
            if (!isDisabled && onClick) {
                onClick();
            }
        }, css: styles, children: day.date() }));
});
