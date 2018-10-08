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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Styles_1 = require("../Styles");
var react_1 = __importStar(require("react"));
var Viewport = /** @class */ (function (_super) {
    __extends(Viewport, _super);
    function Viewport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            mountedActions: []
        };
        return _this;
    }
    Viewport.prototype.componentDidMount = function () {
        //@ts-ignore
        document.__uiviewport = this;
    };
    /**
     * Добавляет компонент в viewport
     * возвращает индекс
     */
    Viewport.prototype.mountAction = function (component, id, extra) {
        var index = this.state.mountedActions.length;
        this.setState({
            mountedActions: this.state.mountedActions.concat([{ component: component, id: id, extra: extra }])
        });
        return index;
    };
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    Viewport.prototype.unmountAction = function (index) {
        if (this.state.mountedActions[index]) {
            this.setState({
                mountedActions: this.state.mountedActions.filter(function (item, i) { return i !== index; })
            });
        }
    };
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    Viewport.prototype.getActionById = function (id) {
        return this.state.mountedActions.find(function (action) { return action.id === id; }) || null;
    };
    Viewport.prototype.render = function () {
        var uiStyles = Styles_1.createStyles(this.props.theme);
        return (react_1.default.createElement(Styles_1.StylesContext.Provider, { value: uiStyles },
            react_1.default.createElement("div", { "data-viewport": true, className: 'ui-view', id: '0cd82567-7684-4147-ab02-dd3c56332364', style: __assign({}, this.props.style, uiStyles.viewport.main) },
                this.props.children,
                this.state.mountedActions.map(function (action, index) {
                    return react_1.default.createElement(react_1.Fragment, { key: index }, action.component);
                }))));
    };
    return Viewport;
}(react_1.Component));
exports.default = Viewport;
