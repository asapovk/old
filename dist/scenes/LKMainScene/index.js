"use strict";
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
var useStyles_1 = __importDefault(require("../../hooks/useStyles"));
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
exports.default = (function (props) {
    var browser = useBrowser_1.default();
    var styles = useStyles_1.default();
    var st = styles.scenes.lkmain;
    var needDisplaySideBar = Boolean(props.components.side);
    var needDisplayMain = Boolean(props.components.mainTop || props.components.main);
    if (!props.displaySideBar && browser.isMobile) {
        needDisplaySideBar = false;
    }
    if (props.displaySideBar && browser.isMobile) {
        needDisplaySideBar = true;
        needDisplayMain = false;
    }
    return (react_1.default.createElement(__1.Flexbox, { style: __assign({}, st.root, { height: browser.height }), flexDirection: "column" },
        props.components.header &&
            props.components.header,
        react_1.default.createElement(__1.Flexbox, { style: st.main, flex: 1 },
            needDisplaySideBar && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "ui-scenes-lkmain-side", children: (react_1.default.createElement(react_1.Fragment, null,
                        react_1.default.createElement(__1.Flexbox, { flex: 1, flexDirection: "column", justifyContent: "space-between", children: (react_1.default.createElement(react_1.Fragment, null,
                                react_1.default.createElement("div", { children: props.components.side }),
                                props.components.sideBottom && (react_1.default.createElement("div", { style: st.sideBottom, children: props.components.sideBottom })))) }))) }),
                react_1.default.createElement("div", { style: st.sideBackground, className: "ui-scenes-lkmain-side-background" }))),
            needDisplayMain && (react_1.default.createElement("div", { style: st.mainRight, className: "ui-scenes-lkmain-main", children: (react_1.default.createElement(react_1.Fragment, null,
                    props.components.mainTop && (react_1.default.createElement("div", { style: st.mainTop, className: "ui-scenes-lkmain-main-top", children: props.components.mainTop })),
                    props.components.main)) })))));
});
