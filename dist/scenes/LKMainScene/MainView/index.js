"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var useBrowseWidth_1 = __importDefault(require("../../../hooks/useBrowseWidth"));
var SideMenu_1 = __importDefault(require("./SideMenu"));
var __2 = require("..");
exports.default = (function () {
    var windowSize = useBrowseWidth_1.default();
    var ctx = __2.useMainContext();
    var currentSubMenuItem = ctx.currentSubMenuItem;
    var st = {
        menu: {
            width: windowSize.width > 640 ? '320px' : '100%',
            // '-webkit-box-sizing': 'border-box',
            // '-moz-box-sizing': 'border-box',
            boxShadow: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.5), 6px 0 6px 0 rgba(0, 0, 0, 0.14)',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            height: '100%'
        }
    };
    return (react_1.default.createElement(__1.Flexbox, { style: { height: '100%' } },
        react_1.default.createElement("div", { style: st.menu },
            react_1.default.createElement(SideMenu_1.default, null)),
        windowSize.width > 640 && (react_1.default.createElement("div", null, currentSubMenuItem.component))));
});
