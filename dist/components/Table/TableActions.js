'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'ui-table-content-body-row-actions' },
        _react2.default.createElement(_Icon2.default, { type: 'more' }),
        _react2.default.createElement(
            'div',
            { className: 'ui-table-content-body-row-actions-buttons' },
            props.rowActions.map(function (action, index) {
                return _react2.default.createElement(
                    'button',
                    { key: action.key || index, className: action.className, onClick: function onClick(event) {
                            event.stopPropagation();
                            action.onClick(props.data);
                        } },
                    action.label
                );
            })
        )
    );
};