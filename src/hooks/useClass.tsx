/**
 * 
 **/

import { useState } from "react";

/**
 * Use classNames
 */
export default (className: string) => {
    const defaultClass = className;
    const [cls, setClass] = useState(defaultClass);

    const hasModifier = (modifier: string) => {
        return cls.match(" " + defaultClass + "-" + modifier) ? true : false;
    };
    const addModifier = (modifier: string) => {
        setClass(cls + " " + defaultClass + "-" + modifier);
    };
    const removeModifier = (modifier: string) => {
        setClass(cls.replace(" " + defaultClass + "-" + modifier, ""));
    };
    const toggleModifier = (modifier: string) => {
        if (!hasModifier(modifier)) {
            addModifier(modifier)
        } else {
            removeModifier(modifier)
        }
    };

    return [cls, {
        hasModifier,
        addModifier,
        removeModifier,
        toggleModifier,
    }] as [string, {
        /**
         * Check modifier
         */
        hasModifier: (modifier: string) => boolean
        /**
         * Adds modifier
         */
        addModifier: (modifier: string) => void
        /**
         * Removes modifier
         */
        removeModifier: (modifier: string) => void
        /**
         * Toggle modifier
         */
        toggleModifier: (modifier: string) => boolean
    }]
}