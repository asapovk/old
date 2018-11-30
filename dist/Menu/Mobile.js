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
var __1 = require("..");
var useStyles_1 = __importDefault(require("../hooks/useStyles"));
var utilities_1 = require("../Styles/utilities");
var Nav_1 = __importDefault(require("./Nav"));
function MobileMenu(props) {
    var styles = useStyles_1.default();
    var active = props.active, setActive = props.setActive;
    var hamburgerClasses = 'ui-menu-navbar-hamburger';
    if (active) {
        hamburgerClasses += " active";
    }
    return (react_1.default.createElement(__1.Flexbox, { justifyContent: 'center', alignItems: 'center', className: 'ui-menu-navbar' },
        react_1.default.createElement(__1.Flexbox, { flexDirection: 'column', justifyContent: 'space-between', className: hamburgerClasses, onClick: function () { return setActive(!active); } },
            react_1.default.createElement("div", { className: 'ui-menu-navbar-hamburger-top', style: { backgroundColor: styles.theme.highlight.hex } }),
            react_1.default.createElement("div", { className: 'ui-menu-navbar-hamburger-middle', style: { backgroundColor: styles.theme.highlight.hex } }),
            react_1.default.createElement("div", { className: 'ui-menu-navbar-hamburger-bottom', style: { backgroundColor: styles.theme.highlight.hex } }))));
}
exports.MobileMenu = MobileMenu;
function MobileMenuItems(props) {
    var styles = useStyles_1.default();
    var menuRef = react_1.useRef(null);
    var _a = react_1.useState(0), menuHeight = _a[0], setMenuHeight = _a[1];
    var items = props.items, active = props.active, tools = props.tools;
    react_1.useEffect(function () {
        if (active) {
            setMenuHeight(menuRef.current.childNodes[0].offsetHeight);
        }
        else {
            setMenuHeight(0);
        }
    }, [active]);
    return (react_1.default.createElement("div", { ref: menuRef, style: { height: menuHeight, background: utilities_1.ColorCorrector.darker(styles.theme.background.hex, 3) }, className: "ui-menu-navbar-hamburger-content" },
        react_1.default.createElement(__1.Flexbox, { alignItems: "center", flexDirection: "column", style: { position: "relative", top: active ? 0 : 110, opacity: active ? 1 : 0 } },
            tools && (react_1.default.createElement(__1.Flexbox, { justifyContent: 'space-around', alignItems: 'center', style: { marginBottom: '1rem' } }, tools.map(function (tool, index) { return react_1.default.cloneElement(tool, { key: index, style: { marginRight: index != tools.length - 1 ? 10 : 0 } }); }))),
            items.list.map(function (navItem, index) { return (react_1.default.createElement(Nav_1.default, { style: { marginBottom: (index === items.list.length - 1) ? 0 : '1rem' }, key: index, menuKey: index, label: navItem.label, active: index === items.active, onClick: items.onClick })); }))));
}
exports.MobileMenuItems = MobileMenuItems;
