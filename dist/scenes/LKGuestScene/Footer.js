"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var useBrowseWidth_1 = __importDefault(require("../../hooks/useBrowseWidth"));
exports.default = (function (props) {
    var size = useBrowseWidth_1.default();
    var st = {
        root: {
            background: "#eee"
        }
    };
    if (size.height < 600) {
        return null;
    }
    return (react_1.default.createElement(__1.Flexbox, { flex: 1, style: st.root },
        react_1.default.createElement(__1.Flexbox, { flex: 1 }, "left"),
        react_1.default.createElement(__1.Flexbox, { flex: 1 }, "right")));
});
