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
var useStyles_1 = __importDefault(require("../../../hooks/useStyles"));
var Button_1 = require("../../../Button");
/**
 * @deprecated slice 1 dec 2018
 */
exports.default = (function (props) {
    var styles = useStyles_1.default();
    var st = {
        root: {
            background: styles.theme.background2.hex,
        },
        title: {
            borderColor: styles.theme.pale.hex
        }
    };
    return (react_1.default.createElement(Flexbox_1.Flexbox, { style: st.root, flex: 1, flexDirection: "column", className: "ui-lkcomponent-main-scroll-view" },
        react_1.default.createElement(Flexbox_1.Flexbox, { className: "ui-lkcomponent-main-scroll-view-title", alignItems: "flex-end", justifyContent: "space-between", style: st.title, children: (react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement("h1", null, "\u041C\u043E\u0438 \u0443\u0441\u043B\u0443\u0433\u0438"),
                react_1.default.createElement(Button_1.Button, { decoration: "none", label: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435" }))) })));
});
