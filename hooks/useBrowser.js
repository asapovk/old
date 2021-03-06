"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RES_MIN = {
    TABLET: 768,
    MOBILE: 414,
    DESKTOP: 1024,
};
/**
 * Использователь браузер
 */
exports.default = (function () {
    var calc = function () {
        return {
            height: window.innerHeight,
            width: window.innerWidth,
            isDesktop: window.innerWidth >= RES_MIN.DESKTOP,
            isTablet: window.innerWidth < RES_MIN.DESKTOP && window.innerWidth >= RES_MIN.TABLET,
            isMobile: window.innerWidth < RES_MIN.TABLET,
            tableMinWidth: RES_MIN.TABLET,
            resolutionMobileMinimum: RES_MIN.MOBILE,
            resolutionTabletMinimum: RES_MIN.TABLET,
            resolutionDesktopMinimum: RES_MIN.DESKTOP,
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
