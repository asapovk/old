"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var NavBarItem_1 = __importDefault(require("./NavBarItem"));
var __1 = require("..");
var hooks_1 = require("../../hooks");
exports.default = (function (props) {
    var browser = hooks_1.useBrowser();
    var items = props.items, value = props.value, onChange = props.onChange, moreLabel = props.moreLabel, styles = props.styles;
    var _a = react_1.useState(null), barCapacity = _a[0], setBarCapacity = _a[1];
    var _b = react_1.useState(false), moreVisible = _b[0], setMoreVisible = _b[1];
    var containerRef = react_1.useRef(null);
    var moreRef = react_1.useRef(null);
    var valueIndex = items.findIndex(function (item) { return item.value === value; });
    var visibleItems = barCapacity ? items.slice(0, barCapacity) : items;
    var moreItems = barCapacity ? items.slice(barCapacity) : [];
    react_1.useLayoutEffect(function () {
        setBarCapacity(getBarCapacity(containerRef, moreRef));
    }, [browser.width]);
    function createItems(items) {
        if (items.length > 0)
            return items.map(function (item) {
                return core_1.jsx(NavBarItem_1.default, { css: styles.item(value === item.value, true), key: item.value, text: item.text, value: item.value, onClick: function (value) { return onChange && onChange(value); } });
            });
        else
            return null;
    }
    return (core_1.jsx(__1.Flexbox, { ref: containerRef, css: styles.holder },
        createItems(visibleItems),
        core_1.jsx("div", { css: styles.item(barCapacity && valueIndex >= barCapacity, !barCapacity || moreItems.length > 0), ref: moreRef, onClick: function () { return setMoreVisible(true); }, children: moreLabel ? moreLabel : core_1.jsx(__1.Icon, { type: 'more' }) }),
        core_1.jsx(__1.Popup, { triggerRef: moreRef, visible: moreVisible, onClose: function () { return setMoreVisible(false); }, children: createItems(moreItems) })));
});
function getBarCapacity(containerRef, moreRef) {
    var barsChilds = containerRef.current.childNodes;
    var containerWidth = containerRef.current.offsetWidth - moreRef.current.offsetWidth;
    var capacity = 0, itemsWidth = 0;
    barsChilds.forEach(function (node) {
        itemsWidth += node.offsetWidth;
        if (itemsWidth < containerWidth)
            capacity++;
    });
    return capacity;
}
