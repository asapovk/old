'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./style.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                indexKey = _props.indexKey,
                selectedItems = _props.selectedItems,
                expandItemId = _props.expandItemId,
                editItemId = _props.editItemId,
                newItem = _props.newItem,
                EditForm = _props.EditForm;


            return _react2.default.createElement(
                'div',
                { className: 'ui-table' },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-table-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-table-content-head-row' },
                        this.props.columns.map(function (column) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'ui-table-content-head-row-column ' + column.dataIndex, key: column.dataIndex, style: column.width ? { flexBasis: column.width } : { flex: 1 } },
                                column.title
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-table-content-body' },
                        newItem && _react2.default.createElement(EditForm, null),
                        this.props.data.map(function (row, index) {
                            return _react2.default.createElement(_TableRow2.default, _extends({}, _this2.props, {

                                key: row[indexKey] || index,
                                data: row,
                                selected: selectedItems.findIndex(function (item) {
                                    return item === row[indexKey];
                                }) >= 0,
                                isExpanding: expandItemId == row[indexKey],
                                isEditing: editItemId == row[indexKey] && typeof row[indexKey] != "undefined",
                                isBlur: editItemId
                            }));
                        })
                    )
                )
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

Table.defaultProps = {
    // Массив данных
    data: [],
    // Массив колонок
    columns: [],
    // Ключ индекса
    indexKey: '',
    // Массив выбранных строк (идентификаторы)
    selectedItems: [],
    // Идентификатор элемента который изменяется
    expandItemId: null,
    // Идентификатор элемента под строкой
    editItemId: null,
    // Компонент с формой под строкой
    ExpandForm: null,
    // Компонент с формой редактирования
    EditForm: null,
    // Массив кнопок для строки
    rowActions: [],
    // Массив кнопок для формы редактирования
    editActions: []
};
exports.default = Table;