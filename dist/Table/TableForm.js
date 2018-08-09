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
var Button_1 = require("../Button");
var react_flexbox_1 = __importDefault(require("react-flexbox"));
var TableForm = /** @class */ (function (_super) {
    __extends(TableForm, _super);
    function TableForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         invalidItems: new Set()
    //     }
    //     this.setData = this.setData.bind(this);
    //     this.setValid = this.setValid.bind(this);
    // }
    // static defaultProps = {
    //     data: {}
    // }
    // componentWillMount() {
    //     this.formData = Object.assign(this.props.data);
    // }
    // setData(field, value) {
    //     this.formData[field] = value;
    // }
    // setValid(id, isValid) {
    //     const items = this.state.invalidItems;
    //     isValid ? items.delete(id) : items.add(id);
    //     this.setState({ invalidItems: items });
    //     this.save.disabled = items.size > 0 ? true : false;
    // }
    // Column(props) {
    //     const width = props.width ? { flexBasis: props.width } : { flex: 1 };
    //     return (
    //         <div
    //             className={'ui-table-content-body-row-column' + (props.className ? ' ' + props.className : '')}
    //             children={props.children}
    //             style={Object.assign(width, props.style)}
    //         />
    //     )
    // }
    // Subrow(props) {
    //     return (
    //         <div
    //             className={'ui-table-content-body-row-column-subrow' + (props.className ? ' ' + props.className : '')}
    //             children={props.children}
    //             style={props.style}
    //         />
    //     )
    // }
    TableForm.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_flexbox_1.default, { className: 'ui-table-content-body-row edited' },
            this.props.target.render(this.props.row),
            react_1.default.createElement("div", { className: 'ui-table-content-body-row-actions' },
                Array.isArray(this.props.target.actions) && this.props.target.actions.map(function (action, index) {
                    return (react_1.default.createElement(Button_1.Button, { key: index, label: action.label, onClick: action.onClick && action.onClick.bind(_this, _this.props.row) }));
                }),
                react_1.default.createElement(Button_1.Button, { label: this.props.target.cancelLabel || "Отмена", onClick: this.props.onCancel }))));
    };
    return TableForm;
}(react_1.default.Component));
exports.default = TableForm;
