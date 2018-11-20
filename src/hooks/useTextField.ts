import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export interface UseTextFieldInput {
    defaultValue?: string
    id?: string
}

/**
 * Хук для текст филда
 * стейт + сохранение в LS
 */
export default (opt?: UseTextFieldInput) => {
    const localstorage = useLocalStorage("TEXT_FIELD_VALUE_" + (opt && opt.id), "", !Boolean(opt && opt.id));
    const [value, setValue] = useState(localstorage ? localstorage.value : (opt && opt.defaultValue || ""));

    return {
        value,
        onChange: (value: string) => {
            setValue(value);
            localstorage && localstorage.setValue(value);
        },
    }
}