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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ModalMask_1 = __importDefault(require("./ModalMask"));
var StoriesContainer_1 = __importDefault(require("./StoriesContainer"));
var useClass_1 = __importDefault(require("../../hooks/useClass"));
exports.default = (function (props) {
    var _a = useClass_1.default('ui-stories-modal'), modalClassName = _a[0], modalClassModifier = _a[1];
    var active = props.active;
    react_1.useEffect(function () {
        if (active) {
            modalClassModifier.addModifier('visible');
        }
        else {
            modalClassModifier.removeModifier('visible');
        }
    }, [active]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(ModalMask_1.default, { active: props.active }),
        react_1.default.createElement("div", { className: modalClassName, children: react_1.default.createElement(StoriesContainer_1.default, __assign({}, props)) })));
});
{ /* <div className={`ui-stories-modal ${ctx.active && "ui-stories-modal-visible"} ${!ctx.active && "ui-stories-modal-hidding"}`}> */ }
