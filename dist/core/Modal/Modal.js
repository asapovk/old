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
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = __importDefault(require("react-dom"));
var react_1 = __importDefault(require("react"));
var ModalPortal_1 = __importDefault(require("./ModalPortal"));
var ModalOverlay_1 = __importDefault(require("./ModalOverlay"));
var ModalWindow_1 = __importDefault(require("./ModalWindow"));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            active: false,
            visible: false,
            customContent: null,
            center: false,
        };
        _this.setVetricalCenter = _this.setVetricalCenter.bind(_this);
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.setVetricalCenter);
    };
    Modal.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.setVetricalCenter);
    };
    Modal.prototype.setActive = function (active) {
        this.setState({ active: active });
    };
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
        this.setActive(true);
        setTimeout(function () {
            _this.setVetricalCenter();
            _this.setVisible(true);
            _this.props.didOpen && _this.props.didOpen();
        });
    };
    Modal.prototype.close = function (didClose) {
        var _this = this;
        this.setVisible(false);
        setTimeout(function () {
            _this.setActive(false);
            _this.props.didClose && _this.props.didClose();
            didClose && didClose();
        }, 500);
        this.props.onClose && this.props.onClose();
    };
    Modal.prototype.setVetricalCenter = function () {
        var overlay = react_dom_1.default.findDOMNode(this.overlay);
        var modal = react_dom_1.default.findDOMNode(this.window);
        if (!overlay || !modal)
            return;
        var modalWidth = modal.offsetWidth;
        var modalHeight = modal.offsetHeight;
        var overlayHeight = overlay.offsetHeight;
        if (modalHeight > overlayHeight || modalWidth >= window.innerWidth) {
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
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, hideHeader = _a.hideHeader, style = _a.style;
        var _b = this.state, active = _b.active, visible = _b.visible, customContent = _b.customContent;
        if (!active) {
            return null;
        }
        return (react_1.default.createElement(ModalPortal_1.default, null,
            react_1.default.createElement(ModalOverlay_1.default, { visible: visible, center: this.state.center, ref: function (ref) { return _this.overlay = ref; } },
                react_1.default.createElement(ModalWindow_1.default, { ref: function (ref) { return _this.window = ref; }, visible: visible, center: this.state.center, title: title, style: style, subtitle: subtitle, hideHeader: hideHeader, onClosePressed: function () { return _this.close(); }, children: customContent !== null ? customContent : this.props.children }))));
    };
    return Modal;
}(react_1.default.Component));
exports.default = Modal;
