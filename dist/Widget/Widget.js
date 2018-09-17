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
        return (react_1.default.createElement(index_1.Flexbox, { column: true, flex: 1, justifyContent: "center", className: classes, onClick: onClick, style: style },
            title ? (react_1.default.createElement("div", { className: "ui-widget-title" }, title)) : "",
            loading ? (react_1.default.createElement(index_1.Flexbox, { column: true, className: "ui-widget-loading", alignItems: "center", alignSelf: "center", justifyContent: "center" },
                react_1.default.createElement(index_1.Spin, null,
                    react_1.default.createElement(index_1.Icon, { type: "sync" })),
                typeof loading === "string" && react_1.default.createElement("div", { className: "ui-widget-loadingtext" }, "loading"))) : children));
    };
    return Widget;
}(react_1.Component));
exports.default = Widget;
