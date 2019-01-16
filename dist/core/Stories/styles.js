"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function (active, position, storyIndex) {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    return {
        container: core_1.css({
            overflow: "scroll",
            padding: "0 1.25rem"
        }),
        minifiedStory: core_1.css({
            boxSizing: "border-box",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            borderRadius: "0.5rem",
            borderWidth: "1px",
            borderStyle: "solid",
            boxShadow: "0 1rem 1rem 0 rgba(0,0,0,0.14)",
            display: "inline-block",
            width: "7.5rem",
            minWidth: "7.5rem",
            height: "10rem",
            marginRight: "1rem",
            cursor: "pointer",
            backgroundColor: "red"
        }),
        modal: core_1.css({
            zIndex: 800,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: active > -1 ? 1 : 0,
            visibility: active > -1 ? "visible" : "hidden",
            overflowY: "auto",
            padding: "1.25rem",
            margin: "0 -23px 0 -23px",
            transition: "all .15s ease-in-out",
            display: "table",
            userSelect: "none",
            "&::before": {
                content: "''",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: active > -1 ? 1 : 0,
                backgroundColor: "rgba(0, 0, 0, .5)"
            }
        }),
        fullStoriesLayer: core_1.css({
            display: "table-cell",
            verticalAlign: "middle",
            width: "100%",
            height: "100%"
        }),
        fullStoriesList: core_1.css({
            position: "relative",
            maxHeight: "1020px",
            padding: "0.5rem 0",
            width: "100%",
            height: "100%",
            whiteSpace: "nowrap",
            transition: "all .15s ease-in-out",
            pointerEvents: "none",
            willChange: "transform",
            opacity: active > -1 ? 1 : 0,
            transform: "translateX(" + position + "px) translateZ(0)",
        }),
        fullStoryWrapper: core_1.css({
            position: "relative",
            paddingTop: "178%",
            width: "100%",
            borderRadius: "0.5rem",
            backgroundClip: "content-box"
        }),
        fullStory: core_1.css({
            position: "relative",
            boxSizing: "border-box",
            transition: "transform .25s ease",
            transform: "translateY(80px) translateZ(0)",
            minWidth: "320px",
            maxWidth: "540px",
            width: "56.3vh",
            height: "100%",
            display: "inline-table",
            borderRadius: "0.5rem",
            borderStyle: "solid",
            borderWidth: "1px",
            marginLeft: "40px",
            cursor: "pointer",
            pointerEvents: "auto"
        }),
    };
});
