"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../");
var useStyles_1 = __importDefault(require("../../hooks/useStyles"));
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
exports.default = (function (props) {
    var browser = useBrowser_1.default();
    var styles = useStyles_1.default();
    var st = {
        root: {
            height: browser.height,
            overflow: "hidden"
        },
        main: {
            overflow: "hidden"
        },
        side: {
            overflow: "scroll",
            background: styles.theme.background.hex,
            maxWidth: browser.resolutionMobileMinimum,
            borderRight: "1px solid",
            borderColor: styles.theme.pale.hex,
        },
        sideBottom: {
            overflow: "scroll",
        },
        mainRight: {
            overflow: "scroll",
            minWidth: browser.resolutionMobileMinimum,
        },
        mainTop: {
            minWidth: browser.resolutionMobileMinimum,
            overflow: "scroll",
            borderBottomLeftRadius: "100% 40px",
            borderBottomRightRadius: "100% 40px"
        },
    };
    var needDisplaySideBar = Boolean(props.components.side);
    var needDisplayMain = Boolean(props.components.mainTop || props.components.main);
    if (!props.displaySideBar && browser.isMobile) {
        needDisplaySideBar = false;
    }
    if (props.displaySideBar && browser.isMobile) {
        needDisplaySideBar = true;
        needDisplayMain = false;
        delete st.side.maxWidth;
    }
    return (react_1.default.createElement(__1.Flexbox, { style: st.root, flexDirection: "column" },
        props.components.header &&
            props.components.header,
        react_1.default.createElement(__1.Flexbox, { style: st.main, flex: 1 },
            needDisplaySideBar && (react_1.default.createElement(__1.Flexbox, { flex: 1, flexDirection: "column", style: st.side },
                props.components.mainTop && (react_1.default.createElement("div", { style: {
                        position: "absolute",
                        left: 0, right: 0, top: 0,
                        height: browser.resolutionMobileMinimum - 50,
                        background: "linear-gradient(0deg, " + styles.theme.background.hex + ", " + styles.theme.background2.hex + " 20%)"
                    } })),
                react_1.default.createElement(__1.Flexbox, { flex: 1, flexDirection: "column", justifyContent: "space-between" },
                    react_1.default.createElement("div", { children: props.components.side }),
                    props.components.sideBottom && (react_1.default.createElement(__1.Flexbox, { flexShrink: 0, flexDirection: "column", style: st.sideBottom, children: props.components.sideBottom }))))),
            needDisplayMain && (react_1.default.createElement(__1.Flexbox, { flex: 1, flexDirection: "column", style: st.mainRight },
                props.components.mainTop && (react_1.default.createElement(__1.Flexbox, { flexShrink: 0, style: st.mainTop, children: props.components.mainTop })),
                props.components.main)))));
});
