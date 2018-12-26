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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Prototype_1 = __importDefault(require("./Prototype"));
var __1 = require("../../");
var CFlex = /** @class */ (function (_super) {
    __extends(CFlex, _super);
    function CFlex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CFlex.prototype.render = function () {
        if (!this.isVisible())
            return null;
        var props = {
            style: this.getProperty("style", {}),
            flex: this.getProperty("flex", "1"),
            p: this.getProperty("p"),
            pr: this.getProperty("pr"),
            pl: this.getProperty("pl"),
            pt: this.getProperty("pt"),
            pb: this.getProperty("pb"),
            m: this.getProperty("m"),
            mr: this.getProperty("mr"),
            ml: this.getProperty("ml"),
            mt: this.getProperty("mt"),
            mb: this.getProperty("mb"),
            flexDirection: this.getProperty("flexDirection", "row"),
            justifyContent: this.getProperty("justifyContent"),
            alignItems: this.getProperty("alignItems"),
            alignSelf: this.getProperty("alignSelf"),
            flexBasis: this.getProperty("flexBasis"),
            flexGrow: this.getProperty("flexGrow"),
            flexShrink: this.getProperty("flexShrink"),
            flexWrap: this.getProperty("flexWrap"),
            children: this.props.children
        };
        return react_1.default.createElement(__1.Flexbox, __assign({}, props));
    };
    return CFlex;
}(Prototype_1.default));
exports.default = CFlex;
