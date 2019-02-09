"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
var __1 = require("../..");
exports.default = (function (props) {
    var tabs = props.tabs, reverseContainer = props.reverseContainer;
    var styles = styles_1.default({ reverseContainer: reverseContainer });
    var _a = react_1.useState(''), currentId = _a[0], setCurrentId = _a[1];
    react_1.useEffect(function () {
        setSmoothAnimation();
        var viewport = document.querySelector('[data-viewport]');
        viewport && viewport.addEventListener('scroll', onWindowScroll);
        return function () {
            viewport && document.removeEventListener('scroll', onWindowScroll);
        };
    }, []);
    function setSmoothAnimation() {
        var anchorlinks = document.querySelectorAll('div[data-tab]');
        anchorlinks.forEach(function (item) {
            item.addEventListener('click', function (event) {
                var tabId = item.getAttribute('data-tab');
                if (tabId) {
                    var target = document.querySelector(tabId);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                        event.preventDefault();
                    }
                }
            });
        });
    }
    function onWindowScroll() {
        var tabs = document.querySelectorAll('[data-tab-container]');
        if (tabs) {
            var active_1;
            tabs.forEach(function (tab) {
                var rect = tab.getBoundingClientRect();
                if (!active_1 && rect.height / 3 > -rect.top) {
                    active_1 = tab;
                }
            });
            if (active_1) {
                var id = active_1.getAttribute('id');
                if (document.location.hash !== "" + id) {
                    setCurrentId(id);
                }
            }
        }
    }
    return (core_1.jsx("div", { css: styles.container },
        core_1.jsx("div", { css: styles.content }, tabs.map(function (tab) { return (core_1.jsx("div", { "data-tab-container": true, id: tab.key, key: "tabcnt-" + tab.key, children: tab.content, css: styles.tab })); })),
        core_1.jsx("div", { css: styles.menu }, tabs.map(function (tab) { return (core_1.jsx("div", { "data-tab": tab.key, key: "tab-" + tab.key, children: (core_1.jsx(__1.C1, null, tab.title)), css: styles.menuItem(tab.key == currentId) })); }))));
});
