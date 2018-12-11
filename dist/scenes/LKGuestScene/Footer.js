"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (props) {
    var size = useBrowser_1.default();
    var styles = useTheme_1.default();
    var st = {
        root: {
            background: "#eee"
        }
    };
    if (size.height <= 600 || !props.footerActions) {
        return null;
    }
    return (react_1.default.createElement(__1.Flexbox, { flex: 1, style: st.root }, props.footerActions.map(function (action, index) {
        return react_1.default.createElement(__1.Flexbox, { onClick: action.onAction, flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" },
            react_1.default.createElement(__1.Icon, { type: action.icon, size: 3, style: { marginBottom: "1rem" } }),
            react_1.default.createElement("div", { style: { color: styles.theme.highlight.hex } },
                action.title,
                " ",
                react_1.default.createElement(__1.Icon, { type: "right" })));
    })));
});
