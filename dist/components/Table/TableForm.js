'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Form) {
    return function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.state = {
                invalid: []
            };
            return _this;
        }

        _createClass(_class, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                this.data = this.props.data;
            }
        }, {
            key: 'formValid',
            value: function formValid(id, isValid) {
                var items = this.state.invalid;
                if (isValid) {
                    items = this.state.invalid.filter(function (f) {
                        return f !== id;
                    });
                    this.setState({ invalid: items });
                } else if (!this.state.invalid.find(function (f) {
                    return f === id;
                })) {
                    items = [].concat(_toConsumableArray(items), [id]);
                    this.setState({ invalid: items });
                }
                this.save.disabled = items.length > 0 ? true : false;
            }
        }, {
            key: 'Column',
            value: function Column(props) {
                var width = props.width ? { flexBasis: props.width } : { flex: 1 };
                return React.createElement('div', {
                    className: 'ui-table-content-body-row-column' + (props.className ? ' ' + props.className : null),
                    children: props.children,
                    style: Object.assign(width, props.style)
                });
            }
        }, {
            key: 'Subrow',
            value: function Subrow(props) {
                return React.createElement('div', {
                    className: 'ui-table-content-body-row-subrow' + (props.className ? ' ' + props.className : null),
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
                    React.createElement(Form, _extends({}, this.props, { formValid: this.formValid, Column: this.Column })),
                    React.createElement(
                        'div',
                        { className: 'ui-table-content-body-row-actions' },
                        React.createElement(
                            'div',
                            { className: 'ui-table-content-body-row-actions-buttons-edit' },
                            this.props.editActions.map(function (action, index) {
                                return React.createElement('button', {
                                    key: action.key || index,
                                    className: action.className,
                                    onClick: function onClick(_) {
                                        return action.onClick(_this2.data);
                                    },
                                    children: action.label || "Label",
                                    ref: function ref(_ref) {
                                        return _this2[action.ref] = _ref;
                                    },
                                    disabled: _this2.state.disabled
                                });
                            })
                        )
                    )
                );
            }
        }]);

        return _class;
    }(React.Component);
};