import { useState, useEffect } from 'react';

/**
 * Использователь размеры браузера
 */
export default () => {
    const [value, setValue] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    useEffect(() => {
        const resize = () => {
            setValue({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    });
    return value;
}