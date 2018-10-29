
import React from 'react';

import CFlex from './CFlex';
import CTextField from './CTextField';
import CSpoiler from './CSpoiler';
import CSelectField from './CSelectField';
// import CDatePicker from './CDatePicker';
import CCheckBox from './CCheckBox';
import CText from './CText';
import CButton from './CButton';
import CTitle from './CTitle';
import CDivider from './CDivider';
// import CAttachment from './CAttachment';

//Для ЛКА Газ
// import CGasEquipmentAdd from './CGasEquipmentAdd';
// import CGasAnimalsAdd from './CGasAnimalsAdd';
// import CGasBenefitAdd from './CGasBenefitAdd';

interface Constructor {
    $$render: (any) => any

    components: any[]
    data: any[]
}

interface Props {
    defaultValues: any
    async: boolean
    onChange: any
    onAction: (data: any, onSuccess: () => void) => void
    template: any
}

class Constructor extends React.Component<Props> {

    static defaultProps = {
        //Meta data JSON
        template: {},
        //Default values :)
        defaultValues: [],
        onAction: action => { },
        onChange: data => { },
        //Ожидать сохранение данных
        async: false,
    }

    constructor(props) {
        super(props);

        //Ссылки на компоненты
        this.components = [];
        //Заполненые данные
        this.data = [];

        const Component = (props) => {
            if (!props.object) {
                return null;
            }
            if (Array.isArray(props.object)) {
                return props.object.map((object, i) => <Component object={object} key={i} />)
            }
            return CreateComponent(props.object);
        }

        const addRef = (component) => {
            if (!component || !component.$id) {
                return;
            }

            this.components.push(component);
        }

        const CreateComponent = (object) => {

            if (object.defaultValue) {
                this.updateData({
                    $id: object.$id,
                    $: object.$,
                    value: object.defaultValue
                });
            }

            this.props.defaultValues.map(dv => {
                if (dv.$id == object.$id) {
                    object.defaultValue = dv.value
                }
            });

            switch (object.$) {
                case "flex":
                case "flexbox":
                    return (
                        <CFlex
                            getConstructor={_ => this}
                            object={object}
                            key={object.$id}
                            children={<Component object={object.$children} />}
                        />
                    );
                case "text":
                    return (
                        <CText
                            getConstructor={_ => this}
                            object={object}
                            key={object.$id}
                        />
                    );
                case "divider":
                    return (
                        <CDivider
                            getConstructor={_ => this}
                            object={object}
                            key={object.$id}
                        />
                    );
                case "select":
                case "selectfield":
                    return <CSelectField
                        getConstructor={_ => this}
                        object={object}
                        key={object.$id}
                        ref={addRef}
                        onValueChange={this.onChange.bind(this)}
                    />;
                case "title":
                    return <CTitle
                        getConstructor={_ => this}
                        object={object}
                        key={object.$id}
                        ref={addRef}
                    />;
                case "textfield":
                    return (
                        <CTextField
                            getConstructor={_ => this}
                            object={object}
                            key={object.$id}
                            ref={addRef}
                            async={this.props.async}
                            onValueChange={this.onChange.bind(this)}
                        />
                    );
                case "spoiler":
                    return (
                        <CSpoiler
                            getConstructor={_ => this}
                            object={object}
                            key={object.$id}
                            ref={addRef}
                            onValueChange={this.onChange.bind(this)}
                            children={<Component object={object.$children} />}
                        />
                    );
                // case "datepicker":
                //     return (
                //         <CDatePicker
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.$id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );
                case "checkbox":
                    return (
                        <CCheckBox
                            getConstructor={_ => this}
                            object={object}
                            key={object.$id}
                            ref={addRef}
                            onValueChange={this.onChange.bind(this)}
                        />
                    );
                case "button":
                    return (
                        <CButton
                            getConstructor={_ => this}
                            object={object}
                            key={object.$id}
                            ref={addRef}
                            onAction={this.props.onAction}
                        />
                    );
                // case "attachment":
                //     return (
                //         <CAttachment
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.$id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );

                // case "gas_equipment_add":
                //     return (
                //         <CGasEquipmentAdd
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.$id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );

                // case "gas_animals_add":
                //     return (
                //         <CGasAnimalsAdd
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.$id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );

                // case "gas_benefit_add":
                //     return (
                //         <CGasBenefitAdd
                //             getConstructor={_ => this}
                //             object={object}
                //             key={object.$id}
                //             ref={addRef}
                //             onValueChange={this.onChange.bind(this)}
                //         />
                //     );
                case "any":
                    return object.$children;
                default:
                    return (
                        <span
                            style={{
                                display: "inline-block",
                                color: "red",
                                padding: "5px 10px",
                                border: "4px double red",
                            }}
                            children={`Incorrent $: "${object.$}"`}
                        />
                    );
            }
        };

        this.$$render = (template) => {
            return <Component object={template} />;
        };
    }

    /**
     * Для оптимизации
     * если нужно обновить
     * вызываем forceUpdate через reference
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    /**
     * Обновить данные в объекте this.data
     */
    updateData(valueObject: any) {
        const index = this.data.findIndex(item => item.$id === valueObject.$id);

        if (index >= 0) {
            this.data[index] = valueObject;
        } else {
            this.data.push(valueObject);
        }
    }

    /**
     * Отдаем полные данные в констурктор
     * 
     */
    onChange($id, $, value) {
        const valueObject = { $id, $, value };

        this.updateData(valueObject);

        const Cmp = this.components.find(cmp => cmp.$id === $id);

        if (Cmp && this.props.async) {
            Cmp.setSaving(true);
        }

        const onSuccess = () => {
            if (!Cmp || !this.props.async) return;
            Cmp.setSaving(false);
        }
        const onError = (err) => {
            if (!Cmp || !this.props.async) return;
            Cmp.setSaving(false);

            if (err) {
                Cmp.setError(err);
            }
        }

        this.props.onChange(valueObject, onSuccess, onError);
    }

    /**
     * Проверка формы
     */
    isValid() {
        let valid = true;

        for (let i = 0; this.components.length > i; i++) {

            const component = this.components[i];
            const valueObject = component.getValues();

            if (!valueObject.isValid) {
                valid = false;
            } else {
                this.updateData(valueObject);
            }
        }
        return valid;
    }

    render() {
        return this.$$render(this.props.template);
    }
}

export default Constructor;