"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        main: {
            menu: {
                backgroundColor: theme.interface.rgb,
                borderColor: theme.pale.rgb,
            },
            searchBar: {
                background: theme.interface.rgb,
                borderColor: theme.pale.rgb,
                boxShadow: "0px 2px 4px 0px " + theme.shadow.rgb,
                borderRadius: theme.radius.default
            }
        },
        nav: {
            textColor: theme.text.rgb,
            textColorActive: theme.highlight.rgb,
        }
    };
});
