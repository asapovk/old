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
var useClass_1 = __importDefault(require("../../hooks/useClass"));
exports.default = (function (_a) {
    var image = _a.image, children = _a.children, isCurrent = _a.isCurrent, onPause = _a.onPause;
    var _b = useClass_1.default('ui-stories-modal-container-story-slides-slide'), slideClassName = _b[0], slideClassModifier = _b[1];
    react_1.useEffect(function () {
        if (isCurrent) {
            slideClassModifier.addModifier('active');
        }
        else {
            slideClassModifier.removeModifier('active');
        }
    }, [isCurrent]);
    return (react_1.default.createElement("div", { onClick: function () { return onPause(); }, className: slideClassName, style: { backgroundImage: "url(" + image + ")" }, children: children }));
});
