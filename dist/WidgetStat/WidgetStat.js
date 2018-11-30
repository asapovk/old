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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../");
var WidgetStat = /** @class */ (function (_super) {
    __extends(WidgetStat, _super);
    function WidgetStat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WidgetStat.prototype.render = function () {
        var _a = this.props, children = _a.children, onClick = _a.onClick, actionTitle = _a.actionTitle, loading = _a.loading, style = _a.style, title = _a.title, subtitle = _a.subtitle, subtitle2 = _a.subtitle2, value1 = _a.value1, value2 = _a.value2;
        var classes = 'ui-widgetstat';
        return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement(__1.Widget, { loading: loading, style: style },
            react_1.default.createElement(__1.Flexbox, { column: true, className: classes },
                react_1.default.createElement(__1.Flexbox, { column: true, flex: 1 },
                    react_1.default.createElement(__1.Flexbox, null,
                        react_1.default.createElement(__1.Flexbox, { pr: 10, flex: 1, className: "ui-widgetstat-title", style: styles.widgetStat.titleStyle }, title),
                        react_1.default.createElement(__1.Flexbox, { className: "ui-widgetstat-value2", style: styles.widgetStat.valueStyle },
                            react_1.default.createElement(__1.Icon, { type: "chart", size: 1.5 }),
                            value2)),
                    react_1.default.createElement(__1.Flexbox, { pt: 5 },
                        react_1.default.createElement(__1.Flexbox, { pr: 10, flex: 1, className: "ui-widgetstat-subtitle", style: styles.widgetStat.subtitleStyle }, subtitle),
                        react_1.default.createElement(__1.Flexbox, { className: "ui-widgetstat-subtitle2", style: styles.widgetStat.subtitleStyle }, subtitle2))),
                react_1.default.createElement(__1.Flexbox, { pt: 10, alignItems: "center" },
                    react_1.default.createElement(__1.Flexbox, { pr: 10, flex: 1, className: "ui-widgetstat-value1", style: styles.widgetStat.valueStyle }, value1),
                    typeof onClick === "function" ? react_1.default.createElement(__1.Button, { decoration: "none", className: "ui-widgetstat-button", onClick: onClick }, actionTitle || "Подробнее") : null)),
            typeof children !== "undefined" ? (react_1.default.createElement(__1.Flexbox, { flexDirection: 'column', className: "ui-widgetstat-extra", style: styles.widgetStat.extraStyle }, children)) : null)); }));
    };
    return WidgetStat;
}(react_1.Component));
exports.default = WidgetStat;
