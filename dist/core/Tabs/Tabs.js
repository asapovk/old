"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
var __1 = require("..");
var Icon_1 = require("../Icon");
var manualSettedTabKey;
var timer;
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
        var buttons = document.querySelectorAll('div[data-tab]');
        buttons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                var buttonId = button.getAttribute('data-tab');
                if (buttonId) {
                    var target = document.querySelector("[data-content-id=" + buttonId + "]");
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                        event.preventDefault();
                    }
                }
            });
        });
    }
    function onWindowScroll() {
        var tabs = document.querySelectorAll('[data-content-id]');
        if (tabs) {
            var active_1 = false;
            tabs.forEach(function (tab) {
                if (!active_1) {
                    if (manualSettedTabKey) {
                        if (timer) {
                            clearTimeout(timer);
                        }
                        timer = setTimeout(function () { manualSettedTabKey = ''; }, 100);
                    }
                    var rect = tab.getBoundingClientRect();
                    if (rect.height / 3 > -rect.top) {
                        active_1 = true;
                        if (!manualSettedTabKey) {
                            setCurrentId(tab.getAttribute('data-content-id'));
                        }
                    }
                }
            });
        }
    }
    return (core_1.jsx("div", { css: styles.container },
        core_1.jsx("div", { css: styles.content }, tabs.map(function (tab) { return (core_1.jsx("div", { "data-content-id": tab.key, key: "tabcnt-" + tab.key, children: tab.content, css: styles.tab(tab.key == currentId) })); })),
        core_1.jsx("div", { css: styles.menu }, tabs.map(function (tab, index) { return (core_1.jsx(__1.Flexbox, { key: index, onClick: function () {
                manualSettedTabKey = tab.key;
                setCurrentId(tab.key);
            } },
            core_1.jsx(__1.Flexbox, { justifyContent: 'center', alignItems: 'center', css: core_1.css({ marginRight: '.75rem' }) },
                core_1.jsx(Icon_1.Icon, { shape: 'oval', size: '1.5rem', type: tab.icon, color: tab.key === currentId ? 'highlight' : 'light' })),
            core_1.jsx("div", { "data-tab": tab.key, key: "tab-" + tab.key, children: tab.title, css: styles.menuItem(tab.key == currentId) }))); }))));
});
