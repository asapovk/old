import React from 'react';

interface Prototype {
    isMouted: any
    $: any
    $id: any
    value: any
    object: any
    state: any
}

interface Props {
    object: any
    getConstructor: any
    async?: any
    controller?: any
    onAction?: any
    onValueChange?: any
    onValueChangeComplete?: any
}

class Prototype extends React.Component<Props> {
    constructor(props) {
        super(props);

        this.isMouted = false;
        this.$id = null;
        this.$ = null;
        this.value = null;
        this.object = {};

        this.state = {
            saving: false,
            error: null
        }
    }

    onValueChange = (id, type, value) => {
        //console.warn("Функция onValueChange не определена в классе " + this.constructor.name) 
    }

    onValueChangeComplete = (id, type, value) => {
        //console.warn("Функция onValueChangeComplete не определена в классе " + this.constructor.name) 
    }

    /**
     * Неоходимость фиксировать компонент
     * в массиве, который будет отправляться на сервер
     * 
     * По умолчанию: false
     */
    static needAppend = false;

    componentWillMount() {
        //@ts-ignore
        if (this.__proto__.constructor.needAppend) {
            if (!this.props.object.$id) {
                //@ts-ignore
                console.warn(`В шаблоне не указан ID параметра, компонент ${this.__proto__.constructor.name}`);
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
    }

    componentDidMount() {
        this.isMouted = true;
    }

    componentWillUnmount() {
        this.isMouted = false;
    }

    /**
     * Возвращаем идентификатор филда
     */
    getComponentID() {
        return this.$id;
    }

    /**
     * Устанавлием значение филда
     */
    setValue(value: string) {
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
            let { $connect } = this.props.object;
            // Если передан 1 идентификатор оборачиваем в массив
            if (typeof this.props.object.$connect === "string") {
                $connect = [$connect];
            }
            $connect.forEach($id => {

                const component = this.props.getConstructor().components.find(c => c.$id === $id);

                if (component) {
                    component.forceUpdate();
                }
            })
        }
    }

    /**
     * Установить текст ошибки 
     */
    setError(errorMessage: string) {
        if (!this.isMouted) return;

        this.setState({ error: errorMessage });
    }

    /**
     * Установить флаг сохранения
     */
    setSaving(saving: boolean) {
        if (!this.isMouted) return;

        this.setState({ saving });
    }


    /**
     * Возвращаем значение филда
     */
    getValue() {
        return this.value;
    }

    /**
     * Валидация значений
     */
    validate() {
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
    }

    /**
     * Возвращаем значение и идентификатор компонента в массив
     * для вызова сервиса
     */
    getValues() {
        const isValid = this.validate();

        return {
            $id: this.$id,
            $: this.$,
            value: this.value,
            isValid
        };
    }

    isVisible() {
        let visible = true;
        const { object } = this.props;

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
            const { data } = this.props.getConstructor();
            console.log(object)

            const findConditions = (conditionsArray, shouldBeEquils) => {
                for (let i = 0; i < conditionsArray.length; i++) {
                    const $condition = conditionsArray[i];
                    const key = Object.keys($condition)[0];
                    const dataItem = data.find(item => item.$id === key) || { value: undefined };

                    if (dataItem.value === $condition[key]) {
                        if (shouldBeEquils) {
                            return true;
                        }
                        continue;
                    } else {
                        if (!shouldBeEquils) {
                            return true;
                        }
                        continue;
                    }
                }
                return false;
            }
            if (visible && Array.isArray(object.$conditions.visible.if)) {
                visible = findConditions(object.$conditions.visible.if, true);
            }
            if (visible && Array.isArray(object.$conditions.visible.ifnot)) {
                visible = findConditions(object.$conditions.visible.ifnot, false);
            }
        }
        return visible;
    }

    /**
     * **** EXPERIMENTAL ****
     * Подгружает значения по умолчанию для элемента
     */
    ___updateDefaultValue() {
        const { controller, object } = this.props;

        if (!controller || !object) return;

        const valueObject = controller.data.find(item => item.$id === object.$id);

        if (valueObject) {
            this.setValue(valueObject.value);
        }
    }

    /**
     * Получить параметр из обьекта
     * Save method
     */
    getProperty(key: string, defaultProp?: any) {
        if (!this.props.object) {
            return defaultProp;
        }
        if (typeof this.props.object[key] === "undefined") {
            return defaultProp;
        }
        return this.props.object[key]
    }
}

export default Prototype;