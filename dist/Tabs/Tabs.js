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
var Tab_1 = __importDefault(require("./Tab"));
var TabContent_1 = __importDefault(require("./TabContent"));
var __1 = require("../");
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.tabRefs = [];
        _this.state = {
            currentTab: 0,
            mobileActive: false,
        };
        _this.updateLayout = function (e) {
            _this.update(_this.state.currentTab);
            _this.mobileDeactivateTabIfNeeded();
        };
        //for event listeners
        _this.updateLayout = _this.updateLayout.bind(_this);
        return _this;
    }
    Tabs.prototype.onSelect = function (currentTab) {
        this.setState({ currentTab: currentTab });
        this.update(currentTab);
        if (window.document.body.clientWidth <= this.maxDesktopWidth) {
            if (!this.state.mobileActive) {
                this.setState({
                    mobileActive: true
                });
                this.setBodyScroll(false);
            }
        }
    };
    Tabs.prototype.setBodyScroll = function (scroll) {
        if (scroll === void 0) { scroll = true; }
        document.body.style.overflow = scroll ? "auto" : 'hidden';
    };
    Tabs.prototype.mobileDeactivateTabIfNeeded = function () {
        if (window.document.body.clientWidth > this.maxDesktopWidth && this.state.mobileActive) {
            this.setState({
                mobileActive: false
            });
            this.setBodyScroll(true);
        }
    };
    Tabs.prototype.componentWillMount = function () {
        window.addEventListener('resize', this.updateLayout);
    };
    Tabs.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.updateLayout);
        this.setBodyScroll(true);
    };
    Tabs.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        /**
         * Если изменилось колличество табов
         * рендерим заного
         */
        if (nextProps.children.length != this.props.children.length) {
            setTimeout(function (_) {
                _this.onSelect((_this.state.currentTab >= nextProps.children.length) ? 0 : _this.state.currentTab);
            }, 1);
        }
    };
    Tabs.prototype.update = function (i) {
        if (this.tabRefs[-1]) {
            this.tabRefs[-1].setBackgroundSelectedIndex(i, this.tabRefs[i].offsetLeft, this.tabRefs[i].offsetWidth);
        }
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var tabs = this.props.children;
        if (Array.isArray(tabs) === false) {
            tabs = [tabs];
        }
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement("div", { className: "ui-tabs ui-tabs-" + (_this.props.type || 'grid'), style: _this.props.style || {}, ref: function (ref) { return _this.view = ref; } },
            react_1.default.createElement(__1.Flexbox, { className: "ui-tabs-container", style: styles.tabs.container }, tabs.map(function (child, i) {
                var props = {
                    key: i,
                    index: i,
                    type: _this.props.type || 'grid',
                    icon: child.props.icon,
                    label: child.props.label,
                    right: child.props.right,
                    disabled: child.props.disabled,
                    bubble: child.props.bubble,
                    active: _this.state.currentTab === i,
                    onClick: function () {
                        _this.onSelect(i);
                    },
                    //Для анимации
                    buttonRef: function (ref) {
                        _this.tabRefs[i] = ref;
                    },
                    ref: function (ref) {
                        if (i === 0)
                            _this.tabRefs[-1] = ref;
                    },
                    last: (tabs.length > 1 && i === tabs.length - 1)
                };
                return react_1.default.createElement(Tab_1.default, __assign({}, props));
            })),
            tabs.map(function (child, i) {
                if (_this.state.currentTab === i) {
                    var props = {
                        key: i,
                        children: child.props.children,
                        mobileActive: _this.state.mobileActive,
                        backTitle: _this.props.mobileCurrentPageTitle || "",
                        label: child.props.label,
                        onClose: function () {
                            _this.setState({ mobileActive: false });
                            _this.setBodyScroll(true);
                        }
                    };
                    return react_1.default.createElement(TabContent_1.default, __assign({}, props, { active: true }));
                }
                return null;
            }))); }));
    };
    return Tabs;
}(react_1.default.Component));
exports.default = Tabs;
