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
var TooltipTypes;
(function (TooltipTypes) {
    TooltipTypes["error"] = "error";
})(TooltipTypes || (TooltipTypes = {}));
var TooltipPositions;
(function (TooltipPositions) {
    TooltipPositions["Bottom Left"] = "bottom-left";
    TooltipPositions["Bottom Rigth"] = "bottom-right";
    TooltipPositions["Bottom Center"] = "bottom-center";
    TooltipPositions["Top Left"] = "top-left";
    TooltipPositions["Top Rigth"] = "top-right";
    TooltipPositions["Top Center"] = "top-center";
    TooltipPositions["Left top"] = "left-top";
    TooltipPositions["Left middle"] = "left-middle";
    TooltipPositions["Left bottom"] = "left-bottom";
    TooltipPositions["Right top"] = "right-top";
    TooltipPositions["Right middle"] = "right-middle";
    TooltipPositions["Right bottom"] = "right-bottom";
})(TooltipPositions || (TooltipPositions = {}));
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            targetCoord: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            tooltipStyle: {
                top: 0,
                left: 0
            },
            content: undefined,
            position: 'bottom-left',
            show: false
        };
        _this.handleClickOutside = function (event) {
            _this.tooltipRef && !_this.tooltipRef.contains(event.target) && _this.hide();
        };
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        var targetElement = this.targetRef && react_dom_1.default.findDOMNode(this.targetRef);
        if (targetElement) {
            var coords = targetElement.getBoundingClientRect();
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
    Tooltip.prototype.updateTooltipCoord = function (position) {
        var targetCoord = this.state.targetCoord;
        var tooltipHeight = this.tooltipRef && this.tooltipRef.offsetHeight;
        var tooltipStyle = this.state.tooltipStyle;
        if (targetCoord && tooltipHeight) {
            switch (position) {
                case 'bottom-left':
                    tooltipStyle = {
                        top: targetCoord.bottom + 10,
                        left: targetCoord.left
                    };
                    break;
                case 'bottom-right':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'bottom-center':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'top-left':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'top-right':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'top-center':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'left-top':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'left-middle':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'left-bottom':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'right-top':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
                case 'right-middle':
                    tooltipStyle = {
                        top: targetCoord.top + Math.round((targetCoord.bottom - targetCoord.top) / 2) - tooltipHeight / 2,
                        left: targetCoord.right + 20
                    };
                    break;
                case 'right-bottom':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    };
                    break;
            }
        }
        this.setState({
            position: position,
            tooltipStyle: tooltipStyle,
        });
    };
    Tooltip.prototype.show = function (content, position) {
        var _this = this;
        this.setState({
            content: content,
            show: true
        }, function () { return _this.updateTooltipCoord(position ? position : _this.state.position); });
    };
    Tooltip.prototype.hide = function () {
        this.setState({ show: false });
    };
    Tooltip.prototype.render = function () {
        var _this = this;
        var classes = 'ui-tooltip ';
        if (this.props.type)
            classes += 'tp-' + this.props.type;
        if (this.state.position)
            classes += 'tp-' + this.state.position;
        var children = react_2.default.isValidElement(this.props.children) ?
            this.props.children : react_2.default.createElement("div", null, this.props.children);
        var childrenWithRef = react_2.default.cloneElement(react_2.default.Children.only(children), {
            ref: function (ref) { return _this.targetRef = ref; }
        });
        var TooltipTSX = (react_2.default.createElement("div", { ref: function (ref) { return _this.tooltipRef = ref; }, className: classes, style: this.state.tooltipStyle, children: this.state.content }));
        var ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');
        var Portal = react_dom_1.default.createPortal(TooltipTSX, ViewportHTML ? ViewportHTML : document.body);
        return (react_2.default.createElement(react_1.Fragment, null,
            childrenWithRef,
            this.state.show ? Portal : null));
    };
    return Tooltip;
}(react_2.default.Component));
exports.default = Tooltip;
