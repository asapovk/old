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
var Button_1 = __importDefault(require("./jss/Button"));
var Card_1 = __importDefault(require("./jss/Card"));
var Badge_1 = __importDefault(require("./jss/Badge"));
var Chart_1 = __importDefault(require("./jss/Chart"));
var Checkbox_1 = __importDefault(require("./jss/Checkbox"));
var DatePicker_1 = __importDefault(require("./jss/DatePicker"));
var Finder_1 = __importDefault(require("./jss/Finder"));
var Login_1 = __importDefault(require("./jss/Login"));
var Menu_1 = __importDefault(require("./jss/Menu"));
var Modal_1 = __importDefault(require("./jss/Modal"));
var Popup_1 = __importDefault(require("./jss/Popup"));
var Select_1 = __importDefault(require("./jss/Select"));
var Spin_1 = __importDefault(require("./jss/Spin"));
var Spinner_1 = __importDefault(require("./jss/Spinner"));
var Table_1 = __importDefault(require("./jss/Table"));
var Tabs_1 = __importDefault(require("./jss/Tabs"));
var TextField_1 = __importDefault(require("./jss/TextField"));
var Title_1 = __importDefault(require("./jss/Title"));
var Viewport_1 = __importDefault(require("./jss/Viewport"));
var Widget_1 = __importDefault(require("./jss/Widget"));
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
        button: Button_1.default(theme),
        card: Card_1.default(theme),
        chart: Chart_1.default(theme),
        checkbox: Checkbox_1.default(theme),
        datePicker: DatePicker_1.default(theme),
        finder: Finder_1.default(theme),
        login: Login_1.default(theme),
        menu: Menu_1.default(theme),
        modal: Modal_1.default(theme),
        popup: Popup_1.default(theme),
        select: Select_1.default(theme),
        spin: Spin_1.default(theme),
        spinner: Spinner_1.default(theme),
        table: Table_1.default(theme),
        tabs: Tabs_1.default(theme),
        textField: TextField_1.default(theme),
        title: Title_1.default(theme),
        badge: Badge_1.default(theme),
        viewport: Viewport_1.default(theme),
        widget: Widget_1.default(theme),
        widgetStat: WidgetStat_1.default(theme),
        notifications: Notifications_1.default(theme),
        scanes: {
            lkguest: LKGuestScene_1.default(theme)
        }
    };
};
exports.StylesContext = react_1.default.createContext(exports.createStyles('blackCurrant'));
exports.default = exports.StylesContext.Consumer;
