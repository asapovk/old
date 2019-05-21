"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
var Slider = function (props) {
    var min = props.min, max = props.max, value = props.value, onChange = props.onChange, defaultValue = props.defaultValue, style = props.style, className = props.className;
    var styles = styles_1.default();
    var handleRef = react_1.useRef(null);
    var trackRef = react_1.useRef(null);
    var containerRef = react_1.useRef(null);
    var handlePosition = value || defaultValue
        ? getPercentByValue(min, max, value || defaultValue)
        : 0;
    function handleChange(percent) {
        if (onChange) {
            onChange(getValueFromRange(min, max, percent));
        }
        if (!value && handleRef.current && trackRef.current) {
            handleRef.current.style.left = percent.toString() + '%';
            trackRef.current.style.width = percent.toString() + '%';
        }
    }
    function handleMouseMove(e) {
        e.stopPropagation();
        if (containerRef.current) {
            var startX = containerRef.current.getBoundingClientRect().left;
            var endX = containerRef.current.getBoundingClientRect().right;
            var percent = getPercentByValue(startX, endX, e.pageX);
            handleChange(percent);
        }
    }
    function handleMouseDown(e) {
        e.stopPropagation();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    function handleMouseUp(e) {
        e.stopPropagation();
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }
    return (core_1.jsx("div", { css: styles.conatiner, className: className, ref: containerRef, onClick: handleMouseMove, style: style },
        core_1.jsx("div", { css: styles.rail }),
        core_1.jsx("div", { css: styles.track, ref: trackRef, style: { width: handlePosition.toString() + '%' } }),
        core_1.jsx("div", { onMouseDown: handleMouseDown, ref: handleRef, css: styles.handle, style: { left: handlePosition.toString() + '%' } })));
};
function getPercentByValue(min, max, value) {
    var percent = (value - min) / (max - min) * 100;
    if (percent <= 0)
        return 0;
    if (percent >= 100)
        return 100;
    return percent;
}
function getValueFromRange(min, max, percent) {
    return Math.floor(min + (max - min) / 100 * percent);
}
Slider.defaultProps = {
    min: 0,
    max: 100
};
exports.default = Slider;
