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
var Themes_1 = require("../Themes");
var react_1 = __importStar(require("react"));
var Viewport = /** @class */ (function (_super) {
    __extends(Viewport, _super);
    function Viewport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Viewport.prototype.render = function () {
        var theme = Themes_1.themes[this.props.theme ? this.props.theme : 'blackCurrant'];
        return (react_1.default.createElement(Themes_1.ThemeContext.Provider, { value: theme },
            react_1.default.createElement("div", { className: 'ui-view', id: '0cd82567-7684-4147-ab02-dd3c56332364', style: __assign({}, this.props.style, { background: theme.background, color: theme.text }), children: this.props.children })));
    };
    return Viewport;
}(react_1.Component));
exports.default = Viewport;
