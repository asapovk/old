"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
exports.default = (function (props) {
    var active = false;
    var handle = function (index) {
        var el = document.getElementById('test');
        if (!active) {
            el.style.transition = 'none';
            el.style.opacity = "0";
            el.style.transform = "translate(" + (-550 + index * 100) + "px, -550px) scale(0.1)";
            el.style.visibility = 'hidden';
            setTimeout(function () {
                el.style.transition = 'all 0.5s ease-in-out';
                el.style.opacity = "1";
                el.style.transform = 'translate(0px, 0px) scale(1)';
                el.style.visibility = 'visible';
            });
        }
        else {
            el.style.transition = 'none';
            el.style.opacity = "1";
            el.style.transform = 'translate(0px, 0px) scale(1)';
            el.style.visibility = 'visible';
            setTimeout(function () {
                el.style.transition = 'all 0.5s ease-in-out';
                el.style.opacity = "0";
                el.style.transform = "translate(" + (-550 + index * 100) + "px, -550px) scale(0.1)";
                el.style.visibility = 'hidden';
            });
        }
        active = !active;
    };
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx("div", null,
            core_1.jsx("div", null,
                core_1.jsx("button", { style: { width: 100, height: 100 }, onClick: function () { return handle(1); } }, "change"),
                core_1.jsx("button", { style: { width: 100, height: 100 }, onClick: function () { return handle(2); } }, "change"),
                core_1.jsx("button", { style: { width: 100, height: 100 }, onClick: function () { return handle(3); } }, "change"),
                core_1.jsx("button", { style: { width: 100, height: 100 }, onClick: function () { return handle(4); } }, "change"),
                core_1.jsx("button", { style: { width: 100, height: 100 }, onClick: function () { return handle(5); } }, "change")),
            core_1.jsx("div", { id: "test", style: {
                    background: "red",
                    width: 1000,
                    height: 1000,
                    visibility: "hidden",
                } }))));
});
