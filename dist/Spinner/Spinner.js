"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Spinner = /** @class */ (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinner.prototype.render = function () {
        if (!this.props.spinning) {
            return this.props.children || null;
        }
        var spin = (react_1.default.createElement("div", { className: "ui-spinner" + (this.props.dark ? " dark" : "") }, Array(12).fill("").map(function (e, i) { return react_1.default.createElement("div", { key: i }); })));
        if (this.props.center) {
            return (react_1.default.createElement("div", { style: { zIndex: 999999, position: "fixed", top: 0, bottom: 0, left: 0, right: 0 } },
                react_1.default.createElement("div", { style: {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        marginLeft: -32,
                        marginTop: -32,
                    }, children: spin })));
        }
        return spin;
    };
    return Spinner;
}(react_1.Component));
exports.default = Spinner;
