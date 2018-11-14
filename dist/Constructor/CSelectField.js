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
var Prototype_1 = __importDefault(require("./Prototype"));
var __1 = require("../");
var CSelect = /** @class */ (function (_super) {
    __extends(CSelect, _super);
    function CSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CSelect.prototype.noRequiredParam = function (param) {
        console.error("Constructor: \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043E\u0431\u0435\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 " + param + " \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 selectfield!");
    };
    CSelect.prototype.render = function () {
        var _this = this;
        if (!this.isVisible())
            return null;
        //TODO: correct props
        var props = {
            options: this.getProperty('options', []).map(function (item) {
                if (typeof item.value === "undefined")
                    _this.noRequiredParam("value");
                if (typeof item.text === "undefined")
                    _this.noRequiredParam("text");
                return item;
            }),
            label: this.getProperty("label", ""),
            defaultValue: this.getProperty('defaultValue'),
            allowClear: this.getProperty('allowClear', false),
            placeholder: this.getProperty('placeholder', this.getProperty('label', '')),
            style: this.getProperty("style", {}),
            loading: this.state.saving,
            errorText: this.state.error,
            onChange: function (value) { return _this.setValue(value); }
        };
        return react_1.default.createElement(__1.Select, __assign({}, props));
    };
    CSelect.needAppend = true;
    CSelect.defaultProps = {};
    return CSelect;
}(Prototype_1.default));
exports.default = CSelect;
