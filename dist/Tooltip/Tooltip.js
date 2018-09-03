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
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var react_2 = __importDefault(require("react"));
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        _this.state = {
            targetCoord: {},
            tooltipStyle: { top: 0, left: 0 },
            content: [],
            type: '',
            position: 'bottom-left',
            show: false
        };
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        // @ts-ignore
        var coords = react_dom_1.default.findDOMNode(this.targetRef).getBoundingClientRect();
        if (coords && this.targetRef) {
            this.setState({
                targetCoord: {
                    top: coords.top + document.documentElement.scrollTop,
                    bottom: coords.bottom + document.documentElement.scrollTop,
                    left: coords.left + document.documentElement.scrollLeft,
                    right: coords.right + document.documentElement.scrollLeft,
                }
            });
        }
        document.addEventListener('mousedown', this.handleClickOutside);
    };
    Tooltip.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleClickOutside);
    };
    Tooltip.prototype.handleClickOutside = function (event) {
        if (this.tooltipRef && !this.tooltipRef.contains(event.target)) {
            this.hide();
        }
    };
    Tooltip.prototype.updateTooltipPosition = function () {
        var coord = this.state.targetCoord;
        console.log(coord);
        switch (this.state.position) {
            case 'center-right':
                return this.setState({
                    tooltipStyle: {
                        top: coord.top + Math.round((coord.bottom - coord.top) / 2) - this.tooltipRef.offsetHeight / 2,
                        left: coord.right + 20
                    }
                });
            default:
                return this.setState({
                    tooltipStyle: {
                        top: coord.bottom + 10,
                        left: coord.left
                    }
                });
        }
    };
    Tooltip.prototype.show = function (content, type, position) {
        var _this = this;
        this.setState({
            content: content,
            type: 'tooltip-' + type,
            position: position ? position : 'bottom-left',
            show: true
        }, function () {
            _this.updateTooltipPosition();
        });
    };
    Tooltip.prototype.hide = function () {
        this.setState({ show: false });
    };
    Tooltip.prototype.render = function () {
        var _this = this;
        var classes = 'tooltip ' + this.state.type + ' ' + this.state.position;
        var ChildrenJSX = react_2.default.isValidElement(this.props.children) ? this.props.children : react_2.default.createElement("div", null, this.props.children);
        ChildrenJSX = react_2.default.cloneElement(react_2.default.Children.only(ChildrenJSX), {
            ref: function (ref) { return _this.targetRef = ref; }
        });
        console.log(this.targetRef, this.state.targetCoord);
        var PopupTSX = (react_2.default.createElement("div", { ref: function (ref) { return _this.tooltipRef = ref; }, className: classes, style: this.state.tooltipStyle, children: this.state.content }));
        var Viewport = document.getElementById('viewport');
        var Portal = Viewport && react_dom_1.default.createPortal(PopupTSX, Viewport);
        return (react_2.default.createElement(react_1.Fragment, null,
            ChildrenJSX,
            this.state.show ? Portal : null));
    };
    return Tooltip;
}(react_2.default.Component));
exports.default = Tooltip;
