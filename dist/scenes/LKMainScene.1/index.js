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
var __1 = require("../..");
var MainView_1 = __importDefault(require("./MainView"));
var HeaderMenu_1 = __importDefault(require("./HeaderMenu"));
exports.MainSceneContext = react_1.default.createContext({});
function useMainContext() {
    return react_1.useContext(exports.MainSceneContext);
}
exports.useMainContext = useMainContext;
exports.default = (function (props) {
    var _a = react_1.useState(props.menuItems[0]), currentMenuItem = _a[0], setMenuItem = _a[1];
    var _b = react_1.useState(currentMenuItem.submenuItems[0]), currentSubMenuItem = _b[0], setCurrentSubMenu = _b[1];
    react_1.useEffect(function () {
        setCurrentSubMenu(currentMenuItem.submenuItems[0]);
    }, [currentMenuItem.key]);
    var defaulContext = {
        menuItems: props.menuItems,
        currentMenuItem: currentMenuItem,
        setCurrentMenu: setMenuItem,
        currentSubMenuItem: currentSubMenuItem,
        setCurrentSubMenu: setCurrentSubMenu
    };
    return (react_1.default.createElement(exports.MainSceneContext.Provider, { value: defaulContext },
        react_1.default.createElement(__1.Flexbox, { style: { height: '100%' }, flexDirection: 'column' },
            react_1.default.createElement(__1.Flexbox, { style: { height: 64 } },
                react_1.default.createElement(HeaderMenu_1.default, null)),
            react_1.default.createElement(__1.Flexbox, { flex: 1 },
                react_1.default.createElement(MainView_1.default, null)))));
});
