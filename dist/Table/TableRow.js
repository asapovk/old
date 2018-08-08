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
const react_1 = __importStar(require("react"));
//import TableCheckbox from './TableCheckbox';
//import TableActions from './TableActions';
const TableColumns_1 = __importDefault(require("./TableColumns"));
class TableRow extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            onSelect: true
        };
    }
    onClick() {
    }
    render() {
        const { data, isSelected, isExpanding, isBlur, actions, border, scope } = this.props;
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("div", { className: `ui-table-content-body-row ${isBlur ? 'blur' : 'hover'}`, onClick: _ => this.onClick() },
                react_1.default.createElement(TableColumns_1.default, Object.assign({}, this.props)))));
    }
}
exports.default = TableRow;
//# sourceMappingURL=TableRow.js.map