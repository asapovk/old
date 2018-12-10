"use strict";
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
var Circle_1 = __importDefault(require("./Circle"));
var useClass_1 = __importDefault(require("../../../hooks/useClass"));
exports.default = (function (props) {
    var _a = useClass_1.default('ui-card-animation-circle1'), circleClass1 = _a[0], circle1Modifiers = _a[1];
    var _b = useClass_1.default('ui-card-animation-circle2'), circleClass2 = _b[0], circle2Modifiers = _b[1];
    react_1.useEffect(function () {
        if (props.active) {
            circle1Modifiers.addModifier('init');
            circle2Modifiers.addModifier('init');
        }
        else {
            circle1Modifiers.removeModifier('init');
            circle2Modifiers.removeModifier('init');
        }
    }, [props.active]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(Circle_1.default, { className: circleClass1, color: props.color, size: 0.4, style: {
                position: "absolute",
                right: "-5rem",
                top: "-2rem",
            } }),
        react_1.default.createElement(Circle_1.default, { className: circleClass2, color: props.color, size: 0.8, style: {
                position: "absolute",
                right: "-13rem",
                top: "-5rem",
            } })));
});
