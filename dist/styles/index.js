"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var black_currant_1 = __importDefault(require("./themes/black-currant"));
var white_currant_1 = __importDefault(require("./themes/white-currant"));
var abr_1 = __importDefault(require("./themes/abr"));
var gazprom_1 = __importDefault(require("./themes/gazprom"));
var Finder_1 = __importDefault(require("./jss/Finder"));
var Select_1 = __importDefault(require("./jss/Select"));
var Table_1 = __importDefault(require("./jss/Table"));
var Tabs_1 = __importDefault(require("./jss/Tabs"));
var TextField_1 = __importDefault(require("./jss/TextField"));
var Title_1 = __importDefault(require("./jss/Title"));
var WidgetStat_1 = __importDefault(require("./jss/WidgetStat"));
var Notifications_1 = __importDefault(require("./jss/Notifications"));
var LKGuestScene_1 = __importDefault(require("./jss/LKGuestScene"));
exports.themes = {
    blackCurrant: black_currant_1.default, whiteCurrant: white_currant_1.default, abrTheme: abr_1.default, gazpromTheme: gazprom_1.default
};
exports.createStyles = function (themeName) {
    var theme = themeName ? exports.themes[themeName] : exports.themes['blackCurrant'];
    return {
        theme: theme,
        finder: Finder_1.default(theme),
        select: Select_1.default(theme),
        table: Table_1.default(theme),
        tabs: Tabs_1.default(theme),
        textField: TextField_1.default(theme),
        title: Title_1.default(theme),
        widgetStat: WidgetStat_1.default(theme),
        notifications: Notifications_1.default(theme),
        scenes: {
            lkguest: LKGuestScene_1.default(theme),
        }
    };
};
exports.StylesContext = react_1.default.createContext(exports.createStyles('blackCurrant'));
exports.default = exports.StylesContext.Consumer;
