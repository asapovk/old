"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// import Icon from '../Icon';
var Button_1 = require("../../Button");
exports.default = (function (props) { return (react_1.default.createElement(Button_1.Button, { label: props.label, onClick: props.onClick })); });
// export default props => (
//     <div className='ui-table-content-body-row-actions-buttons'>
//         {/* <Icon type='more' /> */}
//         <Button
//             label={props.label}
//             onClick={props.onClick}
//         />
//     </div>
// )