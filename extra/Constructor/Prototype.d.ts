import React, { CSSProperties } from 'react';
interface Prototype {
    isMouted: any;
    $: any;
    $id: any;
    value: any;
    object: any;
    state: any;
}
interface Props {
    styles?: CSSProperties;
    object: any;
    getConstructor: any;
    async?: any;
    controller?: any;
    onAction?: any;
    onValueChange?: any;
    onValueChangeComplete?: any;
}
declare class Prototype extends React.Component<Props> {
    constructor(props: any);
    onValueChange: (id: any, type: any, value: any) => void;
    onValueChangeComplete: (id: any, type: any, value: any) => void;
    /**
     * Неоходимость фиксировать компонент
     * в массиве, который будет отправляться на сервер
     *
     * По умолчанию: false
     */
    static needAppend: boolean;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Возвращаем идентификатор филда
     */
    getComponentID(): any;
    /**
     * Устанавлием значение филда
     */
    setValue(value: any): void;
    /**
     * Установить текст ошибки
     */
    setError(errorMessage: string): void;
    /**
     * Установить флаг сохранения
     */
    setSaving(saving: boolean): void;
    /**
     * Возвращаем значение филда
     */
    getValue(): any;
    /**
     * Валидация значений
     */
    validate(): boolean;
    /**
     * Возвращаем значение и идентификатор компонента в массив
     * для вызова сервиса
     */
    getValues(): {
        $id: any;
        $: any;
        value: any;
        isValid: boolean;
    };
    isVisible(): boolean;
    /**
     * **** EXPERIMENTAL ****
     * Подгружает значения по умолчанию для элемента
     */
    ___updateDefaultValue(): void;
    /**
     * Получить параметр из обьекта
     * Save method
     */
    getProperty(key: string, defaultProp?: any): any;
}
export default Prototype;
