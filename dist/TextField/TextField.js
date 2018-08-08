"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class UITextField extends react_1.default.Component {
    validate(value) {
        const errors = [];
        const { validate, onError } = this.props;
        if (validate) {
            validate.forEach(item => {
                if (item.regex.test(value) === Boolean(item.isMatch)) {
                    this.setState({
                        classes: `ui-textfield ui-textfield-error`,
                        isValid: false
                    });
                    errors.push(item.error || `Значение "${value}" не соответсвует регулярному выражению ${item.regex}`);
                }
            });
            onError && onError(errors.length > 0 ? errors : null);
        }
        return (errors.length === 0);
    }
    render() {
        const { label, value, defaultValue, style, onChange } = this.props;
        return (react_1.default.createElement("div", { className: "UI-TextField", style: style },
            react_1.default.createElement("div", { className: "UI-TextField-Label" }, label),
            react_1.default.createElement("input", { className: "UI-TextField-Input", defaultValue: defaultValue, value: value, onChange: (event) => {
                    if (this.validate(event.currentTarget.value)) {
                        onChange && onChange(event.currentTarget.value);
                    }
                }, onClick: event => this.validate(event.currentTarget.value) })));
    }
}
exports.default = UITextField;
