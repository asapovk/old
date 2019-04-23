"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var core_2 = require("../../core");
var LoginView_1 = __importDefault(require("./LoginView"));
var MainView_1 = __importDefault(require("./MainView"));
var styles_1 = __importDefault(require("./styles"));
exports.default = (function () {
    var _a = react_1.useState('Login'), view = _a[0], setView = _a[1];
    var styles = styles_1.default();
    var ViewSwitcher = function () {
        var View;
        switch (view) {
            case 'Login':
                View = LoginView_1.default;
                break;
            case 'Main':
                View = MainView_1.default;
                break;
        }
        return core_1.jsx(View, { setView: setView });
    };
    return (core_1.jsx(core_2.Flexbox, { css: styles.container },
        core_1.jsx("div", { css: styles.background }),
        core_1.jsx(ViewSwitcher, null)));
});
// LOGIN VIEW
// <CSSTransition
//                 in={!main}
//                 timeout={duration}
//                 unmountOnExit
//                 addEndListener={(node) => {
//                     node.addEventListener('ontransitionend', () => setMain(true), true);
//                 }}
//             >
//                 {state => (
//                     <Flexbox flex={1} css={css({
//                         transition: `opacity ${duration}ms ease-in-out`,
//                         ...transitionStyles[state]
//                     })}>
//                         {/* <div style={{ backgroundColor: 'green', height: '100%', width: '100%' }}></div> */}
//                         <LoginView visible={!main} setMain={() => setMain(!main)} />
//                     </Flexbox>
//                 )}
//             </CSSTransition>
