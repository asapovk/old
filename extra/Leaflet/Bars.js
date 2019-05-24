"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
exports.LeftBar = function (props) {
    return (core_1.jsx(__1.Flexbox, { css: props.styles.leftBar, column: true },
        core_1.jsx(__1.Icon, { type: 'arrow-left', shape: 'oval', background: 'background', color: 'highlight', onClick: function () { return props.onBack(); }, size: '1.25rem' }),
        core_1.jsx(__1.Icon, { type: 'close', shape: 'oval', background: 'background', color: 'highlight', size: '1.25rem', onClick: function () { return props.onClose(); } })));
};
exports.RightBar = function (props) {
    return (core_1.jsx(__1.Flexbox, { css: props.styles.rightBar, column: true },
        core_1.jsx(__1.Flexbox, { alignItems: 'center', column: true, onClick: function () { return props.onAdd(); } },
            core_1.jsx(__1.Icon, { type: 'add', size: '2rem', shape: 'oval', 
                // background='background'
                color: 'lowlight' }),
            core_1.jsx(__1.C2, { color: 'lowlight', pt: '1rem', align: 'center', children: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E' }))));
};
