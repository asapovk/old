"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (_a, bp) {
    var reverseContainer = _a.reverseContainer;
    var _b;
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
        menu: core_1.css((_b = {
                display: "flex",
                flexDirection: "column",
                flexBasis: "20rem",
                flexShrink: 0,
                flexWrap: "wrap",
                boxSizing: "border-box",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: theme.borders.table.color,
                borderRadius: "0.5rem",
                position: "sticky",
                top: "1.25rem",
                margin: "0 0 0 2.5rem",
                padding: "0.25rem 0 0.25rem 1.25rem"
            },
            _b[mq[2]] = {
                display: "none"
            },
            _b["> div:last-of-type > div"] = {
                borderWidth: "0"
            },
            _b), reverseContainer && {
            margin: "0 2.5rem 0 0"
        }),
        menuItem: function (activeItem) {
            return core_1.css({
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                cursor: "pointer",
                borderWidth: "0 0 1px 0",
                borderColor: theme.borders.table.color,
                borderStyle: "solid",
                padding: "1.25rem 0"
            }, activeItem && {
                color: theme.highlight.hex
            });
        },
        content: core_1.css({
            display: "flex",
            flex: 1,
            flexWrap: "wrap"
        }),
        tab: function (activeItem) {
            var _a;
            return core_1.css((_a = {
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    borderRadius: "0.5rem",
                    padding: "2rem",
                    marginBottom: "2.5rem",
                    transition: "all .25s ease-in-out",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: theme.borders.table.color
                },
                _a[mq[0]] = {
                    padding: "1.25rem",
                    marginBottom: "1.25rem"
                },
                _a), activeItem && {
                boxShadow: theme.shadows.card
            });
        },
        noDataContainer: core_1.css({
            padding: "1.25rem",
            textAlign: "center"
        })
    };
});
