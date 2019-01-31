"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
exports.default = (function (props) {
    var _a = react_1.useState(-1), activeIndex = _a[0], setActiveIndex = _a[1];
    var active = false;
    var browser = useBrowser_1.default();
    var handle = function (index) {
        var el = document.getElementById('test');
        var mask = document.getElementById('mask');
        var minifiedContainer = document.getElementById('minifiedContainer');
        var element = minifiedContainer.childNodes[index - 1];
        var activatedTransform = "translate(" + ((browser.width / 2) - (index * element.offsetWidth) - element.offsetWidth / 2) + "px, 0px) scale(1)";
        var deactivatedTransform = "translate(" + (-el.offsetWidth / 2) + "px, " + (-el.offsetHeight / 2) + "px) scale(0)";
        if (!active) {
            el.style.transition = 'none';
            // el.style.opacity = "0";
            el.style.transform = deactivatedTransform;
            el.style.visibility = 'hidden';
            setTimeout(function () {
                el.style.transition = 'all 5s ease-in-out';
                // el.style.opacity = "1";
                el.style.transform = activatedTransform;
                el.style.visibility = 'visible';
            });
            mask.style.visibility = 'visible';
        }
        else {
            el.style.transition = 'none';
            // el.style.opacity = "1";
            el.style.transform = activatedTransform;
            el.style.visibility = 'visible';
            setTimeout(function () {
                el.style.transition = 'all 5s ease-in-out';
                // el.style.opacity = "0";
                el.style.transform = deactivatedTransform;
                el.style.visibility = 'hidden';
            });
            mask.style.visibility = 'hidden';
        }
        active = !active;
    };
    function onStoryClick(index) {
        setActiveIndex(index);
        handle(index);
    }
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx("div", null,
            core_1.jsx("div", { id: "minifiedContainer" },
                core_1.jsx("div", { style: { width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }, onClick: function () { return handle(1); } }, "change"),
                core_1.jsx("div", { style: { width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }, onClick: function () { return handle(2); } }, "change"),
                core_1.jsx("div", { style: { width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }, onClick: function () { return handle(3); } }, "change"),
                core_1.jsx("div", { style: { width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }, onClick: function () { return handle(4); } }, "change"),
                core_1.jsx("div", { style: { width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }, onClick: function () { return handle(5); } }, "change")),
            core_1.jsx("div", { id: "mask", style: {
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(0,0,0,.5)",
                    visibility: "hidden"
                } },
                core_1.jsx("div", { id: "test", style: {
                        visibility: "hidden",
                        display: "table",
                        height: "100%",
                    }, children: core_1.jsx(react_1.Fragment, null,
                        core_1.jsx("div", { style: { width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }, onClick: function () { return handle(1); } }, "change1"),
                        core_1.jsx("div", { style: { width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }, onClick: function () { return handle(2); } }, "change2"),
                        core_1.jsx("div", { style: { width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }, onClick: function () { return handle(3); } }, "change3"),
                        core_1.jsx("div", { style: { width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }, onClick: function () { return handle(4); } }, "change4"),
                        core_1.jsx("div", { style: { width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }, onClick: function () { return handle(5); } }, "change5")) })))));
});
