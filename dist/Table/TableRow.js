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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
//import TableCheckbox from './TableCheckbox';
var TableColumns_1 = __importDefault(require("./TableColumns"));
<<<<<<< HEAD
var Button_1 = __importDefault(require("./Actions/Button"));
=======
var Table_1 = require("./Table");
var Button_1 = __importDefault(require("./Actions/Button"));
var TableForm_1 = __importDefault(require("./TableForm"));
>>>>>>> ad3a11e5a6e756d57a172a2b8c8f2b55790883da
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            onSelect: true,
            triggerAction: null
        };
        return _this;
    }
    TableRow.prototype.onClick = function () {
    };
    TableRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, row = _a.row, isSelected = _a.isSelected, isExpanding = _a.isExpanding, isBlur = _a.isBlur, actions = _a.actions, border = _a.border, scope = _a.scope;
<<<<<<< HEAD
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("div", { className: "ui-table-content-body-row " + (isBlur ? 'blur' : 'hover'), onClick: function (_) { return _this.onClick(); } },
                react_1.default.createElement(TableColumns_1.default, __assign({}, this.props)),
                Array.isArray(this.props.actions) && this.props.actions.map(function (action, index) {
                    if (action.type === 'button') {
                        return react_1.default.createElement(Button_1.default, __assign({ key: index }, action));
                    }
                    return null;
                }))));
=======
        var triggerAction = this.state.triggerAction;
        if (triggerAction) {
            return (react_1.default.createElement(TableForm_1.default, __assign({}, triggerAction, { row: row, onCancel: function () {
                    _this.setState({
                        triggerAction: null
                    });
                } })));
        }
        return (react_1.default.createElement("div", { className: "ui-table-content-body-row " + (isBlur ? 'blur' : 'hover'), onClick: function (event) { return _this.onClick(); } },
            react_1.default.createElement(TableColumns_1.default, __assign({}, this.props)),
            Array.isArray(this.props.actions) && this.props.actions.map(function (action, index) {
                if (action.type === Table_1.TableActionsTypes.button) {
                    return react_1.default.createElement(Button_1.default, __assign({ key: index }, action));
                }
                if (action.type === Table_1.TableActionsTypes.trigger) {
                    return (react_1.default.createElement(Button_1.default, __assign({ key: index }, action, { onClick: function () {
                            _this.setState({
                                triggerAction: action
                            });
                        } })));
                }
                return null;
            })));
>>>>>>> ad3a11e5a6e756d57a172a2b8c8f2b55790883da
    };
    return TableRow;
}(react_1.default.Component));
exports.default = TableRow;
