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
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, value = _a.value, children = _a.children, style = _a.style, loading = _a.loading, color = _a.color, top = _a.top, right = _a.right, left = _a.left;
        var classes = 'ui-badge';
        // if (loading) classes += ' loading';
        return (react_1.default.createElement(index_1.Styles, null, function (styles) {
            return (react_1.default.createElement("div", { className: classes, style: __assign({}, styles.badge.container, style), onClick: onClick },
                react_1.default.createElement("div", { className: "ui-badge-content", style: styles.badge.main(color, top, right, left) }, value),
                children));
        }));
    };
    return Badge;
}(react_1.Component));
exports.default = Badge;
