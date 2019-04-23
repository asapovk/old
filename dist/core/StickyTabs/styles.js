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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (_a, bp) {
    var _b;
    var reverseContainer = _a.reverseContainer;
    var theme = useTheme_1.default().theme;
    var breakpoints = bp ? bp : [414, 768, 1024];
    var mq = breakpoints.map(function (bp) { return "@media (max-width: " + bp + "px)"; });
    return {
        container: core_1.css({
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start"
        }, reverseContainer && {
            flexDirection: "row-reverse"
        }),
        menu: core_1.css(__assign({ display: "flex", flexDirection: "column", flexBasis: "20rem", flexShrink: 0, flexWrap: "wrap", boxSizing: "border-box", position: "sticky", top: "1.25rem", margin: "0 0 0 2.5rem", padding: "0.25rem 0 0.25rem 1.25rem" }, theme.borders.table, (_b = {}, _b[mq[2]] = {
            display: "none"
        }, _b["> div:last-of-type > div"] = {
            borderWidth: "0"
        }, _b)), reverseContainer && {
            margin: "0 2.5rem 0 0"
        }),
        menuItem: function (activeItem) { return core_1.css(__assign({ display: "block", width: "100%", boxSizing: "border-box", cursor: "pointer" }, theme.borders.table, { borderWidth: "0 0 1px 0", padding: "1.25rem 0" }), activeItem && {
            color: theme.highlight.hex
        }); },
        content: core_1.css({
            display: "flex",
            flex: 1,
            flexWrap: "wrap"
        }),
        tab: function (activeItem) {
            var _a;
            return core_1.css(__assign({ display: "block", width: "100%", boxSizing: "border-box", padding: "2rem", marginBottom: "2.5rem", transition: "all .25s ease-in-out", borderStyle: "solid" }, theme.borders.table, (_a = {}, _a[mq[0]] = {
                padding: "1.25rem",
                marginBottom: "1.25rem"
            }, _a)), activeItem && {
                boxShadow: theme.shadows.card.default
            });
        },
        noDataContainer: core_1.css({
            padding: "1.25rem",
            textAlign: "center"
        })
    };
});
