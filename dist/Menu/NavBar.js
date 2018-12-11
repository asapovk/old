"use strict";
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
var NavBarItem_1 = __importDefault(require("./NavBarItem"));
var useBrowser_1 = __importDefault(require("../hooks/useBrowser"));
var useTheme_1 = __importDefault(require("../hooks/useTheme"));
var PW = [];
exports.default = (function (props) {
    var browser = useBrowser_1.default();
    var styles = useTheme_1.default();
    var items = props.items;
    var containerRef = react_1.useRef(null);
    var _a = react_1.useState(0), containerWidth = _a[0], setContainerWidth = _a[1];
    var _b = react_1.useState(items.list.length), sliceIndex = _b[0], setSliceIndex = _b[1];
    /** Высчитываем необходимую ширину для перерендера */
    var calculateItemsWidth = function () {
        /**
         * Задаем дефолтный отстут - чтобы не сближать к другим элементам меню
         * далее высчитываем необходимое место для элементов меню
         */
        var nodes = containerRef.current.childNodes;
        var width = 32;
        nodes.forEach(function (node) { return width += node.offsetWidth; });
        if (containerWidth) {
            // Если ширина контейнера меньше чем ширина всех элементов
            if (containerWidth <= width) {
                var lastNodeWidth = containerRef.current.childNodes[sliceIndex - 1].offsetWidth;
                PW.push(lastNodeWidth);
                setSliceIndex(sliceIndex - 1);
            }
            else {
                if ((containerWidth > width + PW[PW.length - 1]) && (sliceIndex < items.list.length)) {
                    PW.pop();
                    setSliceIndex(sliceIndex + 1);
                }
            }
        }
    };
    var onContainerWidthChange = function (cw) {
        if (containerWidth !== cw) {
            setContainerWidth(cw);
        }
    };
    react_1.useLayoutEffect(function () {
        onContainerWidthChange(containerRef.current.offsetWidth);
        calculateItemsWidth();
    }, [containerWidth, sliceIndex, browser.width]);
    return (react_1.default.createElement("div", { ref: containerRef, className: 'ui-menu-navbar', style: { width: '100%' } },
        items.list.map(function (navItem, index) { return (react_1.default.createElement(NavBarItem_1.default, { key: index, menuKey: index, label: navItem.label, active: index === items.active, onClick: items.onClick, hidden: index >= sliceIndex })); }),
        sliceIndex < items.list.length && (react_1.default.createElement("div", { className: 'ui-menu-nav-ext', style: {
                color: items.active >= sliceIndex ? styles.theme.textOnAccent.rgb : styles.menu.nav.textColor,
                background: items.active >= sliceIndex ? styles.menu.nav.textColorActive : 'transparent',
                borderRadius: styles.theme.radius.button
            } },
            react_1.default.createElement("div", null, "\u0415\u0449\u0435"),
            react_1.default.createElement("div", { className: 'ui-menu-nav-ext-dropdown', style: {
                    backgroundColor: styles.theme.background.hex,
                    borderRadius: styles.theme.radius.default
                } }, items.list.filter(function (_, index) { return index >= sliceIndex; })
                .map(function (navItem, index) { return (react_1.default.createElement(NavBarItem_1.default, { key: index + sliceIndex, menuKey: index + sliceIndex, label: navItem.label, active: index + sliceIndex === items.active, onClick: items.onClick })); }))))));
});
