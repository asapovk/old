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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = __importDefault(require("react-dom"));
var react_1 = __importStar(require("react"));
var ModalOverlay_1 = __importDefault(require("./ModalOverlay"));
var ModalWindow_1 = __importDefault(require("./ModalWindow"));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false,
            customContent: null,
            center: false,
        };
        _this.setVetricalCenter = _this.setVetricalCenter.bind(_this);
        return _this;
    }
    Modal.prototype.setVisible = function (visible) {
        this.setState({ visible: visible });
    };
    /**
     * Open
     */
    Modal.prototype.open = function (customContent) {
        var _this = this;
        if (customContent) {
            this.setState({ customContent: customContent });
        }
        this.props.onOpen && this.props.onOpen();
        setTimeout(function (_) {
            _this.setVisible(true);
            _this.setVetricalCenter();
            window.addEventListener('resize', _this.setVetricalCenter);
            _this.props.didOpen && _this.props.didOpen();
        }, 50);
    };
    Modal.prototype.close = function (onClose) {
        this.setVisible(false);
        onClose && onClose();
    };
    Modal.prototype.setVetricalCenter = function () {
        var overlay = react_dom_1.default.findDOMNode(this.overlay);
        var window = react_dom_1.default.findDOMNode(this.window);
        if (!overlay || !window)
            return;
        var windowHeight = 0;
        windowHeight = window.offsetHeight;
        var overlayHeight = overlay.offsetHeight;
        if (windowHeight > overlayHeight) {
            if (!this.state.center)
                return;
            this.setState({
                center: false
            });
        }
        else {
            if (this.state.center)
                return;
            this.setState({
                center: true
            });
        }
    };
    Modal.prototype.updateLayout = function () {
        this.setVetricalCenter();
    };
    Modal.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, hideHeader = _a.hideHeader;
        var _b = this.state, visible = _b.visible, customContent = _b.customContent;
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(ModalOverlay_1.default, { visible: visible, center: this.state.center, ref: function (ref) { return _this.overlay = ref; } },
                react_1.default.createElement(ModalWindow_1.default, { ref: function (ref) { return _this.window = ref; }, visible: visible, title: title, subtitle: subtitle, hideHeader: hideHeader, onClosePressed: function () { return _this.close(); }, children: customContent !== null ? customContent : this.props.children }))));
    };
    return Modal;
}(react_1.default.Component));
exports.default = Modal;
