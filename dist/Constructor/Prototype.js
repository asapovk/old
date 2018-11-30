"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var Prototype = /** @class */ (function (_super) {
    __extends(Prototype, _super);
    function Prototype(props) {
        var _this = _super.call(this, props) || this;
        _this.onValueChange = function (id, type, value) {
            //console.warn("Функция onValueChange не определена в классе " + this.constructor.name) 
        };
        _this.onValueChangeComplete = function (id, type, value) {
            //console.warn("Функция onValueChangeComplete не определена в классе " + this.constructor.name) 
        };
        _this.isMouted = false;
        _this.$id = null;
        _this.$ = null;
        _this.value = null;
        _this.object = {};
        _this.state = {
            saving: false,
            error: null
        };
        return _this;
    }
    Prototype.prototype.componentWillMount = function () {
        //@ts-ignore
        if (this.__proto__.constructor.needAppend) {
            if (!this.props.object.$id) {
                //@ts-ignore
                console.warn("\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D ID \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430, \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 " + this.__proto__.constructor.name);
                return;
            }
            this.object = this.props.object;
            this.$id = this.object.$id;
            this.$ = this.object.$;
            if (typeof this.props.onValueChange === "function") {
                this.onValueChange = this.props.onValueChange;
            }
            if (typeof this.props.onValueChangeComplete === "function") {
                this.onValueChangeComplete = this.props.onValueChangeComplete;
            }
            if (typeof this.object.defaultValue !== "undefined") {
                this.value = this.object.defaultValue;
            }
        }
    };
    Prototype.prototype.componentDidMount = function () {
        this.isMouted = true;
    };
    Prototype.prototype.componentWillUnmount = function () {
        this.isMouted = false;
    };
    /**
     * Возвращаем идентификатор филда
     */
    Prototype.prototype.getComponentID = function () {
        return this.$id;
    };
    /**
     * Устанавлием значение филда
     */
    Prototype.prototype.setValue = function (value) {
        var _this = this;
        this.value = value;
        if (this.state.error) {
            this.setError("");
        }
        this.onValueChange(this.$id, this.$, value);
        /**
         * Если у компонента указаны связи
         *  {
         *      $connect: ["SOME_ID_ELEMENT"]
         *  }
         * будет вызван forceUpdate на всех связанных элементах
         */
        if (this.props.object.$connect) {
            var $connect = this.props.object.$connect;
            // Если передан 1 идентификатор оборачиваем в массив
            if (typeof this.props.object.$connect === "string") {
                $connect = [$connect];
            }
            $connect.forEach(function ($id) {
                var component = _this.props.getConstructor().components.find(function (c) { return c.$id === $id; });
                if (component) {
                    component.forceUpdate();
                }
            });
        }
    };
    /**
     * Установить текст ошибки
     */
    Prototype.prototype.setError = function (errorMessage) {
        if (!this.isMouted)
            return;
        this.setState({ error: errorMessage });
    };
    /**
     * Установить флаг сохранения
     */
    Prototype.prototype.setSaving = function (saving) {
        if (!this.isMouted)
            return;
        this.setState({ saving: saving });
    };
    /**
     * Возвращаем значение филда
     */
    Prototype.prototype.getValue = function () {
        return this.value;
    };
    /**
     * Валидация значений
     */
    Prototype.prototype.validate = function () {
        if (this.object.$required) {
            /**
             * Если компонент не видно на странице
             * тогда обязательное свойство игнорируется
             */
            if (this.isVisible() === false) {
                return true;
            }
            if (this.value === null || typeof this.value === "undefined" || this.value === "") {
                this.setError('Поле не заполнено!');
                return false;
            }
        }
        return true;
    };
    /**
     * Возвращаем значение и идентификатор компонента в массив
     * для вызова сервиса
     */
    Prototype.prototype.getValues = function () {
        var isValid = this.validate();
        return {
            $id: this.$id,
            $: this.$,
            value: this.value,
            isValid: isValid
        };
    };
    Prototype.prototype.isVisible = function () {
        var visible = true;
        var object = this.props.object;
        /**
         * Если у элемента есть условия видимости
         *  {
         *      $conditions: {
         *          visible: {
         *              // если значения ID_ELEMENT === 1
         *              if: [
         *                  { "ID_ELEMENT": "1" }
         *              ],
         *              // если значения ID_ELEMENT_2 !== 2
         *              ifnot: [
         *                  { "ID_ELEMENT_2": "5" }
         *              ]
         *          }
         *      }
         *  }
         */
        if (object.$conditions && object.$conditions.visible) {
            var data_1 = this.props.getConstructor().data;
            var findConditions = function (conditionsArray, shouldBeEquils) {
                var _loop_1 = function (i) {
                    var $condition = conditionsArray[i];
                    var key = Object.keys($condition)[0];
                    var dataItem = data_1.find(function (item) { return item.$id === key; }) || { value: undefined };
                    if (dataItem.value === $condition[key]) {
                        if (shouldBeEquils) {
                            return { value: true };
                        }
                        return "continue";
                    }
                    else {
                        if (!shouldBeEquils) {
                            return { value: true };
                        }
                        return "continue";
                    }
                };
                for (var i = 0; i < conditionsArray.length; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                return false;
            };
            if (visible && Array.isArray(object.$conditions.visible.if)) {
                visible = findConditions(object.$conditions.visible.if, true);
            }
            if (visible && Array.isArray(object.$conditions.visible.ifnot)) {
                visible = findConditions(object.$conditions.visible.ifnot, false);
            }
        }
        return visible;
    };
    /**
     * **** EXPERIMENTAL ****
     * Подгружает значения по умолчанию для элемента
     */
    Prototype.prototype.___updateDefaultValue = function () {
        var _a = this.props, controller = _a.controller, object = _a.object;
        if (!controller || !object)
            return;
        var valueObject = controller.data.find(function (item) { return item.$id === object.$id; });
        if (valueObject) {
            this.setValue(valueObject.value);
        }
    };
    /**
     * Получить параметр из обьекта
     * Save method
     */
    Prototype.prototype.getProperty = function (key, defaultProp) {
        if (!this.props.object) {
            return defaultProp;
        }
        if (typeof this.props.object[key] === "undefined") {
            return defaultProp;
        }
        return this.props.object[key];
    };
    /**
     * Неоходимость фиксировать компонент
     * в массиве, который будет отправляться на сервер
     *
     * По умолчанию: false
     */
    Prototype.needAppend = false;
    return Prototype;
}(react_1.default.Component));
exports.default = Prototype;
