/**
 *
 **/
declare const _default: (className: string) => [string, {
    /**
     * Check modifier
     */
    hasModifier: (modifier: string) => boolean;
    /**
     * Adds modifier
     */
    addModifier: (modifier: string) => void;
    /**
     * Removes modifier
     */
    removeModifier: (modifier: string) => void;
    /**
     * Toggle modifier
     */
    toggleModifier: (modifier: string) => boolean;
}];
/**
 * Use classNames
 */
export default _default;
