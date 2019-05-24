"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (props) {
    var spacing = {};
    if (props.p)
        spacing.padding = props.p;
    if (props.pt)
        spacing.paddingTop = props.pt;
    if (props.pl)
        spacing.paddingLeft = props.pl;
    if (props.pr)
        spacing.paddingRight = props.pr;
    if (props.pb)
        spacing.paddingBottom = props.pb;
    if (props.m)
        spacing.margin = props.m;
    if (props.mt)
        spacing.marginTop = props.mt;
    if (props.ml)
        spacing.marginLeft = props.ml;
    if (props.mr)
        spacing.marginRight = props.mr;
    if (props.mb)
        spacing.marginBottom = props.mb;
    return spacing;
});
