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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../");
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alert.prototype.componentDidMount = function () {
        this.modal && this.modal.open();
    };
    Alert.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(__1.Modal, { ref: function (ref) { return _this.modal = ref; }, title: this.props.title },
            react_1.default.createElement(__1.Flexbox, { column: true, justifyContent: "flex-end" },
                react_1.default.createElement(__1.Flexbox, { mt: -5, mb: 10 }, this.props.text),
                react_1.default.createElement(__1.Flexbox, { justifyContent: "flex-end" },
                    react_1.default.createElement(__1.Button, { onClick: function () { return _this.modal && _this.modal.close(_this.props.onAlertClose); }, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })))));
    };
    return Alert;
}(react_1.default.Component));
exports.default = (function (options) {
    //@ts-ignore
    var viewport = document.__uiviewport;
    if (!viewport) {
        throw ("No viewport was found, that needed for Action.alert() render");
    }
    var index = viewport.mountAction(react_1.default.createElement(Alert, __assign({}, options, { onAlertClose: function () {
            if (options.onClose) {
                options.onClose();
            }
            viewport.unmountAction(index);
        } })));
});
