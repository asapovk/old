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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Flexbox_1 = require("../Flexbox");
var FinderFilter_1 = __importDefault(require("./FinderFilter"));
var FinderContent = /** @class */ (function (_super) {
    __extends(FinderContent, _super);
    function FinderContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            filter: ""
        };
        return _this;
    }
    FinderContent.prototype.render = function () {
        var _this = this;
        var _a = this.props, filter = _a.filter, filterPlaceholder = _a.filterPlaceholder, children = _a.children;
        if (this.state.filter) {
            if (Array.isArray(children)) {
                children = children.filter(function (child) {
                    if (react_1.default.isValidElement(child)) {
                        var label = child.props.label;
                        if (label) {
                            return label.toUpperCase().match(_this.state.filter);
                        }
                    }
                    return true;
                });
            }
        }
        return (react_1.default.createElement(Flexbox_1.Flexbox, { column: true, className: "ui-finder-content" },
            filter && react_1.default.createElement(FinderFilter_1.default, { placeholder: filterPlaceholder, clearable: true, onChange: function (value) {
                    _this.setState({ filter: value.toUpperCase() });
                } }),
            children));
    };
    return FinderContent;
}(react_1.default.Component));
exports.default = FinderContent;
