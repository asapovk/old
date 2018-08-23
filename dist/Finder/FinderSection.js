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
var __1 = require("../");
var FinderSection = /** @class */ (function (_super) {
    __extends(FinderSection, _super);
    function FinderSection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            expand: false
        };
        return _this;
    }
    FinderSection.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, children = _a.children;
        return (react_1.default.createElement("div", { className: 'ui-finder-section' },
            react_1.default.createElement("div", { className: 'ui-finder-section-label', onClick: function () { return _this.setState({ expand: _this.state.expand ? false : true }); } },
                label,
                react_1.default.createElement("span", null,
                    react_1.default.createElement(__1.Icon, { type: this.state.expand ? 'up' : 'down' }))),
            react_1.default.createElement("div", { className: 'ui-finder-section-children' }, this.state.expand && children)));
    };
    return FinderSection;
}(react_1.default.Component));
exports.default = FinderSection;
