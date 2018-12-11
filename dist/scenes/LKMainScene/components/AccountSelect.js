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
var Flexbox_1 = require("../../../Flexbox");
var Icon_1 = require("../../../Icon");
var useTheme_1 = __importDefault(require("../../../hooks/useTheme"));
var useClass_1 = __importDefault(require("../../../hooks/useClass"));
/**
 * @deprecated slice 1 dec 2018
 */
exports.default = (function (props) {
    var styles = useTheme_1.default();
    var _a = useClass_1.default('ui-lkcomponent-account-select'), accountSelectClassName = _a[0], AccountSelectClassName = _a[1];
    var st = styles.scenes.lkmain.components.accountSelect;
    var onSelectToggle = function () {
        AccountSelectClassName.toggleModifier('active');
    };
    var accountSetHandler = function (account) {
        props.onChange && props.onChange(account.value);
    };
    var displayAccount = "";
    props.values.forEach(function (item, index) {
        if (!index) {
            displayAccount = item.label;
        }
        if (item.value === props.value) {
            displayAccount = item.label;
        }
    });
    return (react_1.default.createElement("div", { className: accountSelectClassName },
        react_1.default.createElement("h3", null, "\u041B\u0438\u0446\u0435\u0432\u043E\u0439 \u0441\u0447\u0435\u0442"),
        react_1.default.createElement(Flexbox_1.Flexbox, { alignItems: "center" },
            react_1.default.createElement(Flexbox_1.Flexbox, { flex: 1, children: (react_1.default.createElement(Flexbox_1.Flexbox, { flex: 1, className: "_field", style: __assign({}, st.field, { height: AccountSelectClassName.hasModifier("active") ? (props.values.length * 3 + 2.25) + "rem" : '2.25rem' }), onClick: onSelectToggle, children: (react_1.default.createElement(react_1.Fragment, null,
                        react_1.default.createElement(Flexbox_1.Flexbox, { className: "_text", flex: 1, style: st.accountText, children: displayAccount }),
                        react_1.default.createElement(Icon_1.Icon, { type: "down", style: st.dropIcon }),
                        react_1.default.createElement("div", { className: "_list", style: {
                                height: (props.values.length * 3) + "rem"
                            } }, props.values.map(function (item) { return (react_1.default.createElement("div", { key: item.value, onClick: function () { return accountSetHandler(item); }, children: item.label })); })))) })) }),
            react_1.default.createElement(Flexbox_1.Flexbox, { style: st.add, className: "_add", alignItems: "center", justifyContent: "center", children: (react_1.default.createElement(Icon_1.Icon, { type: "add", style: st.addIcon, size: 1.1 })) }))));
});
