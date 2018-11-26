import { useState, useEffect } from 'react';

const RES = {
    TABLET: 640,
    MOBILE: 320,
}
/**
 * Использователь браузер
 */
export default () => {

    const calc = () => {
        return {
            height: window.innerHeight,
            width: window.innerWidth,
            isDesktop: window.innerWidth >= RES.TABLET,
            isTablet: window.innerWidth < RES.TABLET && window.innerWidth > RES.MOBILE,
            isMobile: window.innerWidth <= RES.MOBILE,
            info: {
                vendor: navigator.vendor,
                name: navigator.appName,
                version: navigator.appVersion,
                language: navigator.language,
                geolocation: navigator.geolocation,
            }
        };
    }

    const [value, setValue] = useState(calc());

    useEffect(() => {
        const resize = () => {
            setValue(calc())
        }
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    });
    return value;
}