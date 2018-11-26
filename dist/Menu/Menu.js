"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("..");
var Nav_1 = __importDefault(require("./Nav"));
var useStyles_1 = __importDefault(require("../hooks/useStyles"));
var useBrowseWidth_1 = __importDefault(require("../hooks/useBrowseWidth"));
var utilities_1 = require("../Styles/utilities");
exports.default = (function (props) {
    var styles = useStyles_1.default();
    var windowSize = useBrowseWidth_1.default();
    var _a = react_1.useState(false), active = _a[0], setActive = _a[1];
    var _b = react_1.useState(0), menuHeight = _b[0], setMenuHeight = _b[1];
    var menuRef = react_1.useRef(null);
    var header = props.header, style = props.style, toolsRight = props.toolsRight, profile = props.profile, navigation = props.navigation, activeMenu = props.activeMenu, onMenuClick = props.onMenuClick;
    var hamburgerClasses = 'ui-menu-navbar-hamburger';
    // const animate = (from: number, to: number, onFrame: (value: number) => void, delay: number = 250, idAnimation?: string, fps: number = 60) => {
    //     let value = from;
    //     let total = from;
    //     if (from < to) {
    //         total = to;
    //     }
    //     if (!idAnimation) {
    //         idAnimation = (Math.random() * 10000000).toString(16);
    //     }
    //     if (window['abrr_ui_animation_frames'] === undefined) {
    //         window['abrr_ui_animation_frames'] = {};
    //     }
    //     const runAnimation = () => {
    //         window['abrr_ui_animation_frames'][idAnimation] = requestAnimationFrame(loop);
    //     }
    //     const removeAnimation = (cancel: boolean = false) => {
    //         if (cancel) {
    //             cancelAnimationFrame(window['abrr_ui_animation_frames'][idAnimation]);
    //         }
    //         delete window['abrr_ui_animation_frames'][idAnimation];
    //     }
    //     const loop = () => {
    //         if ((from < to && value < to) || (from > to && value > to)) {
    //             if (from < to) {
    //                 value += Math.round(total / (delay / fps));
    //             } else {
    //                 value -= Math.round(total / (delay / fps));
    //             }
    //             onFrame(value);
    //             if (window['abrr_ui_animation_frames'][idAnimation]) {
    //                 runAnimation();
    //             }
    //         } else {
    //             removeAnimation(false);
    //         }
    //     };
    //     if (window['abrr_ui_animation_frames'][idAnimation]) {
    //         removeAnimation(true);
    //     }
    //     setTimeout(runAnimation, 1);
    // }
    react_1.useEffect(function () {
        if (active) {
            setMenuHeight(menuRef.current.childNodes[0].offsetHeight);
        }
        else {
            setMenuHeight(0);
        }
    }, [active]);
    if (active) {
        hamburgerClasses += " active";
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.Flexbox, { className: 'ui-menu', alignItems: 'center', justifyContent: 'space-between', style: __assign({}, styles.menu.main.menu, style) },
            (windowSize.width < 768) && (react_1.default.createElement(__1.Flexbox, { justifyContent: 'center', alignItems: 'center', className: 'ui-menu-navbar' },
                react_1.default.createElement(__1.Flexbox, { flexDirection: 'column', justifyContent: 'space-between', className: hamburgerClasses, onClick: function () { return setActive(!active); } },
                    react_1.default.createElement("div", { className: 'ui-menu-navbar-hamburger-top', style: { backgroundColor: styles.theme.highlight.hex } }),
                    react_1.default.createElement("div", { className: 'ui-menu-navbar-hamburger-middle', style: { backgroundColor: styles.theme.highlight.hex } }),
                    react_1.default.createElement("div", { className: 'ui-menu-navbar-hamburger-bottom', style: { backgroundColor: styles.theme.highlight.hex } })))),
            header && (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', flex: windowSize.width < 768 ? 1 : 0, justifyContent: 'flex-start', className: 'ui-menu-header' }, !header.label ? header : (react_1.default.createElement("div", { className: 'ui-menu-header-title', onClick: header.onAction }, header.label)))),
            (windowSize.width >= 768) && (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', justifyContent: 'center', className: 'ui-menu-navbar' }, navigation.map(function (navItem, index) { return react_1.default.createElement(Nav_1.default, { key: index, itemKey: index, label: navItem.label, active: index === activeMenu, onClick: onMenuClick }); }))),
            toolsRight && (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', flex: 1, justifyContent: 'flex-end', className: 'ui-menu-toolsbar' }, toolsRight.map(function (tool, index) { return react_1.default.cloneElement(tool, { key: index }); }))),
            profile && (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', justifyContent: 'flex-end', className: 'ui-menu-profile' },
                react_1.default.createElement(__1.Login, __assign({}, profile))))),
        (windowSize.width < 768) && (react_1.default.createElement("div", { ref: menuRef, style: { height: menuHeight, background: utilities_1.ColorCorrector.darker(styles.theme.background.hex, 3) }, className: "ui-menu-navbar-hamburger-content" },
            react_1.default.createElement(__1.Flexbox, { alignItems: "center", flexDirection: "column", style: { position: "relative", top: active ? 0 : 110, opacity: active ? 1 : 0 } }, navigation.map(function (navItem, index) { return react_1.default.createElement(Nav_1.default, { style: { marginBottom: (index === navigation.length - 1) ? 0 : '1rem' }, key: index, itemKey: index, label: navItem.label, active: index === activeMenu, onClick: onMenuClick }); }))))));
});
