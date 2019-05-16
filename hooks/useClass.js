"use strict";
/**
 *
 **/
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * Use classNames
 */
exports.default = (function (className) {
    var defaultClass = className;
    var _a = react_1.useState(defaultClass), cls = _a[0], setClass = _a[1];
    var hasModifier = function (modifier) {
        return cls.match(" " + defaultClass + "-" + modifier) ? true : false;
    };
    var addModifier = function (modifier) {
        setClass(cls + " " + defaultClass + "-" + modifier);
    };
    var removeModifier = function (modifier) {
        setClass(cls.replace(" " + defaultClass + "-" + modifier, ""));
    };
    var toggleModifier = function (modifier) {
        var remove = hasModifier(modifier);
        if (modifier[0] === "!") {
            modifier = modifier.replace(/^!/, "");
            remove = !hasModifier(modifier);
        }
        if (remove) {
            removeModifier(modifier);
        }
        else {
            addModifier(modifier);
        }
    };
    return [cls, {
            hasModifier: hasModifier,
            addModifier: addModifier,
            removeModifier: removeModifier,
            toggleModifier: toggleModifier,
        }];
});
