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
var react_dom_1 = __importDefault(require("react-dom"));
var react_portal_1 = require("react-portal");
var Spinner_1 = require("../Spinner");
var ModalMask_1 = __importDefault(require("./ModalMask"));
var ModalView_1 = __importDefault(require("./ModalView"));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            active: false,
            visible: false,
            hidding: false,
            center: true,
            loading: false,
        };
        _this.setVetricalCenter = _this.setVetricalCenter.bind(_this);
        return _this;
    }
    Modal.prototype.setActive = function (active) {
        this.setState({ active: active, hidding: false });
    };
    Modal.prototype.setBodyScroll = function (scroll) {
        if (scroll === void 0) { scroll = true; }
        document.body.style.overflow = scroll ? "auto" : 'hidden';
    };
    Modal.prototype.setVetricalCenter = function () {
        var view = react_dom_1.default.findDOMNode(this.view);
        var modal = react_dom_1.default.findDOMNode(this.modal);
        if (!view || !modal)
            return;
        var modalHeight = 0;
        modalHeight = modal.offsetHeight;
        var viewHeight = view.offsetHeight;
        if (modalHeight > viewHeight) {
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
    Modal.prototype.open = function () {
        var _this = this;
        this.setActive(true);
        this.setBodyScroll(false);
        this.props.onOpen && this.props.onOpen();
        setTimeout(function (_) {
            _this.setState({
                visible: true
            });
            _this.setVetricalCenter();
            window.addEventListener('resize', _this.setVetricalCenter);
            _this.props.didOpen && _this.props.didOpen();
        }, 50);
    };
    Modal.prototype.close = function (_cb) {
        var _this = this;
        this.props.onClose && this.props.onClose();
        window.removeEventListener('resize', this.setVetricalCenter);
        function whichTransitionEvent(el) {
            if (!el)
                return false;
            var t;
            var transitions = {
                'transition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            };
            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        }
        var t = whichTransitionEvent(this.view);
        if (t) {
            this.view.addEventListener(t, function (e) {
                if (e.propertyName == "opacity") {
                    _this.setActive(false);
                    _this.props.onClose && _this.props.onClose();
                    typeof _cb === "function" && _cb();
                }
            });
        }
        else {
            setTimeout(function (_) {
                _this.setActive(false);
                _this.props.onClose && _this.props.onClose();
                typeof _cb === "function" && _cb();
            }, 200);
        }
        this.setState({
            visible: false,
            hidding: true
        });
        this.setBodyScroll(true);
    };
    Modal.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.setVetricalCenter);
        this.setState({
            visible: false
        });
        this.setBodyScroll(true);
    };
    Modal.prototype.render = function () {
        var _this = this;
        if (!this.state.active) {
            return null;
        }
        var loading = this.state.loading || this.props.loading;
        var loadingText = "";
        if (typeof loading === "string") {
            loadingText = loading;
        }
        return (react_1.default.createElement(react_portal_1.Portal, null,
            react_1.default.createElement(ModalMask_1.default, { visible: this.state.visible }),
            react_1.default.createElement("div", { className: "ui-modal " + (this.state.visible && "ui-modal-visible") + " " + (this.state.hidding && "ui-modal-hidding"), ref: function (ref) { return _this.view = ref; } },
                react_1.default.createElement(ModalView_1.default, __assign({}, this.props, { center: this.state.center, wrapperReference: function (ref) { return _this.modal = ref; } })),
                react_1.default.createElement(Spinner_1.Spinner, { center: true, spinning: loading }))));
    };
    Modal.defaultProps = {
        onClose: function (_) { },
        didClose: function (_) { },
        onOpen: function (_) { },
        didOpen: function (_) { },
    };
    return Modal;
}(react_1.default.Component));
exports.default = Modal;
