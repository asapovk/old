"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (props) {
    var style = {
        container: props.style || {
            width: '100%',
            height: '100%'
        },
        svg: {
            width: '100%',
            height: '100%'
        }
    };
    var st0 = { fill: "#D11349" };
    var st1 = { fill: "#004062" };
    if (props.color) {
        st0.fill = props.color;
        st1.fill = props.color;
    }
    return (react_1.default.createElement("div", { style: style.container },
        react_1.default.createElement("svg", { style: style.svg, x: "0px", y: "0px", viewBox: "0 0 253 46", xmlSpace: "preserve" },
            react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
                react_1.default.createElement("path", { d: "M59.1 24.5c0-.3 0-.6-.1-.9v-.1c-.8-5.6-5.9-11.2-10.5-13.3-2.7-1.6-6.1-2.2-9-2.8-2.6-.5-5-.9-6.7-1.9-.2-.1-.4-.2-.5-.3-.2-.1-.4-.2-.5-.3-.4-.3-1.9-1.5-2.8-2.6-.5-.6-.9-1.2-1.2-1.9l-.2-.5v24.8h2.7V7.2c.4.4.9.7 1.5 1.1 1.5.9 4.1 1.4 6.8 1.9 2.9.5 5.8 1.1 8.2 2.2 5.8 2.6 9.4 8.9 9.8 12.3V29H32.4v12.4h.1c.8 0 1.4 0 2.2-.2h.2v-9.8h24.3v-2.5c0-1.4 0-3-.1-4.4", style: st0 }),
                react_1.default.createElement("path", { d: "M74.3 35.1V17.3h12.2v2.9h-9.1v4.3h4c1.6 0 3.4 0 4.8 1.1 1.1.9 1.8 2.4 1.8 4.1 0 1.7-.7 3.1-1.6 3.9-.8.8-2.3 1.4-4.5 1.4h-7.6v.1zm3.1-2.8h4.4c.9 0 1.7-.3 2.2-.8.5-.4.7-1 .7-1.7 0-.9-.4-1.5-.8-1.9-.7-.6-1.7-.7-2.4-.7h-4.1v5.1zM102.5 35l-.9-2.8h-7.1l-.8 2.8h-3.1l5.7-17.7h3.7l5.8 17.7h-3.3zm-4.1-13.7c-.1-.3-.2-1.1-.3-1.6-.1.5-.2 1.2-.3 1.6l-2.4 8.3h5.5l-2.5-8.3z", style: st1, fillRule: "nonzero" }),
                react_1.default.createElement("path", { style: st1, d: "M108.9 17.3h3.1v7.2h7.9v-7.2h3V35h-3v-7.8H112V35h-3.1z" }),
                react_1.default.createElement("path", { d: "M149.9 17.3h6.4c2.4 0 3.8.8 4.5 1.5.7.7 1.6 2 1.6 4.3 0 1.9-.6 3.1-1.6 4.1-.9 1-2.5 1.4-4.4 1.4H153V35h-3.1V17.3zm6.2 8.6c1.1 0 1.8-.4 2.2-.8.4-.4.8-1.1.8-2.2 0-1-.3-1.7-.8-2.1-.7-.8-1.8-.8-2.2-.8H153v5.9h3.1zM178.8 19.5c1.9 2.2 2.3 4.9 2.3 6.7 0 1.8-.3 4.5-2.3 6.7-1.8 2-4 2.5-5.7 2.5-1.7 0-4-.5-5.7-2.5-1.9-2.2-2.3-4.9-2.3-6.7 0-1.8.3-4.5 2.3-6.7 1.8-2 4-2.4 5.7-2.4 1.7-.1 4 .4 5.7 2.4m-9.2 2.1c-.6.8-1.2 2.2-1.2 4.6 0 2.4.7 3.8 1.2 4.6 1 1.4 2.4 1.8 3.5 1.8s2.5-.3 3.5-1.8c.6-.8 1.2-2.2 1.2-4.6 0-2.4-.7-3.8-1.2-4.6-1-1.4-2.4-1.8-3.5-1.8s-2.5.4-3.5 1.8", style: st0, fillRule: "nonzero" }),
                react_1.default.createElement("path", { style: st0, d: "M223.1 17.4v12.2l8.3-12.2h3.1V35h-3.1V22.7L223.1 35h-3V17.4z" }),
                react_1.default.createElement("path", { style: st1, d: "M136.6 17.3l3.8.1-7.8 8.2 8.4 9.5h-3.8l-7.7-8.2v8.2h-3.1V17.4h3.1v7.2z" }),
                react_1.default.createElement("path", { d: "M241.6 35h-3.7l4.7-6.8c-2.4-.3-4.4-2.1-4.4-5.3 0-2.2.9-5.6 5.9-5.6h8.8V35h-3.1v-6.4h-4l-4.2 6.4zm3.9-15c-1.2 0-4.1-.5-4.1 2.8 0 1.3.5 3.1 4.2 3.1h4.3V20h-4.4z", style: st0, fillRule: "nonzero" }),
                react_1.default.createElement("path", { d: "M195.7 29.7c-.2.4-.4.7-.6 1-1 1.4-2.4 1.8-3.5 1.8s-2.5-.3-3.5-1.8c-.6-.8-1.2-2.2-1.2-4.6 0-2.4.7-3.8 1.2-4.6 1-1.4 2.4-1.8 3.5-1.8s2.5.3 3.5 1.8c.3.4.6.9.8 1.6h3.3c-.3-1.3-.9-2.6-1.9-3.7-1.8-2-4-2.4-5.7-2.4-1.7 0-4 .5-5.7 2.4-1.9 2.2-2.3 4.9-2.3 6.7 0 1.8.3 4.5 2.3 6.7 1.8 2 4 2.5 5.7 2.5 1.7 0 4-.5 5.7-2.5.9-1 1.4-2.1 1.7-3.1h-3.3zM213.7 29.7c-.2.4-.4.7-.6 1-1 1.4-2.4 1.8-3.5 1.8s-2.5-.3-3.5-1.8c-.6-.8-1.2-2.2-1.2-4.6 0-2.4.7-3.8 1.2-4.6 1-1.4 2.4-1.8 3.5-1.8s2.5.3 3.5 1.8c.3.4.6.9.8 1.6h3.3c-.3-1.3-.9-2.6-1.9-3.7-1.8-2-4-2.4-5.7-2.4-1.7 0-4 .5-5.7 2.4-1.9 2.2-2.3 4.9-2.3 6.7 0 1.8.3 4.5 2.3 6.7 1.8 2 4 2.5 5.7 2.5 1.7 0 4-.5 5.7-2.5.9-1 1.4-2.1 1.7-3.1h-3.3z", style: st0 }),
                react_1.default.createElement("path", { d: "M58 33.5H36.7V36h14.6c-.5.5-1 .8-1.8 1.4-5.2 3.4-12 5.3-19.2 5.3V27.2h24.5v-2.7H13.6c.1-.8.2-1.5.3-2.2 0-.3.1-.5.2-.7.2-.7.4-1.4.6-1.9l.4.1c.5.2 1 .3 1.5.5 1.4.4 2.7.7 4 .9h.4c1 .2 2.2.4 3.4.5 1 .1 2 .1 3.2.2V19c-.9 0-1.8-.1-2.9-.2-1.1-.1-2.2-.2-3.3-.4-.3 0-.5-.1-.8-.1-1.5-.3-2.8-.6-4-1-.2 0-.3-.1-.5-.1-.1 0-.1 0-.2-.1.2-.3.3-.5.5-.8.1-.1.1-.2.2-.3 1-1.5 2.4-2.9 4-4 2-1.4 4.2-2.4 6.7-2.8H27.6v-3H27.3c-.1 0-.2 0-.2.1-2.2.2-4.3.5-6.5.9-1.5.3-2.8.7-4 1.2-.8.3-1.7.6-2.6 1-.7.3-1.5.7-2.5 1.2-1.5.6-2.7 1.4-3.8 2.3-1.8 1.4-3.3 2.9-4.5 4.6-.9 1.3-1.6 2.6-2.1 4-.5 1.5-.7 2.9-.7 4.4v.1c0 4.7 2.6 9.4 7.3 13 .3.2.6.4.8.6.3.2.5.4.8.6.5.3 1.1.6 1.6 1l.6.3c.7.4 1.4.7 2.1 1l.3.2c.8.3 1.6.6 2.6 1 1.3.4 2.6.8 4 1.1 3.1.7 6.3 1 9.5 1 8 0 15.5-2.1 21-5.8 1.1-.7 2.1-1.5 3-2.3.8-.7 3-3 3.8-3.9l.2-.3zM11.2 14c.1-.1.2-.1.4-.2.7-.4 1.5-.8 2.3-1.2l.2-.1c.7-.3 1.3-.6 2-.9.2-.1.4-.2.6-.2.1 0 .1 0 .2-.1l-.3.3c-1 1-1.9 2.1-2.6 3.2-.1.2-.3.4-.4.6-.1.2-.2.4-.3.5-.6-.3-1.2-.7-1.7-1.2-.2-.2-.4-.4-.5-.6 0-.1 0-.1.1-.1zm-7.3 8.4c.4-1.1.9-2.2 1.7-3.3.6-.8 1.3-1.6 2.2-2.5l.5-.5.4-.4c.7.9 1.6 1.7 2.8 2.3l.1.1c.1.1.3.2.4.3-.2.5-.4 1.1-.6 1.6l-.1.2c-.1.4-.3.9-.4 1.4-.2 1-.3 1.9-.4 2.8H3.4c.1-.7.3-1.4.5-2zm5.6 13c-.2.3-.4.5-.6.8-.4-.3-.8-.7-1.2-1.1-2.5-2.4-4-5-4.4-7.9h7.3c.1 1.5.4 2.9.8 4.3.2.6.4 1.3.6 1.8-.1.1-.2.1-.3.2-.1.1-.2.1-.3.2h-.1c-.6.6-1.3 1.1-1.8 1.7zm7.1 5c-.9-.3-1.7-.7-2.6-1.1l-.4-.2c-.7-.4-1.5-.7-2.1-1.1-.1 0-.2-.1-.2-.2.1-.1.1-.2.2-.3l.2-.2c.3-.3.7-.7 1.4-1.1 0 0 .1-.1.2-.1s.1-.1.1-.1c.1.1.2.3.3.5.1.2.2.3.3.5.7 1.1 1.6 2.2 2.6 3.1.1.2.2.3.4.4-.2 0-.3 0-.4-.1zm10.9 2.2h-.2l-1.5-.3c-1-.2-2-.6-3.3-1.3-.8-.4-1.4-.8-2-1.2-1.6-1.1-2.9-2.5-4-4-.3-.4-.5-.7-.6-1 .1 0 .2-.1.3-.1.1 0 .2-.1.3-.1 1.2-.4 2.5-.7 4-1.1 2.2-.4 4.5-.7 7-.8v9.9zm0-12.8c-2.5.1-4.8.4-7 .8-1.4.3-2.7.6-4 1-.6.2-1.3.4-1.8.7l-.6-1.8-.1-.3c-.2-.9-.4-1.9-.5-2.8h13.9v2.4h.1z", style: st1, fillRule: "nonzero" })))));
});
