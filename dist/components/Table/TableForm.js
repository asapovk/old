'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Form) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.state = {
                invalidItems: new Set()
            };
            _this.setData = _this.setData.bind(_this);
            _this.setValid = _this.setValid.bind(_this);
            return _this;
        }

        _createClass(_class, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                this.formData = Object.assign(this.props.data);
            }
        }, {
            key: 'setData',
            value: function setData(field, value) {
                this.formData[field] = value;
                console.log(this.formData);
            }
        }, {
            key: 'setValid',
            value: function setValid(id, isValid) {
                var items = this.state.invalidItems;
                isValid ? items.delete(id) : items.add(id);
                this.setState({ invalidItems: items });
                this.save.disabled = items.size > 0 ? true : false;
            }
        }, {
            key: 'Column',
            value: function Column(props) {
                var width = props.width ? { flexBasis: props.width } : { flex: 1 };
                return React.createElement('div', {
                    className: 'ui-table-content-body-row-column' + (props.className ? ' ' + props.className : ''),
                    children: props.children,
                    style: Object.assign(width, props.style)
                });
            }
        }, {
            key: 'Subrow',
            value: function Subrow(props) {
                return React.createElement('div', {
                    className: 'ui-table-content-body-row-column-subrow' + (props.className ? ' ' + props.className : ''),
                    children: props.children,
                    style: props.style
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                return React.createElement(
                    'div',
                    { className: 'ui-table-content-body-row edited' },
                    React.createElement(Form, _extends({}, this.props, { setData: this.setData, setValid: this.setValid, Column: this.Column, Subrow: this.Subrow })),
                    React.createElement(
                        'div',
                        { className: 'ui-table-content-body-row-actions' },
                        React.createElement(
                            'div',
                            { className: 'ui-table-content-body-row-actions-buttons-edit' },
                            this.props.Actions.map(function (action, index) {
                                return React.createElement('button', {
                                    key: action.key || index,
                                    className: action.className,
                                    onClick: function onClick(_) {
                                        return action.onClick(_this2.formData);
                                    },
                                    children: action.label || "Label",
                                    ref: function ref(_ref) {
                                        return _this2[action.ref] = _ref;
                                    }
                                });
                            })
                        )
                    )
                );
            }
        }]);

        return _class;
    }(React.Component), _class.defaultProps = {
        data: []
    }, _temp;
};