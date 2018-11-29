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
var useProgress_1 = __importDefault(require("../../hooks/useProgress"));
var __1 = require("../..");
var useClass_1 = __importDefault(require("../../hooks/useClass"));
exports.default = (function (_a) {
    var animate = _a.animate, time = _a.time, lastElement = _a.lastElement, finished = _a.finished;
    var progress = useProgress_1.default(animate, time);
    var _b = useClass_1.default('ui-stories-modal-container-story-progressbar'), progressClassName = _b[0], progressClassModifier = _b[1];
    react_1.useEffect(function () {
        if (finished) {
            progressClassModifier.addModifier('finished');
        }
    }, [finished]);
    return (react_1.default.createElement(__1.Flexbox, { flex: 1, className: progressClassName, style: { marginRight: lastElement ? 0 : 5 } },
        react_1.default.createElement("div", { style: { width: progress * 100 + "%" } })));
});
