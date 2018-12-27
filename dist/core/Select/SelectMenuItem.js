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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SelectMenuItem = /** @class */ (function (_super) {
    __extends(SelectMenuItem, _super);
    function SelectMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            background: 'none'
        };
        return _this;
    }
    SelectMenuItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, active = _a.active, theme = _a.theme, onClick = _a.onClick;
        return (react_1.default.createElement("div", { className: 'ui-select-menu-item', children: children, style: {
                color: theme.text,
                background: active ? theme.background : this.state.background
            }, onClick: function () { return onClick && onClick(); }, onMouseEnter: function () { return _this.setState({ background: theme.background }); }, onMouseLeave: function () { return _this.setState({ background: 'none' }); } }));
    };
    return SelectMenuItem;
}(react_1.default.Component));
exports.default = SelectMenuItem;