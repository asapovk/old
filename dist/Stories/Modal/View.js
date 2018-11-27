"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var Stories_1 = require("../Stories");
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
var PrevButton_1 = __importDefault(require("./PrevButton"));
var NextButton_1 = __importDefault(require("./NextButton"));
var timeout;
exports.default = (function (props) {
    var browser = useBrowser_1.default();
    var ctx = Stories_1.useStoriesContext();
    var _a = react_1.useState(0), slide = _a[0], setSlide = _a[1];
    var stories = props.stories;
    var currentStoryIndex = ctx.currentStoryIndex, setStory = ctx.setStory, modalClose = ctx.modalClose;
    function changeSlide(index) {
        window.clearTimeout(timeout);
        setSlide(index);
    }
    function onNext() {
        if (slide < stories[currentStoryIndex].slides.length - 1) {
            changeSlide(slide + 1);
        }
        else {
            if (currentStoryIndex < stories.length - 1) {
                setStory(currentStoryIndex + 1);
                changeSlide(0);
            }
            else {
                modalClose();
            }
        }
    }
    function onPrev() {
        if (slide === 0) {
            if (currentStoryIndex !== 0) {
                setStory(currentStoryIndex - 1);
            }
        }
        else {
            changeSlide(slide - 1);
        }
    }
    react_1.useEffect(function () {
        timeout = window.setTimeout(function () { return onNext(); }, 2000);
    }, [slide]);
    return (react_1.default.createElement(__1.Flexbox, { alignItems: "center", justifyContent: "center", style: { height: !browser.isMobile ? "100%" : "auto" } },
        react_1.default.createElement(__1.Flexbox, { style: { minWidth: 320, minHeight: 480 } },
            react_1.default.createElement(PrevButton_1.default, { onPrev: onPrev }),
            react_1.default.createElement(__1.Flexbox, { flexDirection: 'column', flex: 1 },
                react_1.default.createElement(__1.Flexbox, { pb: '0.25rem' }, stories[currentStoryIndex].slides.map(function (slide, index) { return (react_1.default.createElement(__1.Flexbox, { key: slide.key + '-' + index, flex: 1, style: {
                        backgroundColor: 'rgba(0, 0, 0, .1)',
                        height: 2,
                        marginRight: index === stories[currentStoryIndex].slides.length - 1 ? '0' : '5px'
                    } })); })),
                react_1.default.createElement(__1.Flexbox, { onClick: function () { return onNext(); }, flex: 1, style: { backgroundImage: "url(" + stories[currentStoryIndex].slides[slide].image + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' } })),
            react_1.default.createElement(NextButton_1.default, { storiesLength: stories.length, onNext: onNext }))));
});
