import { useState } from 'react';

/**
 * Сохраняет значение в LS
 * и сделит за ним через state
 */
export default (key: string, defaultValue: any = null, disable?: boolean) => {
    if (disable) {
        return null;
    }
    const [value, setValue] = useState(window.localStorage.getItem(key) || defaultValue);

    return {
        value,
        setValue: (value: string) => {
            setValue(value);
            window.localStorage.setItem(key, value);
        }
    }
}