import { useState, SyntheticEvent } from 'react';
import useLocalStorage from './useLocalStorage';

export interface UseTextFieldInput {
    defaultValue?: string
    /**
     * ID использутеься для сохранения
     * - Должен быть уникальным в рамках экрана
     * - Если используеться одинаковый id в разных экранах
     * то значение будет одинаковое
     */
    id?: string
}

/**
 * Использоватеть тексовое поле
 */
export default (opt?: UseTextFieldInput) => {
    const localstorage = useLocalStorage("TEXT_FIELD_VALUE_" + (opt && opt.id), "", !Boolean(opt && opt.id));
    const [value, setValue] = useState(localstorage ? localstorage.value : (opt && opt.defaultValue || ""));

    return {
        value,
        onChange: (event: { target: HTMLInputElement }) => {
            setValue(event.target.value);
            localstorage && localstorage.setValue(event.target.value);
        },
    }
}