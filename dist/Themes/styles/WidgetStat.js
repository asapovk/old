"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        titleStyle: { color: theme.text.rgb },
        valueStyle: { color: theme.highlight.rgb },
        subtitleStyle: { color: theme.lowlight.rgb },
        extraStyle: { borderColor: theme.pale.rgb }
    };
});
