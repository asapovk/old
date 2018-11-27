"use strict";
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
var Flexbox_1 = require("../../../Flexbox");
var Icon_1 = require("../../../Icon");
var useStyles_1 = __importDefault(require("../../../hooks/useStyles"));
exports.default = (function (props) {
    var styles = useStyles_1.default();
    var _a = react_1.useState(false), addHover = _a[0], setAddHover = _a[1];
    var st = {
        addButton: {
            position: "relative",
            transition: "all 0.25s",
            width: addHover ? "2.75rem" : "2.25rem",
            height: addHover ? "2.75rem" : "2.25rem",
            transform: "rotate(" + addHover ? "0deg" : "180deg" + ")",
            borderRadius: "2rem",
            background: styles.theme.highlight.hex,
            marginLeft: addHover ? "0.75rem" : "1rem",
            marginRight: addHover ? "2rem" : "2.25rem",
            marginTop: addHover ? "-0.25rem" : "0",
            marginBottom: addHover ? "-0.25rem" : "0",
        },
        addButtonIcon: {
            fill: styles.theme.textOnAccent.hex,
        },
        title: {
            paddingLeft: "2.25rem",
        },
        accountText: {
            paddingLeft: "2.25rem",
            fontWeight: 500,
            color: styles.theme.text.hex,
        },
        selectField: {
            borderColor: styles.theme.pale.hex,
            background: styles.theme.interface.hex,
        },
        dropIcon: {
            height: "2.25rem",
            marginLeft: "0.75rem",
            marginRight: "0.75rem",
        }
    };
    var addMouseIn = function () { return setAddHover(true); };
    var addMouseOut = function () { return setAddHover(false); };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("h3", { style: st.title }, "\u041B\u0438\u0446\u0435\u0432\u043E\u0439 \u0441\u0447\u0435\u0442"),
        react_1.default.createElement(Flexbox_1.Flexbox, { className: "ui-lkcomponent-account-select" },
            react_1.default.createElement(Flexbox_1.Flexbox, { className: "ui-lkcomponent-account-select-field", style: st.selectField, flex: 1 },
                react_1.default.createElement(Flexbox_1.Flexbox, { style: st.accountText, flex: 1, alignItems: "center" }, "1234567890"),
                react_1.default.createElement(Icon_1.Icon, { type: "down", style: st.dropIcon })),
            react_1.default.createElement(Flexbox_1.Flexbox, { style: st.addButton, alignItems: "center", justifyContent: "center", onMouseEnter: addMouseIn, onMouseLeave: addMouseOut },
                react_1.default.createElement(Icon_1.Icon, { type: "add", style: st.addButtonIcon, size: 1.1 })))));
});
