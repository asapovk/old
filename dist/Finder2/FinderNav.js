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
var Icon_1 = require("../Icon");
var Flexbox_1 = require("../Flexbox");
var FinderNav = /** @class */ (function (_super) {
    __extends(FinderNav, _super);
    function FinderNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinderNav.prototype.render = function () {
        /**
         * Интерфейс специально неописан
         * системные пропсы
         */
        //@ts-ignore
        var _a = this.props, active = _a.active, onClick = _a.onClick, label = _a.label, badge = _a.badge;
        return (react_1.default.createElement(Flexbox_1.Flexbox, { alignItems: "center", className: "ui-finder-section" + (active ? " ui-finder-section-active" : ""), onClick: onClick },
            react_1.default.createElement(Flexbox_1.Flexbox, { className: 'ui-finder-section-label', flex: 1, children: label }),
            badge ? react_1.default.createElement(Flexbox_1.Flexbox, { className: "ui-finder-section-badge" }, badge) : null,
            react_1.default.createElement(Flexbox_1.Flexbox, { className: 'ui-finder-section-icon' },
                react_1.default.createElement(Icon_1.Icon, { type: 'right' }))));
    };
    return FinderNav;
}(react_1.default.Component));
exports.default = FinderNav;
