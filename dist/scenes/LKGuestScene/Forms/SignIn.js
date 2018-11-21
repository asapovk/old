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
var __1 = require("../../..");
var useTextField_1 = __importDefault(require("../../../hooks/useTextField"));
var ErrorView_1 = __importDefault(require("./ErrorView"));
exports.default = (function (props) {
    var login = useTextField_1.default({ id: "LOGIN" });
    var password = useTextField_1.default({});
    var onSubmit = function () { return props.onSubmit(login.value, password.value); };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(__1.Flexbox, null,
            react_1.default.createElement(__1.TextField, __assign({}, login, { placeholder: "\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D" }))),
        login.value && (react_1.default.createElement(__1.Flexbox, { pt: '1rem' },
            react_1.default.createElement(__1.TextField, __assign({}, password, { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", type: "password" })))),
        react_1.default.createElement(ErrorView_1.default, { message: props.error }),
        react_1.default.createElement(__1.Flexbox, { justifyContent: "space-around", pt: '1rem' },
            react_1.default.createElement(__1.Flexbox, { flex: 1, pr: '0.5rem' },
                react_1.default.createElement(__1.Button, { label: "\u0412\u0445\u043E\u0434", decoration: "highlight", style: { width: "100%" }, loading: props.pending, onClick: onSubmit })),
            props.allowSignUp && (react_1.default.createElement(__1.Flexbox, { flex: 1, pl: '0.5rem' },
                react_1.default.createElement(__1.Button, { label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", decoration: "blue", style: { width: "100%", opacity: !props.pending ? 1 : 0.5 }, onClick: function () {
                        if (!props.pending) {
                            props.onSignUp();
                        }
                    } }))))));
});
