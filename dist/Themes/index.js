"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var black_currant_1 = __importDefault(require("./themes/black-currant"));
var white_currant_1 = __importDefault(require("./themes/white-currant"));
var Button_1 = __importDefault(require("./styles/Button"));
var Chart_1 = __importDefault(require("./styles/Chart"));
var Checkbox_1 = __importDefault(require("./styles/Checkbox"));
var DatePicker_1 = __importDefault(require("./styles/DatePicker"));
var Finder_1 = __importDefault(require("./styles/Finder"));
var Login_1 = __importDefault(require("./styles/Login"));
var Menu_1 = __importDefault(require("./styles/Menu"));
var Modal_1 = __importDefault(require("./styles/Modal"));
var Popup_1 = __importDefault(require("./styles/Popup"));
var Select_1 = __importDefault(require("./styles/Select"));
var Spin_1 = __importDefault(require("./styles/Spin"));
var Spinner_1 = __importDefault(require("./styles/Spinner"));
var Table_1 = __importDefault(require("./styles/Table"));
var TextField_1 = __importDefault(require("./styles/TextField"));
var Title_1 = __importDefault(require("./styles/Title"));
var Viewport_1 = __importDefault(require("./styles/Viewport"));
var Widget_1 = __importDefault(require("./styles/Widget"));
var WidgetStat_1 = __importDefault(require("./styles/WidgetStat"));
var Notifications_1 = __importDefault(require("./styles/Notifications"));
exports.themes = {
    blackCurrant: black_currant_1.default, whiteCurrant: white_currant_1.default
};
exports.createStyles = function (themeName) {
    var theme = themeName ? exports.themes[themeName] : exports.themes['blackCurrant'];
    return {
        theme: theme,
        button: Button_1.default(theme),
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
        textField: TextField_1.default(theme),
        title: Title_1.default(theme),
        viewport: Viewport_1.default(theme),
        widget: Widget_1.default(theme),
        widgetStat: WidgetStat_1.default(theme),
        notifications: Notifications_1.default(theme)
    };
};
exports.ThemeContext = react_1.default.createContext(exports.createStyles('blackCurrant'));
exports.default = exports.ThemeContext.Consumer;
