"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var useStyles_1 = __importDefault(require("./useStyles"));
var react_1 = require("react");
exports.default = (function (props) {
    var horizontal = props.horizontal, scrollViewId = props.scrollViewId;
    var manualScrollControl = false;
    var mouseOverScroll = false;
    var scrollThumb = react_1.createRef();
    var scrollBar = react_1.createRef();
    var _a = react_1.useState({
        offset: 0,
        size: 0,
    }), scrollThumbState = _a[0], setScrollThumbState = _a[1];
    var _b = react_1.useState(true), hidden = _b[0], setHidden = _b[1];
    var styles = useStyles_1.default(horizontal, false, hidden);
    var timer;
    function onScroll(e) {
        var scrollView = getScrollView();
        if (!scrollView) {
            return;
        }
        var scrollTop = scrollView.scrollTop, scrollLeft = scrollView.scrollLeft, scrollHeight = scrollView.scrollHeight, scrollWidth = scrollView.scrollWidth, offsetHeight = scrollView.offsetHeight, offsetWidth = scrollView.offsetWidth;
        var size, offset = 0;
        if (props.horizontal) {
            size = Math.pow(offsetWidth, 2) / scrollWidth;
            offset = (scrollLeft * size / scrollWidth) * (scrollWidth / offsetWidth);
        }
        else {
            size = Math.pow(offsetHeight, 2) / scrollHeight;
            offset = (scrollTop * size / scrollHeight) * (scrollHeight / offsetHeight);
        }
        setScrollThumbState({ offset: offset, size: size });
        /**
         * Если null
         * значит первый вызов функции
         * из useEffect, не выставляем setHidden
         */
        if (e !== null) {
            setHidden(false);
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                if (!mouseOverScroll) {
                    setHidden(true);
                }
            }, 2000);
        }
    }
    function enableManualScroll() {
        manualScrollControl = true;
    }
    function disableManualScroll() {
        manualScrollControl = false;
    }
    function mouseEnterScrollBar() {
        mouseOverScroll = true;
    }
    function mouseLeaveScrollBar() {
        mouseOverScroll = false;
        onScroll();
    }
    function onMouseMove(e) {
        var scrollView = getScrollView();
        if (!manualScrollControl || !scrollView) {
            return;
        }
        if (props.horizontal) {
            scrollView.scrollLeft += e.movementX * (scrollView.scrollWidth / scrollView.offsetWidth);
        }
        else {
            scrollView.scrollTop += e.movementY * (scrollView.scrollHeight / scrollView.offsetHeight);
        }
        onScroll();
    }
    function getScrollView() {
        return document.getElementById(scrollViewId) || null;
    }
    react_1.useEffect(function () {
        var scrollView = getScrollView();
        scrollView && scrollView.addEventListener("scroll", onScroll);
        scrollThumb.current && scrollThumb.current.addEventListener("mousedown", enableManualScroll);
        scrollBar.current && scrollBar.current.addEventListener("mouseenter", mouseEnterScrollBar);
        scrollBar.current && scrollBar.current.addEventListener("mouseleave", mouseLeaveScrollBar);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", disableManualScroll);
        onScroll(null);
        return function () {
            scrollView = getScrollView();
            scrollView && scrollView.removeEventListener("scroll", onScroll);
            scrollThumb.current && scrollThumb.current.removeEventListener("mousedown", enableManualScroll);
            scrollBar.current && scrollBar.current.removeEventListener("mouseenter", mouseEnterScrollBar);
            scrollBar.current && scrollBar.current.removeEventListener("mouseleave", mouseLeaveScrollBar);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", disableManualScroll);
        };
    }, [scrollViewId]);
    return (core_1.jsx("div", { css: styles.scrollbar, ref: scrollBar },
        core_1.jsx("div", { css: styles.thumb, style: {
                height: props.horizontal ? undefined : scrollThumbState.size,
                width: !props.horizontal ? undefined : scrollThumbState.size,
                top: props.horizontal ? undefined : scrollThumbState.offset,
                left: !props.horizontal ? undefined : scrollThumbState.offset,
            }, ref: scrollThumb })));
});
