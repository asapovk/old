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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var Styles_1 = require("../Styles");
var emotion_theming_1 = require("emotion-theming");
var UIProvider = /** @class */ (function (_super) {
    __extends(UIProvider, _super);
    function UIProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIProvider.prototype.componentWillMount = function () {
        // Connect reset styles
        Styles_1.injectReset();
    };
    UIProvider.prototype.render = function () {
        var classes = styles_1.default(this.props.theme);
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.props.theme },
            React.createElement("div", __assign({ className: classes.ui }, this.props))));
    };
    return UIProvider;
}(React.Component));
exports.default = UIProvider;
//# sourceMappingURL=Provider.js.map