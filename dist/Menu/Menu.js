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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.componentWillMount = function () {
    };
    Menu.prototype.render = function () {
        return (react_1.default.createElement("div", { className: 'ui-menu' },
            react_1.default.createElement("div", { className: 'menu' },
<<<<<<< HEAD
                react_1.default.createElement("div", { className: 'nav' }, this.props.children))));
=======
                react_1.default.createElement("div", { className: 'nav' }, this.props.children),
                react_1.default.createElement("button", { className: 'add', onClick: function (_) { return AppActions.menuActions.add(); } },
                    react_1.default.createElement(Icon, { type: 'add' })))));
>>>>>>> ad3a11e5a6e756d57a172a2b8c8f2b55790883da
    };
    return Menu;
}(react_1.default.Component));
exports.default = Menu;
