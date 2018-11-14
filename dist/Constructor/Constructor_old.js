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
var CFlex_1 = __importDefault(require("./CFlex"));
var CTextField_1 = __importDefault(require("./CTextField"));
// import CSpoiler from './CSpoiler';
var CSelectField_1 = __importDefault(require("./CSelectField"));
// import CDatePicker from './CDatePicker';
// import CCheckBox from './CCheckBox';
var CText_1 = __importDefault(require("./CText"));
var CButton_1 = __importDefault(require("./CButton"));
var CTitle_1 = __importDefault(require("./CTitle"));
var Constructor = /** @class */ (function (_super) {
    __extends(Constructor, _super);
    function Constructor(props) {
        var _this = _super.call(this, props) || this;
        //Ссылки на компоненты
        _this.components = [];
        //Заполненые данные
        _this.data = [];
        var Component = function (props) {
            if (!props.object) {
                return null;
            }
            if (Array.isArray(props.object)) {
                return props.object.map(function (object, i) { return react_1.default.createElement(Component, { object: object, key: i }); });
            }
            return CreateComponent(props.object);
        };
        var addRef = function (component) {
            if (!component || !component.id) {
                return;
            }
            _this.components.push(component);
        };
        var CreateComponent = function (object) {
            if (object.defaultValue) {
                _this.updateData({
                    id: object.id,
                    type: object.type,
                    value: object.defaultValue
                });
            }
            _this.props.defaultValues.map(function (dv) {
                if (dv.id == object.id) {
                    object.defaultValue = dv.value;
                }
            });
            switch (object.type) {
                case "flex":
                    return (react_1.default.createElement(CFlex_1.default, { getConstructor: function (_) { return _this; }, object: object, key: object.id, children: react_1.default.createElement(Component, { object: object.children }) }));
                case "text":
                    return (react_1.default.createElement(CText_1.default, { getConstructor: function (_) { return _this; }, object: object, key: object.id }));
                // case "divider":
                //     return (
                //         <CDivider
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.id}
                //         />
                //     );
                case "selectfield":
                    return react_1.default.createElement(CSelectField_1.default, { getConstructor: function (_) { return _this; }, object: object, key: object.id, ref: addRef, onValueChange: _this.onChange.bind(_this) });
                case "title":
                    return react_1.default.createElement(CTitle_1.default, { getConstructor: function (_) { return _this; }, object: object, key: object.id, ref: addRef });
                case "textfield":
                    return (react_1.default.createElement(CTextField_1.default, { getConstructor: function (_) { return _this; }, object: object, key: object.id, ref: addRef, async: _this.props.async, onValueChange: _this.onChange.bind(_this) }));
                // case "spoiler":
                //     return (
                //         <CSpoiler
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //             children={<Component object={object.children} />}
                //         />
                //     );
                // case "datepicker":
                //     return (
                //         <CDatePicker
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );
                // case "checkbox":
                //     return (
                //         <CCheckBox
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );
                case "button":
                    return (react_1.default.createElement(CButton_1.default, { getConstructor: function (_) { return _this; }, object: object, key: object.id, ref: addRef, onAction: _this.props.onAction }));
                // case "attachment":
                //     return (
                //         <CAttachment
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );
                // case "gas_equipment_add":
                //     return (
                //         <CGasEquipmentAdd
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );
                // case "gas_animals_add":
                //     return (
                //         <CGasAnimalsAdd
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );
                // case "gas_benefit_add":
                //     return (
                //         <CGasBenefitAdd
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );
                default:
                    return (react_1.default.createElement("span", { style: {
                            display: "inline-block",
                            color: "red",
                            padding: "5px 10px",
                            border: "4px double red",
                        }, children: "Incorrent type: \"" + object.type + "\"" }));
            }
        };
        _this.$$render = function (template) {
            return react_1.default.createElement(Component, { object: template });
        };
        return _this;
    }
    /**
     * Для оптимизации
     * если нужно обновить
     * вызываем forceUpdate через reference
     */
    Constructor.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        return false;
    };
    /**
     * Обновить данные в объекте this.data
     */
    Constructor.prototype.updateData = function (valueObject) {
        var index = this.data.findIndex(function (item) { return item.id === valueObject.id; });
        if (index >= 0) {
            this.data[index] = valueObject;
        }
        else {
            this.data.push(valueObject);
        }
    };
    /**
     * Отдаем полные данные в констурктор
     *
     */
    Constructor.prototype.onChange = function (id, type, value) {
        var _this = this;
        var valueObject = { id: id, type: type, value: value };
        this.updateData(valueObject);
        var Cmp = this.components.find(function (cmp) { return cmp.id === id; });
        if (Cmp && this.props.async) {
            Cmp.setSaving(true);
        }
        var onSuccess = function () {
            if (!Cmp || !_this.props.async)
                return;
            Cmp.setSaving(false);
        };
        var onError = function (err) {
            if (!Cmp || !_this.props.async)
                return;
            Cmp.setSaving(false);
            if (err) {
                Cmp.setError(err);
            }
        };
        this.props.onChange(valueObject, onSuccess, onError);
    };
    /**
     * Проверка формы
     */
    Constructor.prototype.isValid = function () {
        var valid = true;
        for (var i = 0; this.components.length > i; i++) {
            var component = this.components[i];
            var valueObject = component.getValues();
            if (!valueObject.isValid) {
                valid = false;
            }
            else {
                this.updateData(valueObject);
            }
        }
        return valid;
    };
    Constructor.prototype.render = function () {
        return this.$$render(this.props.template);
    };
    Constructor.defaultProps = {
        //Meta data JSON
        template: {},
        //Default values :)
        defaultValues: [],
        onAction: function (action) { },
        onChange: function (data) { },
        //Ожидать сохранение данных
        async: false,
    };
    return Constructor;
}(react_1.default.Component));
exports.default = Constructor;
