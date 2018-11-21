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
var useNumber_aseString_1 = __importDefault(require("../../../hooks/useNumber\u0421aseString"));
var ErrorView_1 = __importDefault(require("./ErrorView"));
exports.default = (function (props) {
    var login = useTextField_1.default({ id: "LOGIN" });
    var password = useTextField_1.default();
    var password2 = useTextField_1.default();
    var charsLeft = useNumber_aseString_1.default(props.newPasswordsMinLength - password.value.length, ["знак", "знака", "знаков"]);
    var onSubmit = function () { return props.onSubmit(login.value, password.value, password2.value); };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(__1.Flexbox, { flex: 1 },
            react_1.default.createElement(__1.Button, { decoration: "none", style: { width: "100%" }, label: "<", onClick: props.onBack })),
        react_1.default.createElement(__1.Flexbox, null,
            react_1.default.createElement(__1.TextField, __assign({}, login, { placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D/\u041F\u043E\u0447\u0442\u0430" }))),
        login.value && (react_1.default.createElement(__1.Flexbox, { pt: '1rem' },
            react_1.default.createElement(__1.TextField, __assign({}, password, { placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", type: "password" })))),
        password.value.length > 0 && password.value.length < props.newPasswordsMinLength && (react_1.default.createElement("div", null,
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0449\u0435 ",
            charsLeft,
            " ")),
        password.value.length >= props.newPasswordsMinLength && (react_1.default.createElement(__1.Flexbox, { pt: '1rem' },
            react_1.default.createElement(__1.TextField, __assign({}, password2, { placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", type: "password" })))),
        react_1.default.createElement(ErrorView_1.default, { message: props.error }),
        react_1.default.createElement(__1.Flexbox, { justifyContent: "space-around", pt: '1rem' },
            react_1.default.createElement(__1.Flexbox, { flex: 1 },
                react_1.default.createElement(__1.Button, { label: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F", decoration: "highlight", style: { width: "100%" }, onClick: onSubmit })))));
});
