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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var Forms_1 = __importDefault(require("./Forms"));
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
var useStyles_1 = __importDefault(require("../../hooks/useStyles"));
exports.default = (function (props) {
    var size = useBrowser_1.default();
    var styles = useStyles_1.default();
    var st = {
        root: {
            background: styles.scenes.lkguest.main.backgroundColor,
        },
        title: {
            color: styles.scenes.lkguest.main.titleColor,
            marginBottom: 20
        }
    };
    if (size.height >= 600 && size.width >= 600) {
        st.root.borderBottomLeftRadius = "100% 40px";
        st.root.borderBottomRightRadius = "100% 40px";
    }
    return (react_1.default.createElement(__1.Flexbox, { flex: 2, style: st.root },
        react_1.default.createElement(__1.Flexbox, { flexDirection: "column", flex: 1, justifyContent: "center" },
            react_1.default.createElement(__1.Flexbox, { flexDirection: "column", style: { width: 250 }, alignSelf: "center" },
                props.components && props.components.logo,
                props.title !== undefined && react_1.default.createElement("h2", { style: st.title }, props.title),
                react_1.default.createElement(Forms_1.default, __assign({}, props)))),
        size.width >= 500 &&
            props.components !== undefined &&
            props.components.right !== undefined &&
            (react_1.default.createElement(__1.Flexbox, { flex: 1 }, props.components.right))));
});
