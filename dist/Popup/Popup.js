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
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var react_2 = __importDefault(require("react"));
var __1 = require("../");
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            triggerCoord: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            popupStyle: {
                top: 0,
                left: 0
            },
            content: undefined,
            show: false
        };
        _this.handleClickOutside = function (event) {
            _this.popupRef && !_this.popupRef.contains(event.target) && _this.hide();
        };
        return _this;
    }
    Popup.prototype.componentDidMount = function () {
        var triggerElement = this.triggerRef && react_dom_1.default.findDOMNode(this.triggerRef);
        var coords = triggerElement && triggerElement.getBoundingClientRect();
        this.setState({
            triggerCoord: coords ? {
                top: coords.top + document.documentElement.scrollTop,
                bottom: coords.bottom + document.documentElement.scrollTop,
                left: coords.left + document.documentElement.scrollLeft,
                right: coords.right + document.documentElement.scrollLeft,
            } : this.state.triggerCoord
        });
        document.addEventListener('mousedown', this.handleClickOutside);
    };
    Popup.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleClickOutside);
    };
    Popup.prototype.updatePopupCoord = function () {
        var position = this.props.position;
        var triggerCoord = this.state.triggerCoord;
        var popupHeight = this.popupRef && this.popupRef.offsetHeight;
        var popupStyle = this.state.popupStyle;
        if (triggerCoord && popupHeight) {
            switch (position) {
                default:
                    popupStyle = {
                        top: triggerCoord.bottom + 10,
                        left: triggerCoord.left
                    };
                    break;
                case 'bottom-right':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'bottom-center':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'top-left':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'top-right':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'top-center':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'left-top':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'left-middle':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'left-bottom':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'right-top':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'right-middle':
                    popupStyle = {
                        top: triggerCoord.top + Math.round((triggerCoord.bottom - triggerCoord.top) / 2) - popupHeight / 2,
                        left: triggerCoord.right + 20
                    };
                    break;
                case 'right-bottom':
                    popupStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
            }
        }
        this.setState({
            popupStyle: popupStyle,
        });
    };
    Popup.prototype.show = function () {
        var _this = this;
        this.setState({ show: true }, function () { return _this.updatePopupCoord(); });
    };
    Popup.prototype.hide = function () {
        this.setState({ show: false });
    };
    Popup.prototype.render = function () {
        var _this = this;
        var _a = this.props, position = _a.position, children = _a.children, type = _a.type, trigger = _a.trigger;
        var TriggerTSX = react_2.default.createElement("div", { onClick: function () { return _this.show(); }, ref: function (ref) { return _this.triggerRef = ref; } }, trigger);
        var classes = 'ui-popup';
        if (type)
            classes += ' pp-' + type;
        if (position)
            classes += ' pp-' + position;
        else
            classes += ' pp-bottom-left';
        var PopupTSX = function (style) { return (react_2.default.createElement("div", { ref: function (ref) { return _this.popupRef = ref; }, className: classes, style: __assign({ background: style.background, color: style.color, boxShadow: "0px 2px 4px 0px " + style.shadowColor, borderColor: style.borderColor }, _this.state.popupStyle), children: children })); };
        var ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');
        var Portal = function (style) { return react_dom_1.default.createPortal(PopupTSX(style), ViewportHTML ? ViewportHTML : document.body); };
        return (react_2.default.createElement(__1.Styles, null, function (styles) { return (react_2.default.createElement(react_1.Fragment, null,
            TriggerTSX,
            _this.state.show ? Portal(styles.popup) : null)); }));
    };
    return Popup;
}(react_2.default.Component));
exports.default = Popup;
