"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var tabs = props.tabs, reverseContainer = props.reverseContainer;
    var styles = styles_1.default({ reverseContainer: reverseContainer });
    react_1.useEffect(function () {
        removeHash();
        setSmoothAnimation();
        // isElementInViewport();
        // const viewport = document.querySelector('[data-viewport]')
        // viewport && viewport.addEventListener('scroll', onWindowScroll);
        // return () => viewport && document.removeEventListener('scroll', onWindowScroll);
    }, []);
    function setSmoothAnimation() {
        var anchorlinks = document.querySelectorAll('div[data-href]');
        var _loop_1 = function (item) {
            item.addEventListener('click', function (event) {
                var hashval = item.getAttribute('data-href');
                var target = document.querySelector(hashval);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                history.pushState(null, document.title, hashval);
                event.preventDefault();
            });
        };
        //@ts-ignore
        for (var _i = 0, anchorlinks_1 = anchorlinks; _i < anchorlinks_1.length; _i++) {
            var item = anchorlinks_1[_i];
            _loop_1(item);
        }
    }
    // function onWindowScroll(event) {
    //     let tabs = document.querySelectorAll('[data-tab-container]');
    //     if (tabs) {
    //         tabs.forEach(tab => {
    //             if (isElementInViewport(tab)) {
    //                 let hashval = tab.getAttribute('id');
    //                 history.pushState(null, document.title, `#${hashval}`);
    //                 event.preventDefault();
    //             }
    //         });
    //     }
    // }
    // function isElementInViewport(el) {
    //     const rect = el.getBoundingClientRect();
    //     console.log(rect.bottom, window.innerHeight);
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right >= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }
    function removeHash() {
        var scrollV, scrollH, loc = window.location;
        if ("pushState" in history) {
            history.pushState("", document.title, loc.pathname + loc.search);
        }
        else {
            // Prevent scrolling by storing the page's current scroll offset
            scrollV = document.body.scrollTop;
            scrollH = document.body.scrollLeft;
            loc.hash = "";
            // Restore the scroll offset, should be flicker free
            document.body.scrollTop = scrollV;
            document.body.scrollLeft = scrollH;
        }
    }
    return (core_1.jsx("div", { css: styles.container },
        core_1.jsx("div", { css: styles.content }, tabs.map(function (tab) { return (core_1.jsx("div", { id: tab.key, "data-tab-container": true, key: "tabcnt-" + tab.key, css: styles.tab }, tab.content)); })),
        core_1.jsx("div", { css: styles.menu }, tabs.map(function (tab) { return (core_1.jsx("div", { "data-href": "#" + tab.key, key: "tab-" + tab.key, css: styles.menuItem(location.hash === "#" + tab.key) }, tab.title)); }))));
});
