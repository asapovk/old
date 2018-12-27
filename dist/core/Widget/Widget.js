"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var __1 = require("../../");
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Widget.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, title = _a.title, children = _a.children, style = _a.style, loading = _a.loading;
        var classes = 'ui-widget';
        if (onClick) {
            classes += " ui-widget-clickable";
        }
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement(__1.Flexbox, { column: true, flex: 1, justifyContent: "flex-start", className: classes, onClick: onClick, style: __assign({}, style, { background: styles.widget.background, borderRadius: styles.widget.borderRadius, borderColor: styles.widget.borderColor, borderWidth: styles.widget.borderWidth, borderStyle: styles.widget.borderStyle }) },
            title ? (react_1.default.createElement(__1.Flexbox, { pr: 10, flex: 1, className: "ui-widget-title" }, title)) : "",
            loading ? (react_1.default.createElement(__1.Flexbox, { column: true, className: "ui-widget-loading", alignItems: "center", alignSelf: "center", justifyContent: "center" },
                react_1.default.createElement(__1.Spin, null,
                    react_1.default.createElement(__1.Icon, { type: "sync", style: { color: styles.widget.highlight, fontSize: '1.5 rem' } })),
                typeof loading === "string" && react_1.default.createElement("div", { className: "ui-widget-loadingtext", style: { color: styles.widget.lowlight } }, "loading"))) : children)); }));
    };
    return Widget;
}(react_1.Component));
exports.default = Widget;
