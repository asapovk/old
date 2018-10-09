"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var index_1 = require("../index");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, labelCase = _a.labelCase, onClick = _a.onClick, label = _a.label, children = _a.children, style = _a.style, loading = _a.loading, decoration = _a.decoration;
        var classes = 'ui-button';
        if (labelCase == 'upper')
            classes += ' uppercase';
        if (loading)
            classes += ' loading';
        return (react_1.default.createElement(index_1.Styles, null, function (styles) { return (react_1.default.createElement("button", { className: classes, onClick: onClick, style: __assign({}, styles.button.main(decoration), style) },
            react_1.default.createElement("span", { className: 'ui-button-label' }, label || children),
            loading && (react_1.default.createElement(index_1.Spin, null,
                react_1.default.createElement(index_1.Icon, { type: "sync" }))))); }));
    };
    return Button;
}(react_1.Component));
exports.default = Button;
