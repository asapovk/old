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
var Wave_1 = __importDefault(require("./Wave"));
var useClass_1 = __importDefault(require("../../../hooks/useClass"));
exports.default = (function (props) {
    var _a = useClass_1.default('ui-card-animation-wave1'), waveClass1 = _a[0], wave1Modifiers = _a[1];
    var _b = useClass_1.default('ui-card-animation-wave2'), waveClass2 = _b[0], wave2Modifiers = _b[1];
    react_1.useEffect(function () {
        if (props.active) {
            wave1Modifiers.addModifier('init');
            wave2Modifiers.addModifier('init');
        }
        else {
            wave1Modifiers.removeModifier('init');
            wave2Modifiers.removeModifier('init');
        }
    }, [props.active]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(Wave_1.default, { className: waveClass1, color: props.color, size: 1, style: {
                position: "absolute",
                left: 0,
                bottom: "0rem",
            } }),
        react_1.default.createElement(Wave_1.default, { className: waveClass2, color: props.color, size: 1, style: {
                position: "absolute",
                left: 0,
                bottom: "-1.5rem",
            } })));
});
