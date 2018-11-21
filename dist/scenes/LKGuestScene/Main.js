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
var Logo_1 = __importDefault(require("./Logo"));
var useBrowseWidth_1 = __importDefault(require("../../hooks/useBrowseWidth"));
var Forms_1 = __importDefault(require("./Forms"));
exports.default = (function (props) {
    var size = useBrowseWidth_1.default();
    var st = {
        root: {
            background: "white"
        }
    };
    return (react_1.default.createElement(__1.Flexbox, { flex: 2, style: st.root },
        react_1.default.createElement(__1.Flexbox, { flexDirection: "column", flex: 1, justifyContent: "center" },
            react_1.default.createElement(__1.Flexbox, { flexDirection: "column", style: { width: 300 }, alignSelf: "center" },
                react_1.default.createElement(Logo_1.default, null),
                react_1.default.createElement("h2", null, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0430\u0431\u043E\u043D\u0435\u043D\u0442\u0430 \u0421\u041C\u041E\u0420\u041E\u0414\u0418\u041D\u0410"),
                react_1.default.createElement(Forms_1.default, __assign({}, props)))),
        size.width >= 500 && (react_1.default.createElement(__1.Flexbox, { flex: 1 }, "right"))));
});
