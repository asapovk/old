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
var useBrowser_1 = __importDefault(require("../hooks/useBrowser"));
var Mobile_1 = require("./Mobile");
exports.default = (function (props) {
    var styles = useStyles_1.default();
    var windowSize = useBrowser_1.default();
    var _a = react_1.useState(false), mobileActive = _a[0], setMobileActive = _a[1];
    var header = props.header, style = props.style, toolsRight = props.toolsRight, profile = props.profile, items = props.items;
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
    console.log(windowSize.isTablet);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.Flexbox, { className: 'ui-menu', alignItems: 'center', justifyContent: 'space-between', style: __assign({}, styles.menu.main.menu, style) },
            !windowSize.isDesktop && react_1.default.createElement(Mobile_1.MobileMenu, { active: mobileActive, setActive: setMobileActive }),
            header && (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', flex: !windowSize.isDesktop ? 1 : 0, justifyContent: 'flex-start', className: 'ui-menu-header' }, !header.label ? header : (react_1.default.createElement("div", { className: 'ui-menu-header-title', onClick: header.onAction }, header.label)))),
            windowSize.isDesktop && (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', justifyContent: 'center', className: 'ui-menu-navbar' }, items.list.map(function (navItem, index) { return (react_1.default.createElement(Nav_1.default, { key: index, menuKey: index, label: navItem.label, active: index === items.active, onClick: items.onClick })); }))),
            toolsRight && (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', justifyContent: 'flex-end', className: 'ui-menu-toolsbar' }, toolsRight.map(function (tool, index) { return react_1.default.cloneElement(tool, { key: index }); }))),
            profile && (react_1.default.createElement(__1.Flexbox, { alignItems: 'center', justifyContent: 'flex-end', className: 'ui-menu-profile' },
                react_1.default.createElement(__1.Login, __assign({}, profile))))),
        !windowSize.isDesktop && react_1.default.createElement(Mobile_1.MobileMenuItems, { active: mobileActive, items: props.items })));
});
