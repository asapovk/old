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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Prototype_1 = __importDefault(require("./Prototype"));
var Button_1 = __importDefault(require("../Button/Button"));
var CAttachment = /** @class */ (function (_super) {
    __extends(CAttachment, _super);
    function CAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Валидация значений
     */
    CAttachment.prototype.validate = function (file) {
        if (file === void 0) { file = this.value; }
        var maxSize = this.getProperty("style", 2097152 /* 2mb */);
        if (file === null && this.object.required) {
            this.setError('Файл не загружен!');
            return false;
        }
        if (file !== null && file.size > maxSize) {
            this.setError("\u041E\u0431\u044A\u0435\u043C \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u0432\u044B\u0448\u0430\u0442\u044C " + maxSize / 1024 / 1024 + " \u041C\u0411");
            return false;
        }
        return true;
    };
    CAttachment.prototype.componentWillMount = function () {
        _super.prototype.componentWillMount.call(this);
    };
    CAttachment.prototype.render = function () {
        var _this = this;
        if (!this.isVisible())
            return null;
        var object = this.props.object;
        var label = "Прикрепите файл";
        if (typeof this.value == "object" && this.value !== null && this.value.name) {
            label = this.value.name;
        }
        return (react_1.default.createElement("div", { style: { textAlign: "right", position: "relative" } },
            react_1.default.createElement(Button_1.default, { label: label, loading: this.state.isSaving, style: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                } }),
            react_1.default.createElement("input", { type: "file", disabled: this.state.isSaving, accept: "image/png, image/jpeg, application/pdf", style: { opacity: 0, position: "absolute", left: 0, top: 0, right: 0, bottom: 0, width: "100%", height: "100%" }, onChange: function (e) {
                    var file = e.target.files[0];
                    if (!file)
                        return;
                    if (!_this.validate(file)) {
                        e.target.value = "";
                        return;
                    }
                    var reader = new FileReader();
                    reader.onload = (function (f) {
                        return function (e) {
                            var fileObject = {
                                name: file.name,
                                type: file.type,
                                size: file.size,
                                lastModified: file.lastModified,
                                base64: btoa(e.target.result)
                            };
                            _this.setValue(fileObject);
                            _this.onValueChangeComplete(_this.$id, _this.$, _this.value);
                            _this.forceUpdate();
                        };
                    })(file);
                    reader.readAsBinaryString(file);
                } }),
            this.state.error != null ? react_1.default.createElement("div", { style: { fontSize: "12px", color: "red" } }, this.state.error) : ""));
    };
    CAttachment.needAppend = true;
    CAttachment.defaultProps = {};
    return CAttachment;
}(Prototype_1.default));
exports.default = CAttachment;
