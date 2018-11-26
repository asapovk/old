"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RES = {
    TABLET: 640,
    MOBILE: 320,
};
/**
 * Использователь браузер
 */
exports.default = (function () {
    var calc = function () {
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
    };
    var _a = react_1.useState(calc()), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var resize = function () {
            setValue(calc());
        };
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
        };
    });
    return value;
});
