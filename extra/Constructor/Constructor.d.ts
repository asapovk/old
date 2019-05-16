import React from 'react';
interface Constructor {
    $$render: (any: any) => any;
    components: any[];
    data: any[];
}
interface Props {
    defaultValues: any;
    async: boolean;
    onChange: any;
    onAction: (data: any, onSuccess: () => void) => void;
    template: any;
}
declare class Constructor extends React.Component<Props> {
    static defaultProps: {
        template: {};
        defaultValues: never[];
        onAction: (action: any) => void;
        onChange: (data: any) => void;
        async: boolean;
    };
    constructor(props: any);
    /**
     * Для оптимизации
     * если нужно обновить
     * вызываем forceUpdate через reference
     */
    shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): boolean;
    /**
     * Обновить данные в объекте this.data
     */
    updateData(valueObject: any): void;
    /**
     * Отдаем полные данные в констурктор
     *
     */
    onChange($id: any, $: any, value: any): void;
    /**
     * Проверка формы
     */
    isValid(): boolean;
    render(): any;
}
export default Constructor;
