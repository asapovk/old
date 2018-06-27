'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColumns = function (_React$Component) {
    _inherits(TableColumns, _React$Component);

    function TableColumns() {
        _classCallCheck(this, TableColumns);

        return _possibleConstructorReturn(this, (TableColumns.__proto__ || Object.getPrototypeOf(TableColumns)).apply(this, arguments));
    }

    _createClass(TableColumns, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                columns = _props.columns,
                scope = _props.scope;


            return columns.map(function (column) {

                if (!column.render) {
                    column.render = function (row, value) {
                        return value;
                    };
                }

                return _react2.default.createElement('div', {
                    key: column.dataIndex,
                    className: 'ui-table-content-body-row-column ' + column.dataIndex,
                    style: column.width ? { flexBasis: column.width } : { flex: 1 },
                    children: column.render.apply(scope, [data, data[column.dataIndex]])
                });
            });
        }
    }]);

    return TableColumns;
}(_react2.default.Component);

exports.default = TableColumns;