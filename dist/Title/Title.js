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
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            on: false
        };
        return _this;
    }
    Title.prototype.onChange = function (on) {
        this.setState({ on: on });
        if (this.props.onChange) {
            this.props.onChange(on);
        }
    };
    Title.prototype.componentWillMount = function () {
        if (this.props.defaultValue) {
            this.setState({ on: true });
        }
    };
    Title.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, style = _a.style, onChange = _a.onChange, value = _a.value, onLabel = _a.onLabel, offLabel = _a.offLabel;
        var classes = 'ui-title';
        var state = (typeof value !== "undefined") ? value : this.state.on;
        return (react_1.default.createElement(index_1.Styles, null, function (styles) { return (react_1.default.createElement(index_1.Flexbox, { className: classes, style: style },
            children,
            (typeof onChange === "function") ? (react_1.default.createElement(index_1.Flexbox, null,
                react_1.default.createElement("div", { onClick: function () { return _this.onChange(true); }, style: styles.title.active, className: "ui-title-action" + (state ? " ui-title-action-active" : "") }, onLabel || "ВКЛ"),
                react_1.default.createElement("div", { onClick: function () { return _this.onChange(!state); }, style: { borderColor: styles.theme.highlight.rgb }, className: "ui-title-switch" + (!state ? " ui-title-switch-active" : ""), children: react_1.default.createElement("span", { style: { background: styles.theme.highlight.rgb } }) }),
                react_1.default.createElement("div", { onClick: function () { return _this.onChange(false); }, style: styles.title.active, className: "ui-title-action" + (!state ? " ui-title-action-active" : ""), children: offLabel || "ВЫКЛ" }))) : null)); }));
    };
    return Title;
}(react_1.Component));
exports.default = Title;
